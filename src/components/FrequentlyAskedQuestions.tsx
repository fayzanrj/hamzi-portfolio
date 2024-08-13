"use client";
import { qnaList } from "@/constants/QNA_LIST";
import React from "react";
import QuestionItem from "./QuestionItem";

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <section id="frequentlyAskedSection" className="text-white p-3">
      <h3 className="h-8 text-lg sm:text-xl md:text-2xl uppercase font-semibold">
        Frequently Asked Questions
      </h3>
      <div className="h-fit my-[8%]">
        {qnaList.map((qna) => (
          <QuestionItem
            key={qna.question}
            question={qna.question}
            answer={qna.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
