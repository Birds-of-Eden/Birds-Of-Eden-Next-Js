"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface OurServiceContentProps {
  cards: any[];
  showLess: string;
  learnMore: string;
}

const OurServiceContent: React.FC<OurServiceContentProps> = ({
  cards,
  showLess,
  learnMore,
}) => {
  const [visibleText, setVisibleText] = useState({});

  const toggleTextVisibility = (index: number) => {
    setVisibleText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.9,
      },
    },
  };

  const textExpandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16">
      <motion.div
        className="container mx-auto mb-16 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid gap-8 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800"
            >
              <motion.img
                src={`/assets/${card.icon}`}
                alt={card.title}
                className="mb-4 h-12 w-12"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.h3
                className="mb-2 text-xl font-bold text-indigo-600 dark:text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.title}
              </motion.h3>
              <div className="mb-4 text-center text-gray-700 dark:text-white">
                <p>{card.text}</p>
                <motion.div
                  variants={textExpandVariants}
                  initial="hidden"
                  animate={visibleText[index] ? "visible" : "hidden"}
                  className="overflow-hidden"
                >
                  <p>{card.text.substring(card.text.indexOf(".") + 1)}</p>
                </motion.div>
              </div>
              <motion.button
                onClick={() => toggleTextVisibility(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-700 dark:text-white"
              >
                {visibleText[index] ? showLess : learnMore}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurServiceContent;
