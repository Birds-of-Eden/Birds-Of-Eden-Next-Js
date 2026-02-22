// components/ProductTabs.tsx (CSR Component)
"use client";

import Corporate from "@/components/main/products/corporate";
import Ecommerce from "@/components/main/products/e-commerce";
import Financial from "@/components/main/products/financial";
import Govt from "@/components/main/products/govt";
import SEO from "@/components/main/products/seo";
import { motion, AnimatePresence } from "framer-motion";
import { useQueryState } from "nuqs";

interface ProductTabsProps {
  ourProducts: string;
  govt: string;
  seo: string;
  financial: string;
  corporate: string;
  ecommerce: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  ourProducts,
  govt,
  seo,
  financial,
  corporate,
  ecommerce,
}) => {
  const [tab, setTab] = useQueryState("tab", { defaultValue: "govt" });

  const renderContent = () => {
    switch (tab) {
      case "govt":
        return <Govt />;
      case "seo":
        return <SEO />;
      case "financial":
        return <Financial />;
      case "corporate":
        return <Corporate />;
      case "ecommerce":
        return <Ecommerce />;
      default:
        return null;
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="">
      <div className="container mx-auto p-4">
        <motion.h1
          className="my-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text pb-4 text-center text-4xl font-extrabold text-transparent sm:text-5xl"
          variants={tabVariants}
          initial="hidden"
          animate="visible"
        >
          {ourProducts}
        </motion.h1>
        <motion.div
          className="mb-4 flex overflow-x-scroll border-b sm:overflow-x-visible"
          variants={tabVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              tab === "govt" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setTab("govt")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {govt}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              tab === "seo" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setTab("seo")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {seo}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              tab === "financial" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setTab("financial")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {financial}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              tab === "corporate" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setTab("corporate")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {corporate}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              tab === "ecommerce" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setTab("ecommerce")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ecommerce}
          </motion.button>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-4"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductTabs;
