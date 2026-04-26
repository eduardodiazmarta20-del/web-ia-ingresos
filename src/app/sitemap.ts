import type { MetadataRoute } from "next";
import { seoArticles } from "@/data/seo-plan";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iaparaganar.com";
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9
    },
    ...seoArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: article.funnel === "BOFU" ? 0.85 : 0.72
    }))
  ];
}
