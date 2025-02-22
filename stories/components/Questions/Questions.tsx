import React, { useState, useEffect } from "react";
import { Checkboxes } from "../Checkbox/Checkboxes";
import { Button } from "../../Button";
import "./questions.css";

export const Questions = ({quizJson}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const [correctAnswer, setcorrectAnswer] = useState<any>([]);

  const [wrongQuestion, setWrongQuestion] = useState<any>([]);
  const [actualMarkCount, setActualMarkCount] = useState("");
  const totalQuestions = quizJson.length;

  const handleAnswerChange = (e: any) => {
    setSelectedAnswer([...selectedAnswer, e.target.value]);
  };

  useEffect(() => {
    setcorrectAnswer(quizJson.map((item : any) => item.correctAnswer));
  }, []);

  const handleSubmit = () => {
    if (correctAnswer.length !== selectedAnswer.length) {
      console.log(
        "Not all question answered. Please select atleast one option per question before you click submit."
      );
    }

    if (correctAnswer.length === selectedAnswer.length) {
      let count = 0;
      let array: any = [];
      for (let i = 0; i < correctAnswer.length; i++) {
        if (selectedAnswer[i] === correctAnswer[i]) {
          count = count + 1;
          setActualMarkCount(count + "");
        } else {
          let question = i + 1;
          array.push(question);
        }
      }
      let nArray = array.join(",");
      setWrongQuestion([...wrongQuestion, nArray]);
    }
  };

  return (
    <div>
      <div className="storybook-questions-status">
        <span className="storybook-questions-fontsize">
          Total Mark: {actualMarkCount ? actualMarkCount : 0}
        </span>
        <span
          className="storybook-questions-fontsize"
          style={{ paddingLeft: "15px" }}
        >
          Total Questions: {totalQuestions}
        </span>
      </div>
      <div className="storybook-questions">
        <div className="innerContainer">
          {quizJson.map((values: any) => {
            const questionId = values.id;
            return (
              <div style={{ padding: "3px" }}>
                <div className="individualQuestionContainer">
                  <div className="individualElementPadding">
                    Question {questionId}
                  </div>
                  <div className="individualElementPadding">
                    {values.question}
                  </div>
                  <div>
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
      <div className="storybook-questions-status">
        <span
          className="storybook-questions-fontsize"
        >
          Incorrect Questions: {wrongQuestion ? wrongQuestion : 0}
        </span>
      </div>
    </div>
  );
};
