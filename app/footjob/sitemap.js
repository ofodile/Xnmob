export default async function sitemap() {
  const baseUrl = "https://www.darkredhub.site"; 
  const category = "https://www.darkredhub.site/footjob"
  const apiUrl = "https://www.eporner.com/api/v2/video/search/?query=footjob&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json";

  let videos = [];

  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Fetch failed");
    
    const json = await res.json();
    videos = json.videos.filter((video) => video.length_sec <= 1800);
  } catch (error) {
    console.error("Sitemap fetch error:", error);
    return [{ url: baseUrl, lastModified: new Date() }];
  }

  const videoEntries = videos.map((video) => {
    // 1. Replace spaces with dashes (same as your Home page)
    // 2. Escape ampersands and special characters for XML safety
    const safeTitle = video.title
      .replace(/ /g, "-")
      .replace(/&/g, "&amp;") // Fixes the xmlParseEntityRef error
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    return {
      url: `${baseUrl}/${video.id}-${safeTitle}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    };
  });

  return [
    {
      url: category,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...videoEntries,
  ];
}