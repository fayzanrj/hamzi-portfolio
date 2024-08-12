"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
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
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const teaserRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  // Function to open and close player
  const togglePlayer = () => setIsPlayerOpen((prev) => !prev);

  // GSAP animation for container to move from left to right
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

  // Handling Vimeo player instance setup
  useEffect(() => {
    if (teaserRef.current) {
      const player = new Player(teaserRef.current as HTMLDivElement, {
        id: parseInt(vimeoId), // Pass the Vimeo ID here
        loop: true,
        muted: true,
        controls: false,
      });

      playerRef.current = player;

      // Setting up Intersection Observer
      const observer = new IntersectionObserver(
        async (entries) => {
          if (playerRef.current) {
            if (entries[0].isIntersecting) {
              await playerRef.current.play();
            } else {
              await playerRef.current.pause();
            }
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(teaserRef.current);

      return () => {
        observer.disconnect();
        if (playerRef.current) {
          playerRef.current.pause();
        }
      };
    }
  }, [vimeoId]);

  // Use effect to play or pause teaser if player is opened
  useEffect(() => {
    if (isPlayerOpen) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
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
        {/* Container for Vimeo video */}
        <div ref={teaserRef} className="w-full h-full"></div>

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
