"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TOOLS from "@/constants/TOOLS";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); 
  const logosRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for the section with scroll trigger
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // Animation for logos after the section appears
    logosRef.current.forEach((logo, index) => {
      if (logo) {
        gsap.fromTo(
          logo,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2, 
            ease: "power2.out",
            stagger : 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="skillsSection"
      ref={sectionRef}
      className="flex justify-center items-center p-3 min-h-screen"
    >
      <div className="w-[95%] md:w-[90%] min-h-[90svh] rounded-md bg-[#161B22] flex justify-around items-center flex-wrap gap-8 p-6">
        {/* Section Title */}
        <div className="w-full max-w-sm text-center flex-shrink-0 p-4">
          <h3 className="text-white text-3xl font-bold text-left">
          Tools I Use for <span className="underline italic">Video Editing</span> and <span className="underline italic">Creative Projects</span>
          </h3>
        </div>

        {/* Video Editing Tools Logos */}
        <div className="w-full max-w-lg flex flex-wrap justify-center items-center gap-4 flex-shrink-0 p-4">
          {TOOLS.map((tool, index) => (
            <Image
              key={index}
              ref={(el) => {
                // Update the ref array without returning a value
                logosRef.current[index] = el;
              }}
              src={tool.src}
              width={999}
              height={999}
              alt={tool.alt}
              className={`w-32 h-32 shadow-xl rounded-3xl object-contain ${
                tool.alt === "Blender Logo" || tool.alt === "DaVinci Resolve Logo"
                  ? "bg-white"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
