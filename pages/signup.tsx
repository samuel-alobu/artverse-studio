"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/newUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, username }),
      });

      if (!response.ok) {
        console.error("Sign-up failed");
        return;
      }

      // Redirect to NextAuth signin page
      router.push("/api/auth/signin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
      <div className="w-[89%] max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded font-semibold disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
