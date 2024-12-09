"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";

export default function SignUp() {
  const router = useRouter();

  // State variables for form input and error messages
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    // Reset error state
    setError(null);

    // Validate input
    if (!email || !password || !confirmPassword || !userName) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send request to signup API
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, user_type: "student", userName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      // Redirect to success page or login page
      router.push("/auth/signin");
    } catch (err: any) {
      setError(err.message || "Failed to sign up.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#404552] to-[#383c4a] text-[#4b5162] font-sans">
      <div className="w-full max-w-md">
        <div className="bg-[#383c4a] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#404552] text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#5294e2] focus:border-transparent"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#404552] text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#5294e2] focus:border-transparent"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#404552] text-white mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#5294e2] focus:border-transparent"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#404552] text-white mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#5294e2] focus:border-transparent"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-[#5294e2] hover:bg-[#4a84c9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-[#7c818c]">
              Already have an account?
              <button
                className="text-[#5294e2] hover:text-[#4a84c9] font-bold ml-1"
                onClick={() => router.push("/auth/signin")}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
