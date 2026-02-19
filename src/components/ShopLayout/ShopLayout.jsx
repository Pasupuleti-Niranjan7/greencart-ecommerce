import { useState } from "react";
import EndBanner from "../../EndBanner";
import Footer from "../../Footer";
import ShopBanner from "./ShopBanner";
import ShoppingProducts from "./ShopProducts";
import { Helmet } from 'react-helmet-async';
import { FaSearch } from "react-icons/fa";

function ShopLayout({ products }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "priceLowHigh") return a.price - b.price;
      if (sortOption === "priceHighLow") return b.price - a.price;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <>
      <Helmet>
        <title>Shop | Niranjan Indoor Plants</title>
        <meta name="description" content="Browse our extensive collection of indoor plants. Find the perfect green companion for your space." />
      </Helmet>
      <ShopBanner />
      
      {/* Search and Sort Section */}
      <div className="max-w-[1280px] mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search plants..."
            className="w-full pl-10 pr-4 py-2 border border-lime-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-white shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-medium text-gray-700">Sort by:</label>
          <select
            id="sort"
            className="border border-lime-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-white shadow-sm cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      <ShoppingProducts products={filteredProducts} />
      <EndBanner />
      <Footer />
    </>
  );
}

export default ShopLayout;