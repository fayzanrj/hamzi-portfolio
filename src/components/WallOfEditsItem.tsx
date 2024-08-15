import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Props 
interface WallOfEditsItemProps {
  imageUrl: string;
  qoute: string;
  videoId: string;
  reverse: boolean;
  isPlaying: boolean;
  playVideo: () => void;
  stopVideo: () => void;
}

const WallOfEditsItem: React.FC<WallOfEditsItemProps> = ({
  imageUrl,
  qoute,
  reverse,
  videoId,
  isPlaying,
  playVideo,
  stopVideo
}) => {
  // State
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // Ref
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  // Function to toggle video playback
  const toggleVideo = () => {
    playVideo(); // Notifying parent to handle activeVideoId state
    setIsVideoOpen((prev) => !prev);
  };

  // Component to render YouTube player
  const YtPlayer = () => (
    <div className="relative w-full pb-[56.25%]">
      {/* Maintaining 16:9 Aspect Ratio */}
      <iframe
        ref={videoRef}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        width="100%"
        height="100%"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0"
      />
    </div>
  );

  // Component to render thumbnail image
  const ThumbnailImage = () => (
    <Image
      src={imageUrl}
      width={999}
      height={999}
      alt={`Thumbnail`}
      quality={100}
      className="aspect-video cursor-pointer"
      onClick={toggleVideo} // Toggle video on click
    />
  );

  // UseEffect to handle video visibility with IntersectionObserver
  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting && isVideoOpen) {
            stopVideo() // Notifying parent element to make activeVideoId null
            setIsVideoOpen(false); // Closing video if it goes out of view
          }
        },
        { threshold: 0.5 } 
      );

      const currentVideoRef = videoRef.current;
      // observng video ref
      observer.observe(currentVideoRef); 

      return () => {
        if (currentVideoRef) {
          observer.unobserve(currentVideoRef); // Clean up
        }
      };
    }
  }, [isVideoOpen, videoRef]);

  return (
    <div className="flex-shrink-0 w-72 md:w-96">
      {reverse ? (
        <>
          <p className="text-center mt-2 w-full h-72 p-8 text-white font-black italic text-2xl">
            {qoute}
          </p>
          {isVideoOpen && isPlaying ? <YtPlayer /> : <ThumbnailImage />}
        </>
      ) : (
        <>
          {isVideoOpen && isPlaying ? <YtPlayer /> : <ThumbnailImage />}
          <p className="text-center mt-2 w-full h-72 p-8 text-white font-black italic text-2xl">
            {qoute}
          </p>
        </>
      )}
    </div>
  );
};

export default WallOfEditsItem;
