import { User } from "lucide-react";

const ProfileComponent = ({ user }) => {
  return (
    <>
      <div className="shadow rounded-md border border-gray-100 p-5">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <User size={40} className="text-emerald-600" /> Personal Info
        </h2>

        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <h3 className="font-semibold text-gray-500">Full Name</h3>
            <p className="font-bold">{user.name}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Phone Number</h3>
            <p className="font-bold">+2125422546230</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Email Address</h3>
            <p className="font-bold">{user.email}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500">Location</h3>
            <p className="font-bold">New York USA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
