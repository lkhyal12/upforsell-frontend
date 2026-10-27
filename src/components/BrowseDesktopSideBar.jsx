import React, { useEffect, useState } from "react";
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
const BrowseDesktopSideBar = ({ searchParams, setSearchParams }) => {
  const categoriesParams = new Set([...searchParams.getAll("category")]);

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
  return (
    <aside className="sticky top-20 self-start w-fit ">
      <div className="w-full bg-gray-100 rounded-md shadow  py-2 px-6">
        <h3 className="font-bold text-3xl">Categories</h3>

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
      </div>
    </aside>
  );
};

export default BrowseDesktopSideBar;
