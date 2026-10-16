import { ArrowRight, Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const loading = true;
  // handle formData change
  function handleFormDataChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name.trim() || !email.trim() || !password || !confirmPassword)
      return toast.error("All fields are required");
    if (password.length < 6)
      return toast.error("Password must be at least 6 charcters long");
    if (password !== confirmPassword)
      return toast.error("Passwords do not match");
    console.log("sign up");
  }
  return (
    <div className="h-[90dvh] flex items-center justify-center px-1">
      <div className="w-xl max-w-full rounded-md shadow bg-white p-5 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Create your account!
        </h2>

        <p className="text-gray-500 mb-5">
          Join a growing community pf buyers and sellers it's quick and easy.
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="border border-gray-200 rounded-md flex items-center gap-3 p-2">
            <User size={18} />
            <input
              type="text"
              placeholder="Full Name..."
              className="flex-1 outline-none border-none px-1"
              name="name"
              onChange={handleFormDataChange}
            />
          </div>
          <div className="border border-gray-200 rounded-md flex items-center gap-3 p-2">
            <Mail size={18} />
            <input
              type="text"
              placeholder="Email Address..."
              className="flex-1 outline-none border-none px-1"
              name="email"
              onChange={handleFormDataChange}
            />
          </div>
          <div className="border border-gray-200 rounded-md flex items-center gap-3 p-2">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Password..."
              className="flex-1 outline-none border-none px-1"
              name="password"
              onChange={handleFormDataChange}
            />
          </div>

          <div className="border border-gray-200 rounded-md flex items-center gap-3 p-2">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Password..."
              className="flex-1 outline-none border-none px-1"
              name="confirmPassword"
              onChange={handleFormDataChange}
            />
          </div>

          <button
            className="text-white bg-emerald-500 font-semibold rounded-md cursor-pointer flex items-center justify-center gap-2 py-2 disabled:opacity-70 disabled:pointer-events-none"
            disabled={loading}
          >
            {loading ? (
              <Loader size="sm" />
            ) : (
              <>
                Create Account <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="flex items-center justify-center flex-col md:flex-row mt-5">
          <Link to="/login" className="text-blue-600 font-semibold">
            Already have an acocunt?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
