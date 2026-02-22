"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const ProjectGallery = () => {
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  // Fetch projects from translation JSON
  const projects = t.raw("home.projectGallery.projects");

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <motion.section
      className="bg-slate-50 py-20 dark:bg-slate-800 "
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-black dark:text-white">
          {t("home.projectGallery.title")}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-black dark:text-gray-400">
          {t("home.projectGallery.description")}
        </p>

        <motion.div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => {
                setSelectedProject(project);
                setOpenModal(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/assets/${project.image}`}
                  alt={project.title}
                  className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-6 transform p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="mb-2 block text-sm font-semibold text-emerald-400">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`rounded-lg px-4 py-2 transition-colors ${
                  currentPage === i + 1
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent>
          <div className="flex flex-col h-[600px] relative">
            <div className="relative h-[400px]">
              <Image
                src={`/assets/${selectedProject?.image}`}
                alt={selectedProject?.title || "project image"}
                className="object-cover"
                loading="lazy"
                fill
              />
            </div>

            <div className="flex flex-col justify-between p-6 border-t border-slate-500">
              <div className="mb-2">
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedProject?.title}
                </DialogTitle>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-2">
                {["React", "Next.js", "TailwindCSS"].map((tech, index) => (
                  <span
                    key={index}
                    className="mb-2inline-block rounded-lg bg-slate-600 px-2 py-1 text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="">
                <h4 className="text-lg font-semibold text-emerald-400">
                  {t("home.projectGallery.modal.description")}
                </h4>
                <p className="font-light leading-relaxed text-gray-300">
                  {selectedProject?.description}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setOpenModal(false);
                  }}
                  className="mt-6 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
                >
                  {t("home.projectGallery.modal.close")}
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default ProjectGallery;
