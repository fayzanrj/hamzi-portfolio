import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

// Props
interface VideoPlayerProps {
  videoId: string;
  closePlayer: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ closePlayer, videoId }) => {
  // Ref for the player container
  const playerRef = useRef<HTMLDivElement>(null);
   // State to keep track of page offset
   const [scrollPosition, setScrollPosition] = useState(0);


  // GSAP animation on mount
  useEffect(() => {
    const playerElement = playerRef.current;
    if (playerElement) {
      gsap.fromTo(
        playerElement,
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
    }

    if (typeof window !== "undefined") {

      // Set initial scroll position and disable scrolling
      setScrollPosition(window.pageYOffset);
      document.documentElement.style.overflow = "hidden";

      // Cleanup function
      return () => {
        document.documentElement.style.overflowY = "auto";
      };
    }    
  }, []);

  // Handle close with animation
  const handleClose = () => {
    const playerElement = playerRef.current;
    if (playerElement) {
      gsap.to(playerElement, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.in(1.7)",
        onComplete: closePlayer, // Closing the player after animation completes
      });
    }
  };

  return (
    <div
      ref={playerRef}
      className="w-full p-2 h-svh absolute left-0 z-50 flex justify-center items-center bg-[rgb(0,0,0,0.8)]"
      style={{ top: `${scrollPosition}px` }}
    >
      <button className="absolute top-1 right-1" onClick={handleClose}>
        <IoMdClose size={"2rem"} color="#ffffff" />
      </button>

      <iframe
        className="w-[90%] md:w-4/5 aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
