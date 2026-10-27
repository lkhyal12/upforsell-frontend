import { useEffect, useState } from "react";
import heroImg from "../assets/heroImage.png";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { getErrorMsg } from "../lib/utils";
const apiUrl = "https://dummyjson.com/products";
const BestSellersSection = () => {
  const [products, setProducts] = useState([]);
  const [laoding, setLaoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchProducts() {
      setLaoding(true);
      try {
        const response = await axios.get(apiUrl);
        const products = response.data.products;
        const bestSellers = products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4)
          .map((product) => ({
            title: product.title,
            image: product.images[0],
            price: product.price,
            originalPrice:
              product.price / (1 - product.discountPercentage / 100),
            productId: product.id,
          }));
        setProducts(bestSellers);
      } catch (err) {
        console.log(err);
        const errorMsg = getErrorMsg(err);
        setError(errorMsg);
      } finally {
        setLaoding(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="mx-auto w-9/10 md:w-8/10 mb-10">
      <h4 className="text-emerald-500 font-bold mb-2">Featured Products</h4>
      <h2 className="font-bold text-2xl md:text-3xl mb-6">Best Sellers</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellersSection;
