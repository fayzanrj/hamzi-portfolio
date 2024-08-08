"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const CreatorIntroduction = () => {
  // Refs for video and text elements
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Using GSAP for animations
  useGSAP(() => {
   
    // Animate the text section sliding in from the bottom
    gsap.fromTo(
      textRef.current?.children!,
      { translateY: "100%", opacity: 0 },
      {
        translateY: "0%",
        opacity: 1,
        duration: 2,
        delay: 3,
        stagger: 0.2, // Staggered effect for text lines
        scrollTrigger: {
          trigger: "#creatorIntroSection",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    // Additional animation for the second text element sliding in from the right
    gsap.fromTo(
      textRef.current?.children[1]!,
      { translateX: "100%", opacity: 0 },
      {
        translateX: "0%",
        opacity: 1,
        duration: 2,
        delay: 3,
        scrollTrigger: {
          trigger: "#videoSection",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );
  });

  return (
    <section
      id="creatorIntroSection"
      className="h-dvh w-full flex md:gap-5 flex-col md:flex-row justify-center items-center"
    >
      {/* Placeholder for the video section */}
     <VideoPlayer src="/videos/portfolio_teaser.mp4"/>

      {/* Text content section */}
      <div
        ref={textRef}
        className="w-[28rem] max-w-[90%] h-64 py-1 text-white flex flex-col justify-between"
      >
        {/* Section heading */}
        <h3 className="text-3xl font-semibold">"WHO AM I?"</h3>

        {/* Introduction paragraph */}
        <p>
          My name is <b className="text-lg underline italic">Hamza Khalid</b>,
          and I am a dedicated video editor and 3D modeler. I specialize in
          creating visually engaging video content and detailed 3D models.
        </p>

        {/* Additional information links */}
        <div>
          <p>More about me</p>

          <p>More about me and my work</p>
        </div>
      </div>
    </section>
  );
};

export default CreatorIntroduction;
