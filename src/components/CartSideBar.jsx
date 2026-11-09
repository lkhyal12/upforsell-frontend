import { ChevronRight, Link, Lock, ShoppingCart, Truck, X } from "lucide-react";
import bagImage from "../assets/bag.png";
import CartProduct from "./CartProduct";
import useCart from "../store/useCartStore";
import { useNavigate } from "react-router-dom";
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
  const { cart, total, loading } = useCart();
  const navigate = useNavigate();

  function handleNavigate() {
    setIsCartOpen(false);
    navigate("/shop");
  }
  if (loading) return <h1>Loading...</h1>;
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 w-full md:w-2/3 md:max-w-xl duration-300 transform bg-white ${isCartOpen ? "translate-x-0" : "translate-x-full"} pb-10 shadow-md z-50 min-h-dvh flex flex-col justify-between`}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex-1 overflow-y-scroll">
          {!cart.cartItems || cart.cartItems.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold">Cart Is Empty</h2>
              <button
                className="bg-emerald-600 text-white px-10 py-2 rounded-md cursor-pointer mt-5"
                onClick={handleNavigate}
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            <div className="py-8 px-5">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <ShoppingCart size={40} className="text-emerald-500" />
                <div>
                  {" "}
                  <h2 className="text-xl md:text-2xl font-bold">Your Cart</h2>
                  <p className="text-gray-500 font-semibold">
                    {cart.cartItems?.length} item(s)
                  </p>
                </div>
              </div>
              {/* cart products */}
              {cart.cartItems?.map((item, idx) => (
                <CartProduct
                  product={{
                    title: item.dummyProduct.title,
                    id: item.dummyProduct.id,
                    color: item.color,
                    price: item.dummyProduct.price,
                    image: item.dummyProduct.images[0],
                    quantity: item.quantity,
                  }}
                  key={item.dummyProduct.id}
                  isSlider={true}
                />
              ))}
            </div>
          )}

          {cart && cart.cartItems?.length > 0 && (
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
          )}
        </div>
      )}

      {/* checkout */}
      {cart && cart.cartItems && cart.cartItems.length > 0 && (
        <div className="mt-5 w-9/10 mx-auto">
          <h2 className=" font-bold">Order Summary</h2>
          <div className="flex items-center justify-between mt-4 border-b border-gray-300 pb-4">
            <p className="text-gray-500 font-semibold text-sm">
              Subtotal ({cart.cartItems.length} item(s))
            </p>
            <span className="font-semibold text-gray-900">
              ${total?.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4 border-b border-gray-300 pb-4">
            <p className="text-gray-500 font-semibold text-sm">Shipping</p>
            <span className="font-semibold text-emerald-500">free</span>
          </div>

          <div className="flex items-center justify-between mt-4  mb-6">
            <p className="text-xl font-bold">Total</p>
            <span className="font-bold text-xl md:text-3xl text-emerald-500">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="w-full flex items-center justify-center gap-1 bg-emerald-500 text-white py-3  cursor-pointer rounded-md font-semibold">
            <Lock size={18} /> Procees To Cehckout
          </button>
        </div>
      )}
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
