import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore";

const ProductCard = ({ product }) => {
  const { image, title, originalPrice, price, productId } = product;
  const { user } = useAuthStore();
  const userId = user?._id;
  const { cart, addToCart } = useCart();
  // console.log(cart);
  return (
    <div className="w-full  rounded-md shadow-md bg-gray-50 flex flex-col gap-3 px-1 py-2">
      <Link
        to={`/products/${productId}`}
        className="w-full h-66 overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="w-full rounded-md object-contain"
        />
      </Link>
      <h4 className="font-semibold text-lg my-auto">{title}</h4>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">${price.toFixed(2)}</h3>
        {originalPrice && (
          <h4 className="text-sm font-semibold line-through text-gray-400">
            ${originalPrice.toFixed(2)}
          </h4>
        )}
      </div>
      <button
        onClick={() => addToCart({ productId: product.id, userId })}
        className="bg-emerald-600 w-full rounded-lg text-white font-semibold mx-auto py-2 cursor-pointer flex items-center justify-center gap-2"
      >
        <ShoppingCart size={18} /> Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
