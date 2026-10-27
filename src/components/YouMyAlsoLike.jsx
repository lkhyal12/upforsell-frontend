import React, { useEffect, useState } from "react";
import useProducts from "../store/useProductsStore";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
const YouMyAlsoLike = ({ category }) => {
  const { categoryProducts, fetchProductsByCategory } = useProducts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      await fetchProductsByCategory(category);
      setLoading(false);
    }
    fetchProducts();
  }, [category, fetchProductsByCategory]);
  if (loading)
    return (
      <div className="w-full mt-20 flex items-center justify-center">
        <Loader size="md" />
      </div>
    );
  return (
    <div className="mt-20">
      <h3 className="text-2xl md:text-3xl font-bold mb-5">You may also like</h3>
      <div className="w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categoryProducts.length > 0 &&
          categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                title: product.title,
                image: product.images[0],
                price: product.price,
                originalPrice:
                  product.price / (1 - product.discountPercentage / 100),
                productId: product.id,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default YouMyAlsoLike;
