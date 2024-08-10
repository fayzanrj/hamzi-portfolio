"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Signature = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  // State to keep track of page offset
  const [scrollPosition, setScrollPosition] = useState(0);

  useGSAP(() => {
    gsap.to(pageRef.current, {
      opacity: 0,
      duration: 2,
      delay: 3,
      onComplete: () => {
        gsap.set(pageRef.current, { display: "none" });
        document.documentElement.style.overflowY = "auto"
      },
    });
  });

  useEffect(() => {
    // Play the video after 0.5 second
    setTimeout(() => {
      try {
        if (videoRef.current) {
          videoRef.current.play();
        }
      } catch (error) {
        console.error(error);
      }
    }, 500);

    if (typeof window !== "undefined") {
      
      // Set initial scroll position and disable scrolling
      setScrollPosition(window.scrollY);
      document.documentElement.style.overflow = "hidden";

    }
  }, []);

  return (
    <div
      ref={pageRef}
      className="absolute top-0 left-0 z-50 bg-black w-screen h-svh flex justify-center items-center"
      style={{ top: `${scrollPosition}px` }}
    >
      <video
        ref={videoRef}
        width={999}
        height={999}
        playsInline
        controls={false}
        muted
        className="w-2/3 max-w-96"
      >
        <source src="/sign.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Signature;
