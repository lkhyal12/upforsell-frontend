import React, { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { Bell, LogOut, Settings, ShoppingBag, User } from "lucide-react";
import { Navigate, useSearchParams } from "react-router-dom";
import ProfileComponent from "../components/ProfileComponent";
import OrdersComponent from "../components/OrdersComponent";
import ProfileSettings from "../components/ProfileSettings";
import ProfileNotifications from "../components/ProfileNotifications";
import Loader from "../components/Loader";
const currentComp = {
  profile: ProfileComponent,
  orders: OrdersComponent,
  settings: ProfileSettings,
  notifications: ProfileNotifications,
};
const Profile = () => {
  const { user, logout, getProfile } = useAuthStore();
  const [activeBtn, setActiveBtn] = useState("profile");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const ActiveComponent = currentComp[activeBtn];
  const [loading, setLoading] = useState(true);
  console.log("user", user);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function checkProfile() {
      setLoading(true);
      await getProfile();
      setLoading(false);
    }
    checkProfile();
  }, [getProfile]);
  if (loading)
    return (
      <div className="flex-1 items-center justify-center h-[80dvh]">
        <Loader size="lg" />
      </div>
    );
  if (!user && !loading) return <Navigate to="/login?redirectTo=/profile" />;
  return (
    <div>
      <header className="bg-emerald-500 rounded-xl p-5 w-9/10 md:w-8/10 mx-auto text-white">
        <h2 className="text-lg md:text-2xl font-bold mb-1">{user.name}</h2>
        <p>{user.email}</p>
      </header>
      <main className="w-9/10 md:w-8/10 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 my-10">
        {/* left side */}
        <div className="leftSide overflow-x-scroll flex flex-row lg:flex-col gap-5 border border-gray-100 shadow rounded-md p-5">
          <div
            className={`flex  items-center gap-3 cursor-pointer rounded-md py-2 px-3 w-full ${
              activeBtn === "profile"
                ? "text-emerald-500 bg-emerald-100 border-l-2 border-emerald-500"
                : "text-gray-500"
            } lg:text-lg font-bold`}
            onClick={() => setActiveBtn("profile")}
          >
            <User size={windowSize < 600 ? 20 : 30} />{" "}
            <p className="hidden lg:block">Profile</p>
          </div>

          <div
            className={`flex items-center gap-3 cursor-pointer rounded-md py-2 px-3 w-full ${
              activeBtn === "orders"
                ? "text-emerald-500 bg-emerald-100 border-l-2 border-emerald-500"
                : "text-gray-500"
            } lg:text-lg font-bold`}
            onClick={() => setActiveBtn("orders")}
          >
            <ShoppingBag size={windowSize < 600 ? 20 : 30} />
            <p className="hidden lg:block">My Orders</p>
          </div>

          {/* <div
            className={`flex items-center gap-3 cursor-pointer rounded-md py-2 px-3 w-full ${
              activeBtn === "notifications"
                ? "text-emerald-500 bg-emerald-100 border-l-2 border-emerald-500"
                : "text-gray-500"
            } text-lg font-bold`}
            onClick={() => setActiveBtn("notifications")}
          >
            <Bell size={windowSize < 600 ? 20 : 30} />{" "}
            <p className="hidden lg:flex">Notifications</p>
          </div> */}

          {/* <div
            className={`flex  items-center gap-3 cursor-pointer rounded-md py-2 px-3 w-full ${
              activeBtn === "settings"
                ? "text-emerald-500 bg-emerald-100 border-l-2 border-emerald-500"
                : "text-gray-500"
            } text-lg font-bold`}
            onClick={() => setActiveBtn("settings")}
          >
            <Settings size={windowSize < 600 ? 20 : 30} />{" "}
            <p className="hidden lg:block">Settings</p>
          </div> */}

          <button
            className={`flex flex-col lg:flex-row items-center gap-3 cursor-pointer rounded-md py-2 px-3 w-full 
              text-lg font-bold text-white bg-red-500 justify-center`}
            onClick={() => logout()}
          >
            <LogOut size={windowSize < 600 ? 20 : 30} />{" "}
            <p className="hidden lg:flex">Log Out</p>
          </button>
        </div>

        {/* right side */}
        <div className="col-span-3">
          {<ActiveComponent windowSize={windowSize} user={user} />}
        </div>
      </main>
    </div>
  );
};

export default Profile;
