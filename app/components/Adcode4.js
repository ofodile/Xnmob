// components/Adcode4.js

"use client"
import { useEffect } from "react";

const Adcode4 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof window.atAsyncOptions !== "object") {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: "44631af3ec891a5641d8edf6bb43e855",
        format: "js",
        async: true,
        container: "atContainer-44631af3ec891a5641d8edf6bb43e855",
        params: {},
      });

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://www.highperformanceformat.com/44631af3ec891a5641d8edf6bb43e855/invoke.js";

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-44631af3ec891a5641d8edf6bb43e855" />
  );
};

export default Adcode4;