import {
  LogOut,
  Menu,
  Search,
  SearchIcon,
  ShoppingBag,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import useAuthStore from "../store/useAuthStore";
import CartSideBar from "./CartSideBar";
import useCart from "../store/useCartStore";
import { generateGuestId } from "../lib/utils";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      {windowWidth >= 1024 ? (
        <DeskTopNav isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      ) : (
        <MobileNav isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      <CartSideBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </div>
  );
};

// desktop navbar
function DeskTopNav({ isCartOpen, setIsCartOpen }) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const { user, loading, isAdmin, getProfile } = useAuthStore();
  console.log({ user });
  const { cart, getCart } = useCart();
  console.log({ cart });
  const searchInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target))
        setIsSearchBarOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);
  useEffect(() => {
    const guestId = generateGuestId();
    if (guestId || user) getCart({ userId: user?._id || null });
  }, [getCart, user]);
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
          <Link to="/shop" className="font-medium">
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
      <div className="flex items-center gap-5">
        <button
          className="relative cursor-pointer "
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <ShoppingCart />
          <span className="text-white bg-orange-500 rounded-full size-5 flex items-center justify-center text-xs absolute -top-2 -right-3">
            {cart.cartItems?.length || 0}
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
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-120 border border-gray-200 bg-gray-300 rounded-lg py-1 px-2 outline-none"
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

      {/* cart side bar */}
    </nav>
  );
}

function MobileNav({ setIsCartOpen, isCartOpen }) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const searchInputRef = useRef();
  const drawerRef = useRef();
  const menuBtnRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutisde(e) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        !menuBtnRef.current?.contains(e.target)
      )
        setIsMobileNavOpen(false);
    }
    window.addEventListener("click", handleClickOutisde);

    return () => window.removeEventListener("click", handleClickOutisde);
  }, []);
  return (
    <div className=" relative w-9/10 mx-auto">
      <div className="w-full flex items-center justify-between">
        {/* menu btn */}
        <button
          ref={menuBtnRef}
          className="flex-1"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <Menu size={20} />
        </button>

        {/* logo */}
        <div>
          <img className="w-15 mr-10" src={logoImg} alt="" />
        </div>

        <div className="flex-1 flex items-center justify-end gap-5 text-gray-700">
          <button
            className="cursor-pointer"
            onClick={() => setIsSearchBarOpen(true)}
          >
            <SearchIcon />
          </button>

          <button
            className="cursor-pointer"
            onClick={() => {
              setIsCartOpen(true);
            }}
          >
            <ShoppingCart />
          </button>

          <button
            className="cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <User />
          </button>
        </div>
      </div>
      {isSearchBarOpen && (
        <div className="absolute  inset-0 bg-white flex items-center justify-center">
          <div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-60 border border-gray-200 bg-gray-300 rounded-lg py-1 px-2 outline-none "
            />

            <button
              className="absolute top-4 -right-3 cursor-pointer"
              onClick={() => setIsSearchBarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* mobile nav bar menu */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 bottom-0 w-9/10 max-w-2xl bg-white transform ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"} duration-300 shadow-sm `}
      >
        <button
          onClick={() => setIsMobileNavOpen(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <div className="links flex flex-col gap-10 pt-[10%] pl-[10%] h-full">
          <div className="mb-10 flex items-center justify-center">
            <h2 className="font-bold text-2xl flex items-center gap-1">
              <ShoppingBag size={30} className="text-emerald-600" /> UpForSell
            </h2>
          </div>
          <Link to="/" className="font-semibold">
            HOME
          </Link>
          <Link to="/shop" className="font-semibold">
            BROWSE
          </Link>
          <Link to="/about" className="font-semibold">
            ABOUT
          </Link>
          <Link to="/about" className="font-semibold">
            CONTACT
          </Link>
          <Link to="/profile" className="font-semibold">
            ACCOUNT
          </Link>
          {user && (
            <div className="flex-1 flex flex-col justify-end pb-2">
              <button className="bg-emerald-200 w-9/10 max-w-xl mx-auto rounded-md cursor-pointer text-emerald-900 py-2  flex items-center justify-center gap-5 font-bold">
                <LogOut size={25} />
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
