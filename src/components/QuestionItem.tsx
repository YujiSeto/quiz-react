import { Question } from "@/types/Questions";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((item, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`border px-3 py-2 rounded-md text-lg mb-4  bg-gray-800 border-gray-700
              ${selectedAnswer !== null ? "cursor-auto" : "cursor-pointer hover:opacity-60"}
              ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && "bg-green-900 border-green-700"}
              ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && "bg-red-900 border-red-700"}
            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
