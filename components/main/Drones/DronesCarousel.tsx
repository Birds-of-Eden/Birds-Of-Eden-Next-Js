"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import DroneCard from "./DroneCard";

interface DronesCarouselProps {
  drones: any[];
  droneCollection: string;
  droneTagline: string;
}

const DronesCarousel: React.FC<DronesCarouselProps> = ({
  drones,
  droneCollection,
  droneTagline,
}) => {
  return (
    <section className="bg-gray-50 px-6 pb-24 pt-24 dark:bg-gray-900">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="mb-6 text-center text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        >
          {droneCollection}
        </motion.h2>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300">
          {droneTagline}
        </p>
        <div className="relative">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              gap: "2rem",
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
            className="custom-splide"
          >
            {drones.map((drone: any, index: number) => (
              <SplideSlide
                key={index}
                className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
              >
                <DroneCard
                  key={drone.id}
                  id={drone.id}
                  title={drone.title}
                  description={
                    drone.description.split(" ").slice(0, 10).join(" ") + "..."
                  }
                  image={drone.image}
                  index={index}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </motion.div>
    </section>
  );
};

export default DronesCarousel;
