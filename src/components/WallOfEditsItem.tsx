import Image from "next/image";
import React from "react";

// Props
interface WallOfEditsItemProps {
  imageUrl: string;
  qoute: string;
  videoId: string;
  reverse: boolean;
}

const WallOfEditsItem: React.FC<WallOfEditsItemProps> = ({
  imageUrl,
  qoute,
  reverse,
}) => {
  return (
    <>
      <div className="flex-shrink-0 w-72 md:w-96 ">
        {reverse ? (
          <>
            <p className="text-center mt-2 w-full h-72  p-8 text-white font-black italic text-2xl content-center">
              {qoute}
            </p>
            <Image
              src={imageUrl}
              width={999}
              height={999}
              alt={`Image`}
              quality={100}
              className="aspect-video"
            />
          </>
        ) : (
          <>
            <Image
              src={imageUrl}
              width={999}
              height={999}
              alt={`Image`}
              quality={100}
              className="aspect-video object-fill"
            />
            <p className="text-center mt-2 w-full h-72  p-8 text-white font-black italic text-2xl content-center">
              {qoute}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default WallOfEditsItem;
