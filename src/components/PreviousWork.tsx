"use client";
import React, { useEffect } from "react";
import InfiniteScrollBox from "./InfiniteScrollBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PreviousWork: React.FC = () => {
  useEffect(() => {
  
    gsap.fromTo(
      "#prevWorkSection",
      {
        opacity: 0,
        y: 200,
        x : -200
      },
      {
        opacity: 1,
        y: 0,
        x : 0,
        duration: 3,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#prevWorkSection",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="prevWorkSection"
      className="text-white py-2 overflow-hidden flex flex-col gap-20 min-h-[80svh]"
    >
      <InfiniteScrollBox
        variant="clientBox"
        boxCount={10}
        duration={25}
        title="Creators I Have Worked With"
      />
      <InfiniteScrollBox
        variant="resultBox"
        boxCount={10}
        duration={30}
        title="Results/Reviews"
        boxStyles="w-56 h-36"
      />
    </section>
  );
};

export default PreviousWork;
