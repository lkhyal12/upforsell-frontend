import { Search, ShoppingBag, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import useAuthStore from "../store/authStore";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="">
      {windowWidth >= 1024 ? <DeskTopNav /> : <MobileNav />}
    </div>
  );
};

function DeskTopNav() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user, loading, isAdmin } = useAuthStore();
  const cart = [1];

  const navigate = useNavigate();
  return (
    <nav className="relative  flex items-center w-full justify-between px-1 py-1 md:px-4">
      <div className="leftSide flex items-center  gap-15  grow">
        <div className="logo" onClick={() => navigate("/")}>
          <img className="size-22" src={logoImg} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <Link to="/" className="font-medium">
            {" "}
            Home
          </Link>
          <Link to="/products" className="font-medium">
            {" "}
            Browse
          </Link>
          <Link to="/about" className="font-medium">
            {" "}
            About
          </Link>

          <Link to="/contact" className="font-medium">
            {" "}
            Contact
          </Link>
        </div>
      </div>

      {/* righside */}
      <div className="flex items-center gap-3">
        <button
          className="relative cursor-pointer "
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <ShoppingCart />
          <span className="text-white bg-orange-500 rounded-full size-5 flex items-center justify-center text-xs absolute -top-2 -right-3">
            {cart.length}
          </span>
        </button>
        <button
          className="search cursor-pointer"
          onClick={() => setIsSearchBarOpen(true)}
        >
          <Search size={18} />
        </button>
        {!user && (
          <button className="px-5 py-1 rounded-xl border border-black/50 cursor-pointer font-medium">
            Log In
          </button>
        )}
        {!user && (
          <button className="px-5 py-1 rounded-xl border border-emerald-500 cursor-pointer bg-emerald-600 text-white font-medium">
            Sign Up
          </button>
        )}

        {user && isAdmin && (
          <button className="px-2 py-1 rounded-xl border cursor-pointer text-xs bg-black text-white font-medium">
            Admin
          </button>
        )}
        {user && (
          <button className="px-5 py-1 rounded-xl border border-red-500 cursor-pointer bg-red-600 text-white font-medium">
            Log Out
          </button>
        )}
      </div>

      {isSearchBarOpen && (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-120 border border-gray-200 rounded py-1 px-2 outline-none"
            />
          </div>

          <button
            className="absolute right-4 top-1/4 cursor-pointer "
            onClick={() => setIsSearchBarOpen(false)}
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
      )}

      <div
        className={`fixed top-0 bottom-0 right-0 w-1/3 duration-300 transform bg-white ${isCartOpen ? "translate-x-0" : "translate-x-full"} shadow-md`}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => setIsCartOpen(false)}
        >
          <X />
        </button>
      </div>
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="">
      <h1>Mobile NnavBar</h1>
    </div>
  );
}
export default Navbar;
