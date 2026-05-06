import React from "react";
import ProductCard from "../../components/productCard/ProductCard";

const Products = () => {
  return (
    <div className="px-5 my-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Find Your Products
        </h1>

        {/* Search Box */}
        <div className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700">
            Search
          </button>
        </div>
      </div>

      {/* Product Grid Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default Products;
