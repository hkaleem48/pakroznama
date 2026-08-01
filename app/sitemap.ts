import type { MetadataRoute } from "next";
import { posts } from "@/lib/blogPosts";

const SITE_URL = "https://pakroznama.vercel.app"; // update once custom domain is live

const CITIES = [
  "karachi", "lahore", "islamabad", "faisalabad",
  "rawalpindi", "multan", "peshawar", "quetta",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/rates", "/rates/gold", "/rates/silver", "/rates/currency", "/rates/petrol", "/rates/electricity",
    "/government/8171", "/government/passport", "/government/nadra", "/government/emergency-services",
    "/jobs", "/jobs/fpsc", "/jobs/ppsc", "/jobs/nts", "/jobs/rozee-pk", "/jobs/mustakbil",
    "/jobs/bank-jobs", "/jobs/army", "/jobs/police",
    "/results", "/results/matric", "/results/inter",
    "/newspapers", "/magazines", "/library",
    "/city",
    "/education", "/education/scholarships", "/education/past-papers", "/education/cadet-colleges",
    "/education/past-papers/mdcat", "/education/past-papers/ecat", "/education/past-papers/nts-gat",
    "/education/past-papers/ppsc", "/education/past-papers/cadet-college-entry-test",
    "/tools", "/tools/zakat-calculator", "/tools/age-calculator",
    "/tools/loan-calculator", "/tools/unit-converter", "/tools/gold-calculator",
    "/tools/bmi-calculator", "/tools/percentage-calculator", "/tools/date-calculator",
    "/tools/electricity-bill-calculator",
    "/weather",
    "/blog",
    "/about", "/disclaimer", "/contact",
  ];

  const cityRoutes = CITIES.map((slug) => `/city/${slug}`);
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...cityRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/rates") ? "hourly" : "daily",
    priority: route === "" ? 1 : 0.7,
  }));
}
