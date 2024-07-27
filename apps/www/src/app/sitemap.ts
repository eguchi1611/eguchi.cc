import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.eguchi.cc/",
      lastModified: new Date(),
    },
  ];
}
