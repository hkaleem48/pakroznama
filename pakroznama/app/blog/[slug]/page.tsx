import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/blogPosts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "PakRoznama" },
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <a href="/blog" className="text-sm text-emerald-400 hover:underline">← Back to Blog</a>
      <h1 className="text-3xl font-bold text-white mt-4 mb-2">{post.title}</h1>
      <p className="text-xs text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
      </p>

      <article className="prose prose-invert max-w-none">
        {post.content.map((para, i) =>
          para.startsWith("## ") ? (
            <h2 key={i}>{para.replace("## ", "")}</h2>
          ) : (
            <p key={i}>{para}</p>
          )
        )}
      </article>
    </div>
  );
}
