import { Clock, ShoppingBag, Truck, XCircle } from "lucide-react";
import bagImage from "../assets/bag.png";
import useOrders from "../store/useOrdersStore";
import { useNavigate } from "react-router-dom";
const orders = [
  {
    image: bagImage,
    _id: Math.random().toFixed(10),
    status: "delivered",
    price: 50.5,
    qunatity: 1,
  },
  {
    image: bagImage,
    _id: Math.random().toFixed(10),
    status: "cancelled",
    price: 50.5,
    qunatity: 2,
  },
  {
    image: bagImage,
    _id: Math.random().toFixed(10),
    status: "in transit",
    price: 85.5,
    qunatity: 3,
  },
];
const currentIconObj = {
  delivered: Truck,
  cancelled: XCircle,
  "in transit": Clock,
};
const OrdersComponent = ({ windowSize }) => {
  const { orders } = useOrders();
  const navigate = useNavigate();
  if (!orders || orders.length === 0)
    return (
      <div className="h-[50dvh] flex flex-col items-center justify-center">
        <h2 className="text-lg md:text-2xl font-bold mb-5">No Orders Found!</h2>
        <button
          className="bg-emerald-500 text-white px-10 py-3 rounded-md cursor-pointer font-bold"
          onClick={() => navigate("/shop")}
        >
          Make One Now
        </button>
      </div>
    );
  return (
    <div>
      {/* top side */}
      <div className="flex items-center gap-2 w-full p-5 shadow rounded-md border border-gray-100">
        <ShoppingBag
          className=" text-emerald-500"
          size={windowSize < 600 ? 30 : 45}
        />
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold">My Orders</h2>
          <p className="text-gray-500 font-semibold mt-1">
            Track and manage your orders
          </p>
        </div>
      </div>
      {/* bottom side */}
      <div className="p-5 rounded-md shadow border border-gray-100 mt-5">
        <div className="flex flex-col gap-5">
          {orders.map((order) => {
            const CurrentIcon = currentIconObj[order.status];
            return (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5 md:gap-10">
                  {" "}
                  <div className="bg-gray-200 rounded-md">
                    <img
                      src={order.image}
                      alt={order._id}
                      className="w-30 rounded-md object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="font-bold text-lg mb-2">
                      Order #{order._id}
                    </h3>
                    <p
                      className={`w-50 flex items-center gap-2 py-2 text-lg font-bold px-5 rounded-md ${order.status === "delivered" ? "bg-emerald-100 text-emerald-600" : order.status === "cancelled" ? "bg-gray-200 text-gray-600" : "bg-blue-200 text-blue-600"} `}
                    >
                      {<CurrentIcon size={25} />} {order.status}
                    </p>
                  </div>
                </div>
                <div className="bg-amber-100 w-1/3 max-w-50">
                  <h3 className="font-bold text-lg md:text-2xl text-left">
                    ${(order.price * order.qunatity).toFixed(2)}
                  </h3>
                  <p className="text-gray-500 font-semibold">
                    {order.qunatity} item{order.qunatity > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;
