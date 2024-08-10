"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(useGSAP);

interface VideoTeaserProps {
  vimeoId: string;
  videoId: string;
}

const VideoTeaser: React.FC<VideoTeaserProps> = ({ vimeoId, videoId }) => {
  // Ref for animating container
  const videoContainerRef = useRef<HTMLDivElement>(null);
  // States
  const [isPaused, setisPaused] = useState(true);
  const [isPlayerOpen, setisPlayerOpen] = useState(false);

  // Function to open and close player
  const togglePlayer = () => setisPlayerOpen((prev) => !prev);

  // Gsap animation for container to move from left to right
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
      onComplete: () => setisPaused(false),
      onReverseComplete: () => setisPaused(true),
    });
  });

  // Use effect to play or pause teaser if player is opened
  useEffect(() => {
    if (isPlayerOpen) {
      setisPaused(true);
    } else {
      setisPaused(false);
    }
  }, [isPlayerOpen]);

  return (
    <>
      {/* Player */}
      {isPlayerOpen && (
        <VideoPlayer videoId={videoId} closePlayer={togglePlayer} />
      )}

      {/* Teaser container */}
      <div
        ref={videoContainerRef}
        className="relative max-w-[95vw] overflow-hidden cursor-pointer"
      >
        {/* Vimeo id contaier */}
        <Vimeo
          video={vimeoId}
          autoplay
          controls={false}
          paused={isPaused}
          muted
          loop
          playsInline
          className=" w-full h-full"
        />

        {/* Empty container for click */}
        <span
          className="w-full h-full absolute top-0 left-0 z-40"
          onClick={togglePlayer}
        ></span>
      </div>
    </>
  );
};

export default VideoTeaser;
