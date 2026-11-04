import { ChevronRight, Lock, ShoppingCart, Truck, X } from "lucide-react";
import bagImage from "../assets/bag.png";
import CartProduct from "./CartProduct";
const cartProducts = [
  {
    title: "Perfect handbag",
    id: 1,
    color: "white",
    price: 50,
    image: bagImage,
  },
  {
    title: "Perfect handbag",
    id: 2,
    color: "black",
    price: 57,
    image: bagImage,
  },
  {
    title: "Perfect handbag",
    id: 2,
    color: "black",
    price: 57,
    image: bagImage,
  },
  {
    title: "Perfect handbag",
    id: 2,
    color: "black",
    price: 57,
    image: bagImage,
  },
];

const CartSideBar = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 w-1/3 duration-300 transform bg-white ${isCartOpen ? "translate-x-0" : "translate-x-full"} pb-10 shadow-md z-50 min-h-dvh flex flex-col justify-between`}
    >
      <div className="flex-1 overflow-y-scroll">
        <div className="py-8 px-5">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <ShoppingCart size={40} className="text-emerald-500" />
            <div>
              {" "}
              <h2 className="text-xl md:text-2xl font-bold">Your Cart</h2>
              <p className="text-gray-500 font-semibold">3 items</p>
            </div>
          </div>
          {/* cart products */}
          {cartProducts.map((product, idx) => (
            <CartProduct
              product={product}
              key={product.id + idx}
              isSlider={true}
            />
          ))}
        </div>

        <div className="w-9/10 mx-auto bg-emerald-50 rounded-lg p-4 flex items-center justify-between ">
          <div className="flex items-center gap-5 ">
            <Truck size={30} className="text-emerald-500" />
            <div>
              <h3 className="text-emerald-500 font-bold ">Free Shipping</h3>
              <p className="text-gray-500 text-sm">
                You are eligible for free shipping!
              </p>
            </div>
          </div>
          <ChevronRight size={22} className="text-gray-500" />
        </div>
      </div>

      {/* checkout */}
      <div className="mt-5 w-9/10 mx-auto">
        <h2 className=" font-bold">Order Summary</h2>
        <div className="flex items-center justify-between mt-4 border-b border-gray-300 pb-4">
          <p className="text-gray-500 font-semibold text-sm">
            Subtotal (3 items)
          </p>
          <span className="font-semibold text-gray-900">$150.55</span>
        </div>

        <div className="flex items-center justify-between mt-4 border-b border-gray-300 pb-4">
          <p className="text-gray-500 font-semibold text-sm">Shipping</p>
          <span className="font-semibold text-emerald-500">free</span>
        </div>

        <div className="flex items-center justify-between mt-4  mb-6">
          <p className="text-xl font-bold">Total</p>
          <span className="font-bold text-xl md:text-3xl text-emerald-500">
            ${cartProducts.reduce((a, e) => a + e.price, 0).toFixed(2)}
          </span>
        </div>

        <button className="w-full flex items-center justify-center gap-1 bg-emerald-500 text-white py-3  cursor-pointer rounded-md font-semibold">
          <Lock size={18} /> Procees To Cehckout
        </button>
      </div>
      <button
        className="absolute top-3 right-3 text-gray-500 cursor-pointer"
        onClick={() => setIsCartOpen(false)}
      >
        <X />
      </button>
    </div>
  );
};

export default CartSideBar;
