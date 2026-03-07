// Revalidate every 24 hours (best for video pages that rarely change)
export const revalidate = 86400;

import "../css/video.css";
import Link from "next/link";
import RelatedPost from "../components/RelatedPost";
import Adcode1 from "../components/Adcode1";
import Adcode2 from "../components/Adcode2";
import Adcode3 from "../components/Adcode3";
import Adcode4 from "../components/Adcode4";
import Adnative from "../components/Adnative";

// Fetch video data with ISR caching
async function fetchVideoData(id) {
  const url = `https://www.eporner.com/api/v2/video/id/?id=${id}&thumbsize=medium&format=json`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 }, // ISR caching
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error("Error fetching video data:", error);
    return null;
  }
}

// Generate SEO metadata (also cached with ISR)
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const id = slug.split("-")[0];

  const data = await fetchVideoData(id);

  return {
    title: data?.title || "Video Not Found",
    description: data?.title || "Watch high-quality videos.",
    keywords: data?.keywords || data?.title,
  };
}

// Main Video Page
export default async function Video({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const id = slug.split("-")[0];

  const data = await fetchVideoData(id);

  if (!data) {
    return <p>Video not available.</p>;
  }

  return (
    <>
      <div className="video-ad">
        <div className="video-ad-1">
          <Adcode1 />
        </div>
        <div className="video-ad-2">
          <Adcode2 />
        </div>
      </div>

      <div className="video-container">
        <div className="section-one">
          <h1 className="video-title">{data.title}</h1>

          {data.embed ? (
            <iframe
              src={data.embed}
              title={data.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Video not available.</p>
          )}
          <a href="https://www.effectivegatecpm.com/uc2p5erq?key=5853c16022f4dbc3dadb4fe0f2308328">
              <img
                  src="ads.jpg"
                  alt="ads"
                  className="img-ads"
                />
          </a>
          <div data-banner-id="1451221"></div>
          <RelatedPost />
        </div>

        <div className="section-two">
          <div className="video-ad-3">
            <Adcode3 />
            <div data-banner-id="1451221"></div>
          </div>
          <br />
          <Adnative />
          <br />
          <div className="video-ad-4">
            <div data-banner-id="1451221"></div>
            <Adcode4 />
          </div>
        </div>
      </div>
    </>
  );
}