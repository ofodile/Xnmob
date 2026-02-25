// app/simple-post/page.js
import "../css/video.css";
import Link from "next/link";
import RelatedPost2 from "../components/RelatedPost2";
import Adcode1 from "../components/Adcode1";
import Adcode2 from "../components/Adcode2";
import Adcode3 from "../components/Adcode3";
import Adcode4 from "../components/Adcode4";

// SEO METADATA
export const metadata = {
  title: "Yahweh Girl Trending Video That Got People Talking",
  description:
    "Watch the trending Yahweh girl video that has everyone talking online. See the viral clip, reactions, and related trending videos in one place.",
};

export default function SimplePost2() {
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
        Yahweh girl trending videos that got people talking
      </h1>
      
      <video width="100%" height="500" className="custom-video" controls>
        <source src="https://res.cloudinary.com/diiwlqlh2/video/upload/v1771973269/ssstwitter.com_1731759000221_vvhvbf.mp4" />
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