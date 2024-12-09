"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/mock'); // Redirect to the desired page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#404552] to-[#383c4a] text-[#4b5162] font-sans">
      <div className="w-full max-w-md">
        <div className="bg-[#383c4a] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
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
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-[#5294e2] hover:bg-[#4a84c9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-[#5294e2] hover:text-[#4a84c9]"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-[#7c818c]">
              Don't have an account?
              <button
                className="text-[#5294e2] hover:text-[#4a84c9] font-bold ml-1"
                onClick={() => router.push("/auth/signup")}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
