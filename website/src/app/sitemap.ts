import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://keitaito.net",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://keitaito.net/works",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://keitaito.net/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
  ];
}
