// components/Adcode3.js

"use client"
import { useEffect } from "react";

const Adcode3 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof window.atAsyncOptions !== "object") {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: "d133bb74300857cd99679135032291c7",
        format: "js",
        async: true,
        container: "atContainer-d133bb74300857cd99679135032291c7",
        params: {},
      });

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://www.highperformanceformat.com/d133bb74300857cd99679135032291c7/invoke.js";

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-d133bb74300857cd99679135032291c7" />
  );
};

export default Adcode3;