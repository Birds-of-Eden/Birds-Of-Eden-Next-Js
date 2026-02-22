"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutUsContentProps {
  aboutUs: any; // Type 'aboutUs' based on your translation data
}

const AboutUsContent: React.FC<AboutUsContentProps> = ({ aboutUs }) => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8, bounce: 0.3 },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      className="bg-slate-100 pb-10 dark:bg-slate-800"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.div
        className="relative z-[1] bg-[url('/pexels-felixmittermeier-1205301.jpg')] bg-cover bg-center bg-no-repeat py-8 text-center after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-100 after:to-blue-500/60 dark:bg-blue-500/50 dark:to-slate-800 dark:after:from-slate-800"
        variants={fadeInUpVariant}
      >
        <motion.h1
          className="relative z-[1] justify-center rounded-lg p-4 text-center text-4xl font-bold"
          variants={fadeInUpVariant}
        >
          {aboutUs.title}
        </motion.h1>
      </motion.div>

      <motion.div
        className="container bg-gradient-to-t from-transparent to-slate-100 px-8 py-10 dark:to-slate-800"
        variants={containerVariant}
      >
        <motion.p className="mb-8 text-lg" variants={fadeInUpVariant}>
          {aboutUs.header}
        </motion.p>

        <motion.h2
          className="mb-6 text-3xl font-bold"
          variants={fadeInUpVariant}
        >
          {aboutUs.missionTitle}
        </motion.h2>
        <motion.p className="mb-8 text-lg" variants={fadeInUpVariant}>
          {aboutUs.mission}
        </motion.p>

        <motion.h2
          className="mb-6 text-3xl font-bold"
          variants={fadeInUpVariant}
        >
          {aboutUs.valuesTitle}
        </motion.h2>
        <motion.ul className="mb-8 text-lg" variants={containerVariant}>
          {aboutUs.values.map((value: string, index: number) => (
            <motion.li key={index} className="mb-4" variants={fadeInUpVariant}>
              {value}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          className="mb-6 text-3xl font-bold"
          variants={fadeInUpVariant}
        >
          {aboutUs.coreMembersTitle}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariant}
        >
          {aboutUs.coreMembers.map((member: any, index: number) => (
            <motion.div
              key={index}
              className="rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Image
                src={
                  index === 0
                    ? "/assets/md_talat.png"
                    : "/assets/aminul_islam.jpg"
                }
                alt={member.name}
                className="mb-2 w-full rounded-lg"
                width={342}
                height={360}
              />
              <motion.h3
                className="mb-2 text-2xl font-semibold text-purple-600"
                whileHover={{ scale: 1.05 }}
              >
                {member.name}
              </motion.h3>
              <p className="text-lg text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUsContent;
