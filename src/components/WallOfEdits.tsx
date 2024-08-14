"use client";
import { wallOfEditsItems } from "@/constants/ITEMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import WallOfEditItem from "./WallOfEditsItem";
import WallOfEditsItem from "./WallOfEditsItem";

gsap.registerPlugin(ScrollTrigger);

const WallOfEdits = () => {
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

    gsap.from("#wallOfEdits", {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#wallOfEdits",
        start: "top bottom",
        end: "bottom bottom",
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
            reverse={index % 2 !== 0}
            videoId="810CHvSdXOo"
          />
        ))}
      </div>
    </section>
  );
};

export default WallOfEdits;
