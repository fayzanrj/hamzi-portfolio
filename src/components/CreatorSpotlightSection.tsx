"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { caveatFont } from "@/constants/FONTS";
import Image from "next/image";
import {
  PiArrowBendDownRightDuotone,
  PiArrowDownDuotone,
} from "react-icons/pi";

// Registering GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CreatorSpotlightSection = () => {
  // Refs for the text elements and image
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Using GSAP for animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#creatorSpotlight",
        start: "top bottom", 
        end: "bottom bottom",
        scrub: 1,        
      },
    });

    // Image fade-in and slide-up animation
    tl.from(imageRef.current, {
      opacity: 0,
      width : 0,
      y: 200,
      duration: 4,
    })
      // First text element animation (slide-down and fade-in)
      .from(
        textRef1.current,
        {
          y: 350,
          opacity: 0,
          delay: 3,
          duration: 2,
          ease: "power2.inOut",
        },
        0
      )
      // Second text element animation (slide-in from left and fade-in)
      .from(
        textRef2.current,
        {
          x: -150,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
          stagger: 1,
        },
        "-=1.2"
      )
      // Third text element animation (slide-up and fade-in)
      .from(
        textRef3.current,
        {
          y: 150,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1.2"
      );
  });

  return (
    <section
      id="creatorSpotlight"
      className="w-full h-svh relative text-white font-bold overflow-hidden content-center"
    >
      {/* Background Image */}
      <Image
        ref={imageRef}
        src="/creator.png"
        alt="portrait"
        className="w-60 sm:w-64 md:w-80 mx-auto"
        quality={100}
        width={999}
        height={999}
      />

      {/* First Text Element: Creator Name */}
      <div
        ref={textRef1}
        className={`${caveatFont} absolute left-1/2 -translate-x-1/2 top-[22%] md:top-[20%] w-fit italic text-center text-2xl md:text-3xl`}
      >
        <p>HAMZA KHALID</p>
        <PiArrowBendDownRightDuotone className="absolute left-3 rotate-[40deg]" />
      </div>

      {/* Second Text Element: Creator Roles */}
      <div
        ref={textRef2}
        className={`${caveatFont} text-lg md:text-xl absolute left-[2%] sm:left-[15%] md:left-[20%] lg:left-[30%] top-[40%]`}
      >
        <p>VIDEO EDITOR</p>
        <p>3D MODELER</p>
        <PiArrowBendDownRightDuotone className="absolute right-1 text-xl" />
      </div>

      {/* Third Text Element: Portfolio Video */}
      <div
        ref={textRef3}
        className={`${caveatFont} absolute right-[4%] sm:right-[10%] md:right-[20%] lg:right-[30%] top-[35%]`}
      >
        <p className="relative text-xl">Portfolio video</p>
        <PiArrowDownDuotone className="absolute left-1/2" />
      </div>
    </section>
  );
};

export default CreatorSpotlightSection;
