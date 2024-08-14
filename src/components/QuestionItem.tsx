"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// Props
interface QuestionItemProps {
  question: string;
  answer: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => {
    // State
  const [isOpened, setIsOpened] = useState(false);
//   Refs
  const answerRef = useRef<HTMLParagraphElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  // Function to open and close answer
  const toggleAnswer = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      if (itemRef.current?.style.opacity === "1") setIsOpened(true);
    }
  };

  // Useeffect to play animation when answer is opened/closed
  useEffect(() => {
    if (isOpened) {
      gsap.to(answerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        marginTop: 15,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpened]);

  // Animation when item comes in viewport
  useGSAP(() => {
    gsap.fromTo(
      itemRef.current,
      {
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 95%",
          end: "top 80%",
          scrub: true,
        },
      }
    );
  });

  return (
    <div
      ref={itemRef}
      className="h-fit bg-[#161B22] w-[40rem] max-w-[97%] mx-auto p-3 rounded-md select-none mb-4 qna-item shadow-xl opacity-0"
    >
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleAnswer}
      >
        <p className="text-basis md:text-lg font-medium">{question}</p>
        <IoMdClose
          className={`${isOpened ? "rotate-0" : "rotate-45"} duration-200`}
          size={'1.2rem'}
        />
      </div>
      <p ref={answerRef} className="overflow-hidden h-0 opacity-0">
        {answer}
      </p>
    </div>
  );
};

export default QuestionItem;
