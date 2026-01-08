"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const title = "Quiz";

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-xl rounded-md bg-gray-900 text-white shadow shadow-black">
        <div className="p-5 text-center font-bold text-3xl border-b border-gray-700">{title}</div>
        <div className="p-5">
          {!showResult && <QuestionItem question={questions[currentQuestion]} count={currentQuestion + 1} onAnswer={handleAnswered} />}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-gray-700">
          {!showResult && `${currentQuestion + 1} of ${questions.length} question${questions.length === 1 ? "" : "s"}`}
          {showResult && (
            <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-gray-700 text-white hover:cursor-pointer">
              Restart Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
