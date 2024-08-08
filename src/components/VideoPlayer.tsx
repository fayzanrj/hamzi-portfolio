"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.from(videoContainerRef.current, {
      translateX: "-100%",
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#creatorIntroSection",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });


  return (
    <div
      ref={videoContainerRef}
      className="w-[30rem] h-64 max-w-[90%] cursor-pointer"
    >
      {/* Video player */}
      <video
        ref={videoRef}
        src={src}
        width={999}
        height={999}
        className="w-full h-full aspect-video"
        autoPlay
        muted
        loop
      >
      </video>
    </div>
  );
};

export default VideoPlayer;
