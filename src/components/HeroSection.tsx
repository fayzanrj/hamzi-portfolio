"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Signature from "./Signature";

// Registering GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  // Refs for image and marquee elements
  const imageRef = useRef<HTMLImageElement | null>(null);
  const marqueeRef = useRef<HTMLHeadingElement | null>(null);

  // GSAP animation setup
  useGSAP(() => {
    // Animation for marquee text
    gsap.to(marqueeRef.current, {
      translateX: "-102%",
      delay: 2.5,
      duration: 30,
      repeat: -1,
    });

    // Animation for the image
    gsap.to(imageRef.current, {
      position: "fixed",
      width: window.innerWidth > 768 ? "6rem" : "3rem",
      top: 10,
      left: window.innerWidth - 16 * (window.innerWidth > 768 ? 8 : 3),
      transform: "translate(0,0)",
      borderRadius: "100%",
      scrollTrigger: {
        trigger: "#creatorIntroSection",
        scroller: "body",
        start: () => "top " + window.innerHeight , 
        end: () => "top " + window.innerHeight * 0.02,
        scrub: 1,
      },
    });
  });

  return (
    <section className="relative max-w-[100vw] h-svh overflow-hidden">

      {/* Marquee text */}
      <h2
        ref={marqueeRef}
        className="text-white text-nowrap absolute top-[30%] translate-y-1/2 text-4xl md:text-6xl uppercase translate-x-[100vw]"
      >
        <span>Editing</span>
        <span className="font-bold italic"> Your Content</span>
        <span className="text-3xl md:text-5xl mx-2"> to</span>
        <span className="font-bold ONLY_STROKE text-5xl md:text-7xl italic">
          Perfection
        </span>
        <span className="font-bold italic"> — Where</span>
        <span className="font-semibold ONLY_STROKE"> Every Frame</span>
        <span className="text-3xl md:text-5xl mx-2"> tells</span>
        <span className="font-bold underline underline-offset-4 italic">
          Your Story
        </span>
      </h2>

      {/* Image */}
      <Image
        ref={imageRef}
        src={"/avatar.png"}
        alt="model"
        width={999}
        height={999}
        quality={100}
        loading="lazy"
        className="w-[45rem] aspect-square absolute left-1/2 -translate-x-1/2 bottom-0 z-40"
      />
    </section>
  );
};

export default HeroSection;
