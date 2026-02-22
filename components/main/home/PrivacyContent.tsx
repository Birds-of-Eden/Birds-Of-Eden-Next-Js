"use client";

import { motion } from "framer-motion";

interface PrivacyContentProps {
  privacyPolicy: any[];
}

const PrivacyContent: React.FC<PrivacyContentProps> = ({ privacyPolicy }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-gray-100 dark:bg-slate-950"
    >
      <div className="container mx-auto py-12 dark:bg-slate-950">
        <motion.div
          className="max-w-80vh mx-auto rounded-lg bg-white p-8 shadow-md dark:bg-slate-800"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            variants={contentVariants}
            className="mb-4 text-3xl font-bold text-gray-800 dark:text-purple-500"
          >
            {privacyPolicy.title}
          </motion.h1>

          {privacyPolicy.map((section: any, index: number) => {
            return (
              <motion.div key={index} variants={contentVariants}>
                <motion.h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500">
                  {section.title}
                </motion.h2>
                <motion.p className="mb-6 text-gray-600 dark:text-white">
                  {section.text}
                </motion.p>

                {section.subtitle && (
                  <motion.h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-purple-500">
                    {section.subtitle}
                  </motion.h3>
                )}

                {section.list && (
                  <motion.div className="mb-6 text-gray-600 dark:text-white">
                    <motion.ul
                      className="list-disc pl-6"
                      variants={containerVariants}
                    >
                      {section.list.map((item: string, itemIndex: number) => (
                        <motion.li
                          key={itemIndex}
                          variants={listVariants}
                          custom={itemIndex}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyContent;
