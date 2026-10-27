import React, { useEffect } from "react";
import useCart from "../store/useCartStore";

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
          <div className="w-full rounded-md shadow bg-white h-50 mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
