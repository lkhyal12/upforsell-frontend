import { ShoppingCart } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, originalPrice, price } = product;
  return (
    <div className="w-full  rounded-md shadow-md bg-gray-50 flex flex-col gap-3 px-1 py-2">
      <img src={image} alt={title} className="w-full rounded-md" />
      <h4 className="font-semibold text-lg">{title}</h4>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">${price.toFixed(2)}</h3>
        <h4 className="text-sm font-semibold line-through text-gray-400">
          ${originalPrice}
        </h4>
      </div>
      <button className="bg-emerald-600 w-full rounded-lg text-white font-semibold mx-auto py-2 cursor-pointer flex items-center justify-center gap-2">
        <ShoppingCart size={18} /> Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
