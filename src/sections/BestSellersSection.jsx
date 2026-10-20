import heroImg from "../assets/heroImage.png";
import ProductCard from "../components/ProductCard";

const BestSellersSection = () => {
  return (
    <section className="mx-auto w-9/10 md:w-8/10 mb-10">
      <h4 className="text-emerald-500 font-bold mb-2">Featured Products</h4>
      <h2 className="font-bold text-2xl md:text-3xl mb-6">Best Sellers</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((card, idx) => (
          <ProductCard
            product={{
              image: heroImg,
              title: "product" + idx + 1,
              rating: 5,
              originalPrice: 80.55,
              price: 75,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellersSection;
