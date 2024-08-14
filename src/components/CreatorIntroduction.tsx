"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import VideoTeaser from "./VideoTeaser";
import {
  PiArrowDownDuotone,
  PiArrowLeftDuotone,
  PiArrowUpDuotone,
} from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const CreatorIntroduction = () => {
  // Refs for video and text elements
  const textRef = useRef<HTMLDivElement>(null);

  // State to determine screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available and set screen size state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          trigger: "#creatorIntroSection",
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
      className="h-svh w-full overflow-hidden flex md:gap-5 flex-col md:flex-row justify-center items-center"
    >
      {/* Placeholder for the video section */}
      <VideoTeaser vimeoId="996238979" videoId="810CHvSdXOo" />

      {/* Text content section */}
      <div
        ref={textRef}
        className="w-[29rem] max-w-[90%] h-64 py-1 text-white flex flex-col justify-between"
      >
        {/* Section heading */}
        <h3 className="text-3xl font-semibold">&#34;WHO AM I?&#34;</h3>

        {/* Introduction paragraph */}
        <p>
          My name is <b className="text-lg underline italic">Hamza Khalid</b>,
          and I am a dedicated video editor and 3D modeler. I specialize in
          creating visually engaging video content and detailed 3D models.
        </p>

        {/* Additional information links */}
        <div>
          <div>
            <span>
              {isMobile ? (
                <PiArrowUpDuotone className="inline-block align-middle" />
              ) : (
                <PiArrowLeftDuotone className="inline-block align-middle" />
              )}
            </span>
            <p className="inline-block"> More about me in the video</p>
          </div>

          <div>
            <span>
              <PiArrowDownDuotone className="inline-block align-middle" />
            </span>
            <p className="inline-block">More about my work</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorIntroduction;
