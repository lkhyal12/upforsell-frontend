import {
  ArrowRight,
  Headphones,
  Headset,
  ShieldCheck,
  Truck,
} from "lucide-react";
import heroImg from "../assets/heroImage.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-9/10 m-auto mt-10">
      {/* left side */}
      <div className="leftSide flex-1">
        <h2 className="text-4xl md:text-6xl font-bold">
          Better Products.
          <br />{" "}
          <span className="text-emerald-600 mt-3 inline-block">
            Better Days.
          </span>
        </h2>

        <p className="text-gray-500 text-lg max-w-xl mt-6 font-semibold">
          Discover high-quality products, great deals, and everything you need -
          all in one place
        </p>
        <button className="bg-emerald-600 text-white flex gap-1 items-center rounded-full py-2 px-6 font-semibold mt-5 cursor-pointer hover:bg-emerald-500">
          Shop now <ArrowRight size={18} />
        </button>

        <div className="flex items-center mt-10 gap-4">
          <div className="flex items-center gap-2 border-r-2 border-gray-200 pr-4">
            <div>
              <Truck className="text-emerald-500" size={35} />
            </div>
            <div>
              <h3 className="font-bold ">Free shipping</h3>
              <p className="text-gray-500 font-semibold">On order over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-r-2 border-gray-200 pr-4">
            <div>
              <ShieldCheck className="text-emerald-500" size={35} />
            </div>
            <div>
              <h3 className="font-bold ">Secure Payments</h3>
              <p className="text-gray-500 font-semibold">100% protected</p>
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <div>
              <Headset className="text-emerald-500" size={35} />
            </div>
            <div>
              <h3 className="font-bold ">Secure Payments</h3>
              <p className="text-gray-500 font-semibold">100% protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <img src={heroImg} alt="hero-image" className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
