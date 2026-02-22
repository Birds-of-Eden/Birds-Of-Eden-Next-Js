import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const t = await getTranslations();
  const blogData = t.raw("home.blogPage.blogs");

  const blog = blogData.find((b) => b.id == id);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/${blog.image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await getTranslations();
  const blogData = t.raw("home.blogPage.blogs");

  const blog = blogData.find((b) => b.id == id);

  if (!blog) {
    return (
      <h1 className="text-center text-xl font-bold">
        {t("blogDetails.notFound")}
      </h1>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto max-w-4xl">
        <div className="h-[500px] relative">
          <Image
            src={`/assets/${blog.image}`}
            alt="Blog Cover"
            className="w-full rounded-lg object-cover"
            fill
          />
        </div>
        <h1 className="mt-6 text-3xl font-bold">{blog.title}</h1>
        <p className="mt-2 text-gray-600">
          {blog.date} | {t("home.blogPage.by")} {blog.author}
        </p>
        <p className="mt-6 text-lg">{blog.description}</p>
        <Link
          href="/blogs"
          className="link boxshadow mt-6 inline-block text-blue-500 hover:underline"
        >
          {t("home.erpProjects.button")}
        </Link>
      </div>
    </div>
  );
}

export default BlogDetails;
