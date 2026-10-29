import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
export const categories = [
  { name: "Smartphones", value: "smartphones" },
  { name: "Laptops", value: "laptops" },
  { name: "Mobile Accessories", value: "mobile-accessories" },
  { name: "Menswear", value: "mens-shirts" },
  { name: "Womenswear", value: "tops" },
  { name: "Shoes", value: "mens-shoes" },
  { name: "Watches", value: "mens-watches" },
  { name: "Beauty", value: "beauty" },
  { name: "Home Decoration", value: "home-decoration" },
  { name: "Furniture", value: "furniture" },
  { name: "Groceries", value: "groceries" },
  { name: "Sports Accessories", value: "sports-accessories" },
];

export const brands = [
  { name: "Apple", value: "Apple" },
  { name: "Samsung", value: "Samsung" },
  { name: "Huawei", value: "Huawei" },
  { name: "OPPO", value: "OPPO" },
  { name: "Infinix", value: "Infinix" },
  { name: "Microsoft", value: "Microsoft" },
  { name: "HP", value: "HP" },
  { name: "Dell", value: "Dell" },
  { name: "Lenovo", value: "Lenovo" },
  { name: "ASUS", value: "ASUS" },
  { name: "Nike", value: "Nike" },
  { name: "Puma", value: "Puma" },
  { name: "Adidas", value: "Adidas" },
  { name: "Gucci", value: "Gucci" },
  { name: "Dior", value: "Dior" },
  { name: "Chanel", value: "Chanel" },
  { name: "Rolex", value: "Rolex" },
  { name: "Casio", value: "Casio" },
  { name: "Sony", value: "Sony" },
  { name: "Logitech", value: "Logitech" },
];
const BrowseDesktopSideBar = ({
  searchParams,
  setSearchParams,
  openSideBar,
  setOpenSideBar,
}) => {
  const categoriesParams = new Set([...searchParams.getAll("category")]);
  const brandsParams = new Set([...searchParams.getAll("brand")]);
  const sideBarRef = useRef();
  function toggleCategory(category) {
    const params = new URLSearchParams(searchParams);
    const selected = searchParams.getAll("category");
    params.delete("category");

    const updated = selected.includes(category)
      ? selected.filter((cat) => cat != category)
      : [...selected, category];

    updated.forEach((element) => {
      params.append("category", element);
    });
    setSearchParams(params);
  }

  // toggle brand
  function toggleBrand(brand) {
    const params = new URLSearchParams(searchParams);
    const selected = searchParams.getAll("brand");
    params.delete("brand");

    const updated = selected.includes(brand)
      ? selected.filter((b) => b !== brand)
      : [...selected, brand];
    updated.forEach((el) => params.append("brand", el));
    setSearchParams(params);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target))
        setOpenSideBar(false);
    }

    if (openSideBar) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSideBar, setOpenSideBar]);
  return (
    <aside
      ref={sideBarRef}
      className={`fixed z-50 lg:sticky top-1 left-0 lg:top-20 self-start w-fit h-screen lg:max-h-[90dvh] overflow-y-auto transform lg:translate-x-0 ${openSideBar ? "translate-x-0" : "translate-x-[-120%]"} duration-300 `}
    >
      {/* close btn */}
      <button
        onClick={() => setOpenSideBar(false)}
        className="flex lg:hidden  absolute top-2 right-2 cursor-pointer size-fit "
      >
        <X size={20} />
      </button>
      <div className="w-full bg-gray-100 rounded-md shadow  py-2 px-6">
        <h3 className="font-bold text-2xl">Categories</h3>

        <div>
          {categories.map((category) => (
            <div className="flex items-center gap-2 mt-3" key={category.value}>
              <input
                type="checkbox"
                value={category.value}
                className="size-4"
                onChange={(e) => toggleCategory(e.target.value)}
                checked={categoriesParams.has(category.value)}
              />
              <span className="font-semibold text-gray-500">
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* brands */}
        <h3 className="font-bold text-xl mt-10">Brands</h3>

        <div>
          {brands.map((brand) => (
            <div className="flex items-center gap-2 mt-3" key={brand.value}>
              <input
                type="checkbox"
                value={brand.value}
                className="size-4"
                onChange={(e) => toggleBrand(e.target.value)}
                checked={brandsParams.has(brand.value)}
              />
              <span className="font-semibold text-gray-500">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BrowseDesktopSideBar;
