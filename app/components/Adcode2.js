// components/Adcode2.js

"use client"
import { useEffect } from "react";

const Adcode2 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof window.atAsyncOptions !== "object") {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: "b1ebdf03ddb022ff5785371e2f93fe1e",
        format: "js",
        async: true,
        container: "atContainer-b1ebdf03ddb022ff5785371e2f93fe1e",
        params: {},
      });

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://www.highperformanceformat.com/b1ebdf03ddb022ff5785371e2f93fe1e/invoke.js";

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-b1ebdf03ddb022ff5785371e2f93fe1e" />
  );
};

export default Adcode2;