"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
  signInWithEmailAndPassword as signIn,
  signOut as signOutUser,
  onAuthStateChanged,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "@/firebase";
import { deleteCookie, setCookie } from "cookies-next";

const auth = getAuth(app);

type TUser = {
  accessToken: Promise<string> | undefined;
  email: string;
  displayName: string;
  emailVerified: string;
  uid: string;
};

export type UserContextType = {
  user: TUser | null;
  error: string | null;
  signUpUser: (email: string, password: string, name: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const signUpUser = async (email: string, password: string, name: string) => {
    try {
      await createUser(auth, email, password).then((user) => {
        if (user.user) {
          updateProfile(user.user, {
            displayName: name,
          });

          setUser({
            email: user.user.email || "",
            displayName: user.user.displayName || "",
            emailVerified: String(user.user.emailVerified),
            uid: user.user.uid,
            accessToken: user.user.getIdToken(),
          });
        }
        setCookie("access_token", user.user.getIdToken());
        router.push("/platform/dashboard");
      });
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("Email ou senha inválidos");
      }
      console.log("register error", error);
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      await signIn(auth, email, password);
      router.push("/platform/dashboard");
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("Email ou senha inválidos");
      }
      console.log("login error", error);
    }
  };

  const signOut = async () => {
    try {
      await signOutUser(auth);
      deleteCookie("access_token")
      router.push("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser({
          displayName: user.displayName || "",
          email: user.email || "",
          emailVerified: String(user?.emailVerified),
          uid: user.uid || "",
          accessToken: user?.getIdToken(),
        });
      }
      if (user?.getIdToken) {
        user.getIdToken().then(token => {
          setCookie("access_token", token);
        });
      }
    });

 

    return () => {
      unsubscribe();
    };
  }, [user?.accessToken]);

  return (
    <UserContext.Provider
      value={{ user, error, signUpUser, signInUser, signOut }}
    >
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
