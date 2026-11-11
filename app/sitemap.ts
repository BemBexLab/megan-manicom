import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import type { MetadataRoute } from "next";

const siteUrl = "https://meganmanicom.com";

function getLastModified(filePath: string): Date {
  try {
    const commitDate = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", filePath],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();

    if (commitDate) return new Date(commitDate);
  } catch {
    // Git history may not be available in the build environment.
  }

  return statSync(filePath).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: getLastModified("app/page.tsx"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: getLastModified("app/about/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: getLastModified("app/contact/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: getLastModified("app/work/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work/sub-work`,
      lastModified: getLastModified("app/work/sub-work/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
