import React from "react";
import HeroSection from "../sections/HeroSection";
import BestSellersSection from "../sections/BestSellersSection";
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import bagImage from "../assets/bag.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeroSection />
      <BestSellersSection />

      <div className="bg-emerald-600 rounded-2xl px-10 w-9/10 md:w-8/10 mx-auto py-5">
        <div className="flex items-center justify-between">
          {/* left side */}
          <div className="flex flex-col gap-5 text-gray-200">
            <h3 className="font-bold">Special Offer</h3>
            <h2 className="text-2xl font-bold">
              Get 20% Off Of Your First Order
            </h2>
            <p>
              Join UpForSell and enjouy an exlusive welcome discount on your
              first purchase
            </p>

            <button
              className="bg-gray-200 text-emerald-600 rounded-4xl w-fit px-10 py-2 cursor-pointer flex items-center justify-center gap-2 font-bold"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up Now <ArrowRight size={18} />
            </button>
          </div>

          {/* right side */}
          <div className="flex-1">
            <img src={bagImage} alt="bagImage" className="w-3/4 ml-auto" />
          </div>
        </div>
      </div>

      {/* app features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 w-9/10 md:w-8/10 mx-auto">
        <div className="flex items-center gap-2 border-r border-gray-400">
          <Truck size={40} className="text-emerald-600" />
          <div>
            <h3 className="font-bold mb-1">Fast & reliable delivery</h3>
            <h4 className="font-bold text-sm text-gray-600">
              Get your orders quickly
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 border-r border-gray-400">
          <ShieldCheck size={40} className="text-emerald-600" />
          <div>
            <h3 className="font-bold mb-1">Secure Checkout</h3>
            <h4 className="font-bold text-sm text-gray-600">
              100% safe payments
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 border-r border-gray-400">
          <RotateCcw size={40} className="text-emerald-600" />
          <div>
            <h3 className="font-bold mb-1">Easy Returns</h3>
            <h4 className="font-bold text-sm text-gray-600">
              Hassle-free Process
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <Headphones size={40} className="text-emerald-600" />
          <div>
            <h3 className="font-bold mb-1">Dedicated Support</h3>
            <h4 className="font-bold text-sm text-gray-600">
              We're here to help
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
