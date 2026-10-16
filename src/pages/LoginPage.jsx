import { ArrowBigRight, ArrowRight, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email?.trim()) return toast.error("Email is required");
    if (!password) return toast.error("Password is required");
    if (password.length < 6)
      return toast.error("Password must be at lease 6 chars long");

    console.log({ password, email });
  }
  return (
    <div className="h-[90dvh] flex items-center justify-center px-1">
      <div className="w-xl max-w-full rounded-md shadow bg-white p-5 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Welcome Back!
        </h2>

        <p className="text-gray-500 mb-5">
          Log in to your UpForSell account an continue your journy.
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="border border-gray-200 rounded-md flex items-center gap-3 p-2">
            <Mail size={18} />
            <input
              type="text"
              placeholder="Email Address..."
              className="flex-1 outline-none border-none px-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border border-gray-200 rounded-md flex items-center gap-3 p-2">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Password..."
              className="flex-1 outline-none border-none px-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="text-white bg-emerald-500 font-semibold rounded-md cursor-pointer flex items-center justify-center gap-2 py-2">
            Log In <ArrowRight size={16} />
          </button>
        </form>

        <div className="flex items-center justify-between flex-col md:flex-row mt-5 gap-3">
          <Link to="/sign-up" className="text-blue-600 font-semibold">
            Don't have an acocunt?
          </Link>
          <Link
            to="/forgot-password"
            className="text-emerald-600 font-semibold"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
