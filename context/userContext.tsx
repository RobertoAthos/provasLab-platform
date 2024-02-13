"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
  signInWithEmailAndPassword as signIn,
  signOut as signOutUser,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { app } from "@/firebase";
import { useRouter } from "next/navigation";

const auth = getAuth(app);

type TUser = {
  email: string;
  displayName: string;
  emailVerified: string;
  uid: string;
};

export type UserContextType = {
  user: TUser | null;
  signUpUser: (email: string, password: string, name: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<TUser | null>(null);
  const router = useRouter();

  const signUpUser = async (email: string, password: string, name: string) => {
    try {
      await createUser(auth, email, password);

      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: name,
        });

        setUser({
          email: user.email || "",
          displayName: user.displayName || "",
          emailVerified: String(user.emailVerified),
          uid: user.uid,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      await signIn(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await signOutUser(auth);
      router.push("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          email: user.email || "",
          displayName: user.displayName || "",
          emailVerified: String(user.emailVerified),
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, signUpUser, signInUser, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
