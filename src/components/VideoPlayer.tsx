import React, { useEffect, useRef } from "react";
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
      className="w-full h-full absolute left-0 top-0 z-50 flex justify-center items-center bg-[rgb(0,0,0,0.8)]"
    >
      <button className="absolute top-1 right-1" onClick={handleClose}>
        <IoMdClose size={"2rem"} color="#ffffff" />
      </button>

      <iframe
        className="w-[90%] aspect-video"
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
