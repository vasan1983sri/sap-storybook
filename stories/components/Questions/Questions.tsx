import React, { useState, useEffect } from "react";
import { Checkboxes } from "../Checkbox/Checkboxes";
import { Button } from "../../Button";
import quizzes from "./Quizzes.json";
import "./questions.css";

export const Questions = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const [correctAnswer, setcorrectAnswer] = useState<any>([]);

  const [wrongQuestion, setWrongQuestion] = useState<any>([]);
  const [actualMarkCount, setActualMarkCount] = useState("");
  const totalQuestions = quizzes.length;

  const handleAnswerChange = (e: any) => {
    setSelectedAnswer([...selectedAnswer, e.target.value]);
  };

  useEffect(() => {
    setcorrectAnswer(quizzes.map((item) => item.correctAnswer));
  }, []);

  const handleSubmit = () => {
    if (correctAnswer.length !== selectedAnswer.length) {
      console.log(
        "Not all question answered. Please select atleast one option per question before you click submit."
      );
    }
    
    if (correctAnswer.length === selectedAnswer.length) {
      let count = 0;
      for (let i = 0; i < correctAnswer.length; i++) {
        if (selectedAnswer[i] === correctAnswer[i]) {
          count = count + 1;
          setActualMarkCount(count + "");
        }
      }
    }
  }

  return (
    <>
      <div>
        <span>
          <b>Total Mark:</b> {actualMarkCount ? actualMarkCount : 0}
        </span><br />
        <span>
          <b>Total Questions:</b> {totalQuestions}
        </span>
      </div>
      <div className="storybook-questions">
        <div className="innerContainer">
          {quizzes.map((values: any) => {
            const questionId = values.id;
            return (
              <div style={{ padding: "3px" }}>
                <div
                  style={{
                    border: "2px solid red",
                    borderRadius: "25px",
                    padding: "10px",
                  }}
                >
                  <div>
                    Question {questionId} <br />
                    <span>{values.question}</span>
                  </div>
                  {values.choices.map((answers: any) => (
                    <Checkboxes
                      transform={"scale(1.0)"}
                      id={questionId}
                      value={answers}
                      onChange={handleAnswerChange}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonStyle">
        <Button
          size="large"
          label="Submit"
          primary={true}
          value={"Submit"}
          backgroundColor={undefined}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};
