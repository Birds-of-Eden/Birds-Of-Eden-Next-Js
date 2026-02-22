"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AccessoriesContentProps {
  hardwareProducts: any;
}

const AccessoriesContent: React.FC<AccessoriesContentProps> = ({
  hardwareProducts,
}) => {
  const images = [
    "/assets/hardware_1.jpg",
    "/assets/hardware_2.jpg",
    "/assets/hardware_3.jpg",
    "/assets/router_1.jpg",
    "/assets/docking_station.jpg",
    "/assets/external_hdd.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      className="container mx-auto bg-gray-50 pb-20 pt-28 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 dark:text-white">
          {hardwareProducts.premiumTech.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          {hardwareProducts.premiumTech.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center rounded-lg bg-white p-10 shadow-2xl dark:bg-gray-800"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
            {hardwareProducts.premiumTech.slider.title}
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            {hardwareProducts.premiumTech.slider.description}
          </p>
          <ul className="mb-8 list-disc space-y-4 pl-6 text-lg text-gray-700 dark:text-gray-300">
            {hardwareProducts.premiumTech.slider.list.map(
              (list: any, index: number) => (
                <li key={index}>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {list.title}
                  </span>{" "}
                  {list.text}
                </li>
              )
            )}
          </ul>
          <motion.button
            className="self-start rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {hardwareProducts.premiumTech.slider.expButton}
          </motion.button>
        </motion.div>

        <motion.div
          className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Tech Accessory ${currentIndex + 1}`}
            className="h-full w-full rounded-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 p-4 text-white transition hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 p-4 text-white transition hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white">
          {hardwareProducts.netTitle}
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          {hardwareProducts.netDescription}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {hardwareProducts.networkingAndTech.map(
            (product: any, index: number) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white p-6 shadow-2xl transition hover:shadow-xl dark:bg-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={`/assets/${product.image}`}
                  alt="Accessory"
                  className="mb-4 w-full rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccessoriesContent;
