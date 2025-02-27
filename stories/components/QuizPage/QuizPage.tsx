import React, { useState } from "react";
import quizzes from "../Questions/Quizzes.json";

export const QuizPage = () => {
  const [cQuestion, setCQuestion] = useState(0);
  const { question, choices } = quizzes[cQuestion];

  const handleQuestionClick = () => {
    if (cQuestion < quizzes.length - 1) {
      setCQuestion(cQuestion + 1);
    }
  };
  return (
    <div>
      <div>
        Question: {cQuestion + 1} / {quizzes.length}
      </div>
      <div style={{ paddingTop: "10px" }}>
        {question}
        <div style={{ paddingTop: "10px" }}>
          {choices.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
        <div style={{ paddingTop: "10px" }}>
          <button onClick={handleQuestionClick}>Submit</button>
        </div>
      </div>
    </div>
  );
};
