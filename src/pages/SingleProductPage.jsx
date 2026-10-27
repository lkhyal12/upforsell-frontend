import React, { useEffect, useState } from "react";
import bagImage from "../assets/bag.png";
import { RotateCcw, ShieldCheckIcon, ShoppingCart, Truck } from "lucide-react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import useProducts from "../store/useProductsStore";
import YouMyAlsoLike from "../components/YouMyAlsoLike";
const SingleProductPage = () => {
  const { fetchSingleProduct, product, loading, error } = useProducts();
  const [selectedImage, setSeelectedImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  function handleQuantity(sign) {
    if (sign === "-") {
      if (quantity == 1) return;
      else setQuantity((prev) => prev - 1);
    } else setQuantity((prev) => prev + 1);
  }
  console.log(product);
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id, fetchSingleProduct]);

  useEffect(() => {
    if (product) setSeelectedImage(product.images[0]);
    console.log("changed");
  }, [product]);

  if (loading)
    return (
      <div className="h-[80dvh] flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  return (
    <div className="min-h-dvh w-9/10  mt-10 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* left side */}

        <div className="flex-1 flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex items-center justify-center lg:flex-col gap-2 flex-row">
            {product?.images.map((image) => (
              <img
                key={image}
                src={image}
                className={`size-22 object-cover rounded-md cursor-pointer ${selectedImage === image ? "border-2 border-emerald-500 opacity-100" : "border border-gray-500 opacity-75"}`}
                alt=""
                onClick={() => setSeelectedImage(image)}
              />
            ))}
          </div>
          {/* main image */}
          <div className="flex-1 bg-gray-100 rounded-md">
            <img
              src={selectedImage ?? product?.images[0]}
              className="w-full"
              alt=""
            />
          </div>
        </div>

        {/* right side */}
        <div className="rightSide flex-1 ">
          <div className="">
            <span className="text-emerald-700 bg-emerald-300 px-2 rounded-lg text-sm font-semibold">
              In Stock
            </span>
            <h3 className="font-bold text-2xl lg:text-3xl mt-1 mb-4">
              {product?.title}
            </h3>
            <div className="flex items-center gap-10">
              <h3 className="font-bold text-lg">Reviews </h3>
              <div>
                <span className="font-bold text-emerald-400 mr-2">
                  {product?.rating}
                </span>
                <span className="text-emerald-400">
                  ({product?.reviews.length} reviews)
                </span>
              </div>
            </div>

            {/* price */}
            <div className="flex items-center gap-5 mt-3">
              <h3 className="text-emerald-600 text-xl lg:text-2xl font-bold">
                ${product?.price}
              </h3>
              <h4 className="text-gray-500 line-through font-bold text-sm">
                $
                {(
                  product?.price /
                  (1 - product?.discountPercentage / 100)
                ).toFixed(2)}
              </h4>
              <span className="text-emerald-700 bg-emerald-300 px-2 rounded-lg text-sm font-semibold">
                {parseInt(product?.discountPercentage)}% OFF
              </span>
            </div>
            {/* description */}
            <p className="text-gray-500 my-5">{product?.description}</p>

            {/* shipping info */}
            <div className="flex flex-col lg:flex-row  lg:items-center gap-5 lg:gap-10 my-10">
              <div className="flex gap-2 items-center lg:border-r lg:border-r-gray-300 pr-5">
                <Truck size={30} className="text-gray-600" />
                <div>
                  <h4 className="text-gray-600 font-semibold">Free Shipping</h4>
                  <p className="text-gray-500 text-sm">On Orders Over $50</p>
                </div>
              </div>

              <div className="flex gap-2 items-center lg:border-r lg:border-r-gray-300 pr-5">
                <ShieldCheckIcon size={30} className="text-gray-600" />
                <div>
                  <h4 className="text-gray-600 font-semibold">
                    1 Year Warranty
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Full manufacturer warranty
                  </p>
                </div>
              </div>

              <div className="flex gap-2 items-center ">
                <RotateCcw size={30} className="text-gray-600" />
                <div>
                  <h4 className="text-gray-600 font-semibold">
                    30-days returns
                  </h4>
                  <p className="text-gray-500 text-sm">Hassle-free returns</p>
                </div>
              </div>
            </div>

            {/* add to cart btn */}
            <div className="flex items-center gap-5 lg:gap-10">
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

              <button className="bg-emerald-600 text-emerald-50 px-10 rounded-lg cursor-pointer py-2 flex items-center justify-center gap-2 font-semibold">
                <ShoppingCart size={20} />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* you may also like */}
      {product && <YouMyAlsoLike category={product?.category} />}
    </div>
  );
};

export default SingleProductPage;
