"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

// Props
interface InfiniteScrollBoxProps {
  variant: "clientBox" | "resultBox";
  boxCount: number;
  duration: number;
  title: string;
  boxStyles?: string;
}

const InfiniteScrollBox: React.FC<InfiniteScrollBoxProps> = ({
  variant,
  boxCount,
  duration,
  title,
  boxStyles = "",
}) => {
  useEffect(() => {
    const boxWidth = variant === "clientBox" ? 140 : 232; // Width of each box including spacing
    const totalWidth = boxWidth * boxCount;

    // Setting initial position of each box
    gsap.set(`.${variant}`, {
      x: (i) => i * boxWidth,
    });

    gsap.to(`.${variant}`, {
      duration: duration, 
      ease: "none",
      x: `+=${totalWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => x % totalWidth, "px"),
      },
      repeat: -1,
    });
  }, [variant, boxCount, duration]);

  return (
    <div>
      <h3 className="text-center text-lg sm:text-xl md:text-2xl uppercase font-semibold">{title}</h3>
      <div className={`mx-auto w-[98%] sm:w-full max-w-[1250px] my-4 overflow-hidden relative ${variant === "clientBox" ? "h-24" : "h-40"}`}>
        {Array.from({ length: boxCount }, (_, i) => (
          <div
            key={i}
            className={`${variant} absolute ${variant === "clientBox" ? "-left-32" : "-left-60"} top-1/2 -translate-y-1/2 w-32 h-20 rounded-md flex-shrink-0 border flex justify-center items-center ${boxStyles}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollBox;
