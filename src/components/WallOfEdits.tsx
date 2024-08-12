"use client";
import { wallOfEditsItems } from "@/constants/ITEMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

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
        {wallOfEditsItems.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className="flex-shrink-0 w-72 md:w-96 ">
              <p className="text-center mt-2 w-full h-72  p-8 text-white font-black italic text-2xl content-center">{item.text}</p>
              <Image
                src={item.img}
                width={999}
                height={999}
                alt={`Image ${index}`}
                quality={100}
                className="object-cover"
              />
            </div>
          ) : (
            <div key={index} className="flex-shrink-0 w-72 md:w-96">
              <Image
                src={item.img}
                width={999}
                height={999}
                alt={`Image ${index}`}
                quality={100}
                className="object-contain"
              />
              <p className="text-center mt-2 w-full h-72  p-8 text-white font-black italic text-2xl content-center">{item.text}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WallOfEdits;
