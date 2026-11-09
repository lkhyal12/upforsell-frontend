import React from "react";
import ShoppingIllustration from "../components/Ilustration";
import logoImg from "../assets/logo.png";
import {
  ChevronRight,
  Headset,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  Zap,
} from "lucide-react";
import RocketIllustration from "../components/RocketIllustration";
const AboutPage = () => {
  return (
    <div className="w-9/10 mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        About Us
      </h2>
      <div className=" flex max-sm:flex-col justify-center  items-center max-sm:py-5 px-10  bg-emerald-100  rounded-xl mt-5 ">
        <div className="flex-1 ">
          <div className="flex items-center gap-5 mb-5">
            <ShoppingBag size={60} className="text-emerald-500" />
            <h2 className="text-2xl md:text-4xl font-bold">UpForSell</h2>
          </div>
          <h2 className="font-bold text-2xl md:text-4xl">Shop Smart.</h2>
          <h2 className="font-bold text-2xl md:text-4xl text-emerald-500">
            Shop Smart.
          </h2>
          <p className="text-gray-500 font-bold max-w-xl mt-5">
            You favorite online store for the best products, unbeatable prices,
            and a seamless shopping expirience.
          </p>
        </div>
        <div className="flex-1">
          <ShoppingIllustration />
        </div>
      </div>
      {/* story */}
      <div>
        <div className="flex max-sm:flex-col-reverse items-center mt-5">
          {/* left side */}
          <div className="flex-2">
            <h2 className="text-3xl md:text-5xl font-bold  mb-6">Our Story</h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              UpForSell was born from a simple idea: Make online shopping
              easier, smarter and more enjoyable for everyone. We're a
              passionate team dedicated to bringing you a wide range of
              high-quality products, with a focus on prices, fast delivery and
              excellent customer service{" "}
            </p>
          </div>
          {/* right side */}
          <div className="flex-1">
            <RocketIllustration />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl md:text-5xl font-bold  mb-10">
          Why Choose UpForSell
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 xl:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="w-fit p-2 rounded-full bg-emerald-100">
              <ShieldCheck className="text-emerald-400" size={60} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Secure Shopping</h3>
              <p className="text-gray-500">
                Your data is always secure with us
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-fit p-2 rounded-full bg-emerald-100">
              <Truck className="text-emerald-400" size={60} color="" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Fast Delivery</h3>
              <p className="text-gray-500">Get your orders quickly</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-fit p-2 rounded-full bg-emerald-100">
              <Headset className="text-emerald-400" size={60} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500">We're here to help anytime</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-fit p-2 rounded-full bg-emerald-100">
              <Tag className="text-emerald-400" size={60} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Best Prices</h3>
              <p className="text-gray-500">More value for your money</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-600 w-9/10 max-w-2xl mx-auto rounded-lg p-10 flex items-center max-sm:flex-col gap-5 my-15">
        <div className="flex-1 text-white">
          <h2 className="text-lg md:text-2xl font-bold">
            Join UpFoSell family
          </h2>
          <p className="text-gray-100 mt-5">
            Discover a better shopping expirience
          </p>
        </div>

        <button className="flex items-center gap-1 rounded-full bg-gray-200 py-2 px-5 cursor-pointer font-semibold">
          Start Shopping <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
