"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Quiz";

  const handleAnswered = (answer: number) => {};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-xl rounded-md bg-gray-900 text-white shadow shadow-black">
        <div className="p-5 text-center font-bold text-3xl border-b border-gray-700">{title}</div>
        <div className="p-5">
          <QuestionItem question={questions[currentQuestion]} count={currentQuestion + 1} onAnswer={handleAnswered} />
        </div>
        <div className="p-5 text-center border-t border-gray-700">
          {currentQuestion + 1} of {questions.length} question{questions.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
};
export default Page;
