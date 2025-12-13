"use client";

import { useState } from "react";
import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Navbar } from "./navBar";
import {motion} from  'framer-motion'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  color: string;
  size: string[];
}

interface FilterState {
  gender: string[];
  size: string[];
  color: string[];
  priceRange: string;
  sortBy: string;
}

export const CollectionPage = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Soft Lavender Breeze Kurta",
      price: 2599,
      image: "/model1.jpeg",
      description: "A graceful lavender-toned kurta designed",
      category: "Kurta",
      color: "Lavender",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Golden Mango Heritage Kurta",
      price: 2799,
      image: "/model2.jpeg",
      description: "A rich mango-toned kurta with traditional",
      category: "Kurta",
      color: "Yellow",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Mint White Comfort Kurta",
      price: 2499,
      image: "/model3.jpeg",
      description: "A pristine mint white kurta infused with",
      category: "Kurta",
      color: "White",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Sky Sage Blue Linen Kurta",
      price: 2699,
      image: "/trend.jpeg",
      description: "Crafted from premium linen, this kurta",
      category: "Kurta",
      color: "Blue",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      name: "Mystic Ivory Lite Kurta",
      price: 2799,
      image: "/coll.jpeg",
      description: "An elegant ivory kurta with delicate",
      category: "Kurta",
      color: "Ivory",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      name: "Fresh Mint Pure Linen Kurta",
      price: 2699,
      image: "/coll2.jpeg",
      description: "A refreshing mint kurta made from",
      category: "Kurta",
      color: "Mint",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 7,
      name: "Peach Short Blossom Color Kurta",
      price: 2899,
      image: "/model4.jpeg",
      description: "A vibrant peach kurta that radiates",
      category: "Kurta",
      color: "Peach",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      name: "Cool Stone Blue Linen Kurta",
      price: 2799,
      image: "/model5.jpeg",
      description: "A sophisticated stone blue kurta that",
      category: "Kurta",
      color: "Blue",
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 9,
      name: "Aqua Tide Heritage Kurta",
      price: 2699,
      image: "/model6.jpeg",
      description: "A calming aqua-toned kurta with coastal",
      category: "Kurta",
      color: "Mint",
      size: ["S", "M", "L", "XL"],
    },
  ];



  //   const colors = [
  //     { name: "Airy White", code: "#F5F5F5" },
  //     { name: "Lavender Mist", code: "#E6E6FA" },
  //     { name: "Olive Blue", code: "#6B8E23" },
  //     { name: "Baby Blue", code: "#89CFF0" },
  //     { name: "Mild Grey", code: "#D3D3D3" },
  //     { name: "Sandalwood Brown", code: "#C4A26B" },
  //   ];

  //   const sizes = ["S (36)", "M (38)", "L (40)", "XL (42)", "XXL (44)"];

  return (
    <div className="min-h-screen bg-dot-fade">
      <Navbar />
      <div className=" py-30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-white mb-4">
            Best Of{" "}
            <span
              className="bg-linear-to-r from-[#C47BE4] via-[#D78FEE] to-white
              bg-clip-text text-transparent"
            >
              WESTERNISH
            </span>
          </h1>
          <p className="text-amber-50 max-w-2xl mx-auto">
            Effortless silhouettes, handloom textiles, and earthy elegance —
            curated from our latest ethnic collections.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Products Grid */}
          <main className="flex-1">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -6 }}
                  className="rounded-xl overflow-hidden bg-black/30 backdrop-blur-md 
                   border border-white/10 shadow-sm hover:shadow-xl transition-shadow"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-9/12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 
                       group-hover:scale-105"
                    />

                    {/* HEART */}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full 
                       flex items-center justify-center shadow-md hover:bg-white transition"
                    >
                      <Heart className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="font-playfair text-lg text-white tracking-wide mb-1">
                      {product.name}
                    </h3>

                    <p className="text-sm text-amber-50 mb-4 font-mono tracking-wide">
                      {product.description}
                    </p>

                    <span className="text-lg font-semibold font-mono text-white">
                      ₹{product.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
