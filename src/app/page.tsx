"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  const { data: session } = useSession();

  // =========================================================
  // Handlers
  // =========================================================
  const handleLogin = async () => {
    await signIn("github");
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <main>
      <h1>My Todos</h1>
      <p>
        {session ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </p>
    </main>
  );
}
