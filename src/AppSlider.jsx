import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import productsData from "./products.json";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-96 overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded"
      >
        ◀
      </button>
      <div className="flex w-full justify-center items-center relative">
        {products.map((product, index) => {
          const relativeIndex = (index - currentIndex + products.length) % products.length;
          const distance = Math.min(relativeIndex, products.length - relativeIndex);
          const scale = distance === 0 ? 1 : 0.8;
          const opacity = distance === 0 ? 1 : 0.5;
          const zIndex = distance === 0 ? 10 : 5;
          const translateX = (relativeIndex - 2) * 220;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity, scale, x: translateX }}
              transition={{ duration: 0.5 }}
              style={{ zIndex }}
              className="absolute w-1/5 p-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-lg font-semibold mt-2 text-center">{product.name}</h3>
              <p className="text-gray-600 text-center">{product.description}</p>
              <p className="text-green-600 font-bold text-center">${product.price}</p>
            </motion.div>
          );
        })}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded"
      >
        ▶
      </button>
    </div>
  );
};

export default ProductSlider;
