"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Signature = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeline = gsap.timeline();

    // Fade out the page after the video ends
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        timeline.to(pageRef.current, {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            gsap.set(pageRef.current, { display: "none" });
            document.body.style.overflowY = "scroll";
          },
        });
      });
    }

    // Play the video after 3 seconds
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 500);
  }, []);

  return (
    <div
      ref={pageRef}
      className="absolute top-0 left-0 z-50 bg-black w-screen h-screen flex justify-center items-center"
    >
      <video
        ref={videoRef}
        src="/sign.mp4"
        width={999}
        height={999}
        playsInline
        controls={false}
        muted
        className="w-2/3 max-w-96"
      />
    </div>
  );
};

export default Signature;
