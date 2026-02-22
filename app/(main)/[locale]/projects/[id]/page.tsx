// import BackButton from "@/components/ui/back-button";
// import type { Metadata } from "next";
// import { getTranslations } from "next-intl/server";
// import Image from "next/image";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;
//   const t = await getTranslations();
//   const projects = t.raw("home.erpProjects.projects");

//   const project = projects.find((p) => p.id == id);

//   return {
//     title: project.title,
//     description: project.description,
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       type: "article",
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}`,
//       images: [
//         {
//           url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/${project.image}`,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// }

// async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params;
//   const t = await getTranslations();
//   const projects = t.raw("home.erpProjects.projects");

//   const project = projects.find((p) => p.id == id);

//   return (
//     <div className="min-h-screen bg-slate-100 text-black dark:bg-slate-900 dark:text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-5">
//           <h1 className="mb-10 flex items-center justify-center text-4xl font-bold">
//             {project.title}
//           </h1>
//           <div className="mb-10 relative h-[500px]">
//             <Image
//               src={`/assets/${project.image}`}
//               alt={project.title}
//               className="mx-auto w-full rounded-lg object-contain shadow-xl"
//               fill
//             />
//           </div>
//           <p
//             className="text-lg leading-relaxed"
//             style={{ textAlign: "justify" }}
//           >
//             {project.description}
//           </p>
//         </div>

//         <BackButton>{t("home.erpProjects.button")}</BackButton>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;
