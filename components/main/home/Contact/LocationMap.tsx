// components/LocationMap.tsx (CSR Component)
"use client";

import React from "react";
import { motion } from "framer-motion";

interface LocationMapProps {
  ourLocation: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ ourLocation }) => {
  return (
    <motion.div
      className="w-full max-w-lg rounded-lg bg-slate-200 p-8 shadow-md dark:bg-slate-700"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
        {ourLocation}
      </h2>
      <div className="relative mb-4 h-96 overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9434129044034!2d90.38741947497816!3d23.820611178622503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7080f8d81bd%3A0xe7aab9e32233a52e!2sTower%2071%20(Homes%2071%20Ltd.)!5e0!3m2!1sen!2sbd!4v1715839431661!5m2!1sen!2sbd"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;
