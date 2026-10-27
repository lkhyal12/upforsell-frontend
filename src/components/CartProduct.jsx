import { ShoppingCart, Trash } from "lucide-react";
import React, { useState } from "react";

const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(sign) {
    if (sign === "+") setQuantity((prev) => prev + 1);
    else {
      if (quantity > 1) setQuantity((prev) => prev - 1);
    }
  }

  async function handleDelete() {}
  return (
    <div className="flex w-9/10 mx-auto py-3 h-fit  border-b border-gray-300 items-center justify-between">
      {/* left side */}
      <div className="flex items-center gap-3">
        <div className="bg-gray-200 rounded-md">
          <img className="w-40" src={product.image} alt={product.title} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <div className="flex items-center justify-between">
            {product.color && (
              <span className="text-gray-400">{product.color}</span>
            )}
            <span className="text-gray-500 font-semibold flex items-center gap-2">
              {" "}
              <span className="size-2  rounded-full bg-emerald-500 flex" />
              In stock
            </span>
          </div>
          <h3 className="text-emerald-500 font-bold text-lg">
            ${product.price.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* right side */}
      <div className="h-full">
        <div className="flex flex-col gap-6 h-full justify-between">
          <div className="flex items-center gap-6">
            <h3 className="font-bold text-lg">
              ${(product.price * quantity).toFixed(2)}
            </h3>
            <button className="cursor-pointer" onClick={handleDelete}>
              <Trash size={20} className="text-gray-400" />
            </button>
          </div>

          {/* quantity */}
          <div>
            <div className="flex items-center border border-gray-300 py-1 px-3 rounded-md">
              <button
                onClick={() => handleQuantity("-")}
                disabled={quantity <= 1}
                className="font-bold cursor-pointer text-lg border-r border-gray-300 pr-3 disabled:opacity-50 disabled:pointer-events-none"
              >
                -
              </button>
              <span className="px-2 text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantity("+")}
                className="font-bold cursor-pointer text-lg border-l border-gray-300 pl-3"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
