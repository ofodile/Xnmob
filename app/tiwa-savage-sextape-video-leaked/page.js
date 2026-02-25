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
  title: "Tiwa Savage Sextape Video ",
  description:
    "Watch Tiwa Savage Sextape Video online. Stream the full clip and discover more related trending videos in one place.",
};

export default function SimplePost8() {
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
      
      <h1 className="video-title">Tiwa Savage Sextape Video</h1>

      <video width="100%" height="500" className="custom-video" controls>
        <source src="https://res.cloudinary.com/diiwlqlh2/video/upload/v1771989407/XiaoYing_Video_1634629286326_HD_vbq4ln.mp4" />
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