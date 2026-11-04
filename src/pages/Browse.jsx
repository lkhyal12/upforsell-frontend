import React, { useEffect, useState } from "react";
import BrowseDesktopSideBar from "../components/BrowseDesktopSideBar";
import headPhonesImage from "../assets/headphones.png";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { getErrorMsg } from "../lib/utils";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal } from "lucide-react";
const Browse = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);
  useEffect(() => {
    async function fetchProducts() {
      const categories = searchParams.getAll("category");
      setLoading(true);
      if (categories.length === 0) {
        try {
          const response = await axios.get("https://dummyjson.com/products");

          setProducts(
            response.data.products.map((product) => ({
              title: product.title,
              image: product.images[0],
              price: product.price,
              originalPrice:
                product.price / (1 - product.discountPercentage / 100),
              id: product.id,
            })),
          );
        } catch (err) {
          const errorMsg = getErrorMsg(err);
          console.log(errorMsg);
          setError(errorMsg);
        } finally {
          setLoading(false);
        }
        return;
      }

      try {
        const responses = await Promise.all(
          categories.map((category) => {
            return axios.get(
              `https://dummyjson.com/products/category/${category}`,
            );
          }),
        );
        console.log(responses);

        const products = responses.flatMap((response) =>
          response.data.products.map((product) => ({
            title: product.title,
            image: product.images[0],
            price: product.price,
            originalPrice:
              product.price / (1 - product.discountPercentage / 100),
            productId: product.id,
          })),
        );
        console.log(products);
        setProducts(products);
      } catch (err) {
        const errorMsg = getErrorMsg(err);
        console.log(errorMsg);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [searchParams]);

  return (
    <div className="h-fit">
      <div className="w-full bg-emerald-100 py-10 mb-10">
        <div className="w-9/10 md:w-8/10 mx-auto h-50 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-emerald-800 mb-3">
              Discover Our Collection
            </h2>
            <p className="max-w-xl text-gray-600 font-semibold">
              Discover amazing products at great prices. Shop your favorite
              categories and find exactly what you need.{" "}
            </p>
          </div>

          <div className="flex-1">
            <img className="w-1/2 ml-auto" src={headPhonesImage} alt="" />
          </div>
        </div>
      </div>
      {/* browse page content */}
      <div>
        <button
          onClick={() => setOpenSideBar(true)}
          className=" lg:hidden w-9/10 mx-auto cursor-pointer bg-gray-200 flex  justify-center items-center gap-1 rounded font-bold py-2 mb-8 "
        >
          <SlidersHorizontal /> Filters
        </button>
        <div className="w-9/10 md:w-9/10 mx-auto flex gap-5">
          <div>
            <BrowseDesktopSideBar
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              openSideBar={openSideBar}
              setOpenSideBar={setOpenSideBar}
            />
          </div>
          {loading ? (
            <div className="flex-1 items-center justify-center h-[80dvh]">
              <Loader size="lg" />
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="flex-1  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((product, idx) => (
                <ProductCard key={product?.id || idx} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
