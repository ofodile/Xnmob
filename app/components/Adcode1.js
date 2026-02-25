// components/Adcode1.js

"use client"
import { useEffect } from "react";

const Adcode1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof window.atAsyncOptions !== "object") {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: "6475b18b41d754a9490657a09837505a",
        format: "js",
        async: true,
        container: "atContainer-6475b18b41d754a9490657a09837505a",
        params: {},
      });

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://www.highperformanceformat.com/6475b18b41d754a9490657a09837505a/invoke.js";

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-6475b18b41d754a9490657a09837505a" />
  );
};

export default Adcode1;