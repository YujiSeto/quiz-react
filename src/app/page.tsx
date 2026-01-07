"use client";

import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Quiz";

  return (
    
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-xl rounded-md bg-gray-900 text-white shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-500">{title}</div>
        <div className="p-5">
          ...
        </div>
        <div className="p-5 text-center border-t border-gray-500">
          {currentQuestion + 1} of {questions.length} question{questions.length === 1 ? '' : 's'}
        </div>
      </div>
    </div>
  );
};
export default Page;
