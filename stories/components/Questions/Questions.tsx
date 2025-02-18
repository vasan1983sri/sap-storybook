import React, { useState,useEffect } from "react";
import { Checkboxes } from "../Checkbox/Checkboxes";
import quizzes from "./Quizzes.json";
import './questions.css'

export const Questions = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const [correctAnswerArray, setCorrectAnswerArray] = useState<any>([])
  let answers: any = [];

  const handleChange = (e: any) => {
    let isChecked = e.target.value;
    const id = e.target.id;
    //console.log(isChecked, id);
   
    answers.push(e.target.value)
    // do whatever you want with isChecked value
    setSelectedAnswer([...selectedAnswer, answers])
  };

  useEffect(() => {
    setCorrectAnswerArray(quizzes.map(item => item.correctAnswer));
  }, []);
  
  /**Printing the selected answers count   */
  console.log("Answered Question length", selectedAnswer.length)
  /** Printing total correct answers - from json */
  console.log("Correct Answer length", correctAnswerArray.length)

  return (
    
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
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};
