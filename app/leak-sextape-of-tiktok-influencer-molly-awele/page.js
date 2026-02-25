// app/simple-post/page.js
import "../css/video.css";
import Link from "next/link";
import RelatedPost2 from "../components/RelatedPost2";
import Adcode1 from "../components/Adcode1";
import Adcode2 from "../components/Adcode2";
import Adcode3 from "../components/Adcode3";
import Adcode4 from "../components/Adcode4";

// ✅ SEO METADATA
export const metadata = {
  title: "Leak Sextape Of TikTok Influencer Molly Awele",
  description:
    "Watch the viral Leak Sextape Of TikTok Influencer Molly Awele that is trending online. Stream the full clip and discover more related trending videos in one place.",
};

export default function SimplePost3() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      
      <div className="video-ad">
        <div className="video-ad-1">
          <Adcode1 />
        </div>
        <div className="video-ad-2">
          <Adcode2 />
        </div>
      </div>
      
      <h1 className="video-title">
        Leak Sextape Of TikTok Influencer Molly Awele
      </h1>

      <video width="100%" height="500" className="custom-video" controls>
        <source src="https://res.cloudinary.com/diiwlqlh2/video/upload/v1771974945/XiaoYing_Video_1693330095688_u0fhhe.mp4" />
        Your browser does not support the video tag.
      </video>

      <RelatedPost2 />
      
      <div className="section-two">
        <div className="video-ad-3">
          <Adcode3 />
        </div>
        <br />
        <div className="video-ad-4">
          <Adcode4 />
        </div>
      </div>
    </div>
  );
}