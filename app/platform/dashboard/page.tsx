"use client"

import { useUser } from "@/context/userContext"

export default function Dashboard() {
  const {user, signOut} = useUser()
  return (
    <div>Olá, {user?.displayName}, {user?.email}
      <button onClick={()=>signOut()}>sair</button>
    </div>
  )
}
