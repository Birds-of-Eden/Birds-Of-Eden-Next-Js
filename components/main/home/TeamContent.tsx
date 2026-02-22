// components/TeamContent.tsx (CSR Component)
"use client";

import { motion } from "framer-motion";

interface TeamContentProps {
  title: string;
  members: {
    name: string;
    role: string;
    description: string;
    portfolioLink?: string;
  }[];
  viewPortfolio: string;
  descriptionTitle: string;
}

const TeamContent: React.FC<TeamContentProps> = ({
  title,
  members,
  viewPortfolio,
  descriptionTitle,
}) => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    },
  });

  return (
    <motion.div
      className="min-h-screen bg-slate-100 py-12 dark:bg-slate-900"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-16 text-center text-4xl font-bold dark:text-white md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <div className="space-y-16">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-8 md:flex-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants(index)}
            >
              {/* Profile Image Section */}
              <div className="w-full overflow-hidden rounded-md bg-slate-200 dark:bg-slate-800 md:w-64">
                <div className="p-4">
                  <motion.img
                    src={
                      index === 0
                        ? "/assets/talat_md.png"
                        : "/assets/amenul_islam.png"
                    }
                    alt={member.name}
                    className="mx-auto mb-4 h-32 w-32 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="mb-2 text-center text-lg font-semibold dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-center text-blue-400">
                    {member.role}
                  </p>
                  {member.portfolioLink && (
                    <motion.a
                      href={member.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link boxshadow w-full text-center inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {viewPortfolio}
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Description Section */}
              <motion.div
                className="flex-1 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                  {descriptionTitle}
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamContent;
