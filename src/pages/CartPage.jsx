import React, { useEffect } from "react";
import useCart from "../store/useCartStore";
import bagImage from "../assets/bag.png";
import CartProduct from "../components/CartProduct";
import { ChevronRight, Lock, ShieldCheck, Trash, Truck } from "lucide-react";
import YouMyAlsoLike from "../components/YouMyAlsoLike";
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
];
const CartPage = () => {
  const { cart, loading, error, getCart } = useCart();

  useEffect(() => {
    getCart();
  }, [getCart, cart]);

  return (
    <div className="min-h-[90dvh] w-9/10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
        {/* left side */}
        <div className="col-span-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Your Cart
          </h1>
          <h5 className="font-semibold text-gray-500">3 Items in your cart</h5>
          {/* cart products */}
          <div className="w-full rounded-md shadow bg-white  mt-5 space-y-5">
            {cartProducts.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="bg-gray-50 rounded-md shadow p-3">
          <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-500 font-semibold text-sm">
              Subtotal (3 items)
            </p>
            <span className="font-bold text-lg">
              ${cartProducts.reduce((a, e) => a + e.price, 0).toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4 border-b border-gray-300 pb-4">
            <p className="text-gray-500 font-semibold text-sm">Shipping</p>
            <span className="font-semibold text-emerald-500">free</span>
          </div>

          <div className="flex items-center justify-between mt-4  mb-6">
            <p className="text-2xl font-bold">Total</p>
            <span className="font-bold text-2xl md:text-3xl text-emerald-500">
              ${cartProducts.reduce((a, e) => a + e.price, 0).toFixed(2)}
            </span>
          </div>

          <button className="w-full flex items-center justify-center gap-1 bg-emerald-500 text-white py-3  cursor-pointer rounded-md font-semibold">
            <Lock size={18} /> Procees To Cehckout
          </button>

          <div className="flex items-center gap-2 justify-center text-gray-500 mt-5 mb-10">
            <ShieldCheck />
            Secure checkout
          </div>

          <div className="bg-emerald-50 rounded-lg p-4 flex items-center justify-between ">
            <div className="flex items-center gap-5">
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
      </div>

      <button className="text-gray-500 flex items-center justify-center gap-2 cursor-pointer">
        <Trash size={20} /> Clear Cart
      </button>

      <YouMyAlsoLike category={"laptops"} />
    </div>
  );
};

export default CartPage;
