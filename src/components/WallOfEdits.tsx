"use client";
import { wallOfEditsItems } from "@/constants/ITEMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import WallOfEditsItem from "./WallOfEditsItem";

gsap.registerPlugin(ScrollTrigger);

const WallOfEdits = () => {
  // State
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  // Ref
  const wallRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(wallRef.current, {
      translateX: `-${
        wallRef?.current?.scrollWidth! - window.innerWidth * 0.95
      }px`,
      scrollTrigger: {
        trigger: "#wallOfEdits",
        start: "top 0%",
        end: `top -200%`,
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <section id="wallOfEdits" className="p-3 text-white overflow-hidden">
      <h3 className="h-8 text-lg sm:text-xl md:text-2xl uppercase font-semibold">
        Wall Of Edits
      </h3>
      <div
        id="wall"
        ref={wallRef}
        className="flex h-[38rem] md:h-[95vh] items-center px-10 my-5"
      >
        {wallOfEditsItems.map((item, index) => (
          <WallOfEditsItem
            key={index}
            imageUrl={item.img}
            qoute={item.text}
            videoId={item.videoId}
            reverse={index % 2 !== 0}
            isPlaying={activeVideoId === item.videoId}
            playVideo={() => setActiveVideoId(item.videoId)}
            stopVideo={() => setActiveVideoId(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default WallOfEdits;
