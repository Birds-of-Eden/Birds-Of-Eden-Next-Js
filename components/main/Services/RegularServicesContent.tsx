// components/RegularServicesContent.tsx (CSR Component)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface RegularServicesContentProps {
  title: string;
  services: {
    image: string;
    title: string;
    description: string;
  }[];
}

const RegularServicesContent: React.FC<RegularServicesContentProps> = ({
  title,
  services,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-slate-800"
    >
      <div className="container mx-auto min-h-screen py-12 ">
        <h1 className="heading">{title}</h1>
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-6 dark:bg-slate-800"
            >
              <div className="relative h-64 mb-4">
                <Image
                  src={`/assets/${service.image}`}
                  alt={service.title}
                  className="mb-4 w-full rounded-lg object-cover"
                  fill
                />
              </div>
              <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RegularServicesContent;
