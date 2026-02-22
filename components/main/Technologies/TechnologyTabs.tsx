"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import FrontendTechnologies from "@/components/main/Technologies/frontend-technologies";
import BackendTechnologies from "@/components/main/Technologies/backend-technologies";

interface TechnologyTabsProps {
  ourTechnology: string;
  description: string;
  frontendTechnologies: string;
  backendTechnologies: string;
}

const TechnologyTabs: React.FC<TechnologyTabsProps> = ({
  ourTechnology,
  description,
  frontendTechnologies,
  backendTechnologies,
}) => {
  const [tab, setTab] = useQueryState("tab", { defaultValue: "frontend" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto mb-10 mt-10 rounded-lg bg-gray-50 p-6 shadow-xl dark:bg-slate-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="mb-10 text-center text-4xl font-bold text-blue-700 dark:text-purple-500"
        variants={textVariants}
      >
        {ourTechnology}
      </motion.h1>

      <motion.p
        className="mb-10 text-center text-lg text-gray-700 dark:text-white max-w-5xl mx-auto"
        variants={textVariants}
      >
        {description}
      </motion.p>

      <motion.div
        className="mb-6 flex justify-center"
        variants={containerVariants}
      >
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            href={`?tab=frontend`}
            className={cn(
              tab === "frontend"
                ? "mr-2 rounded bg-red-700 px-4 py-2 text-white transition-transform duration-300"
                : "mr-2 rounded bg-green-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
            )}
            onClick={() => setTab("frontend")}
          >
            {frontendTechnologies}
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            href={`?tab=backend`}
            className={cn(
              tab === "backend"
                ? "rounded bg-red-700 px-4 py-2 text-white transition-transform duration-300"
                : "rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
            )}
            onClick={() => setTab("backend")}
          >
            {backendTechnologies}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tab === "frontend" && <FrontendTechnologies />}
        {tab === "backend" && <BackendTechnologies />}
      </motion.div>
    </motion.div>
  );
};

export default TechnologyTabs;
