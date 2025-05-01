import React, { useState, useEffect } from "react";
import quizzes from "../Questions/Quizzes.json";
import { DynamicOption } from "../DynamicOption/DynamicOption";
import { Checkboxes } from "../Checkbox/Checkboxes";
import "./quizPage.css";
import { Button } from "../../Button";
import "primeicons/primeicons.css";

export const QuizPage = () => {
  const [startQuesNum, setStartQuesNum] = useState(0);
  const { question, choices } = quizzes[startQuesNum];
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const [hasChanged, setHasChanged] = useState(false);
  const [correctAnswers, setcorrectAnswers] = useState<any>([]);
  const [wrongQuestion, setWrongQuestion] = useState<any>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [wrongQuestionDisabled, setWrongQuestionDisabled] = useState(false);

  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const [totalPoints, setTotalPoints] = useState(0);

  const totalQuestion = quizzes.length;

  // useEffect(() => {  setStartTime(new Date().toLocaleTimeString());}, [startTime]);

  useEffect(() => {
    setcorrectAnswers(quizzes.map((item: any) => item.correctAnswer));
  }, []);

  const goToNextQuestion = (e: any) => {
    e.preventDefault();
    if (startQuesNum === 0) {
      setStartTime(new Date().toLocaleTimeString());
    }
    if (startQuesNum < quizzes.length - 1) {
      setStartQuesNum(startQuesNum + 1);
    }
    setHasChanged(false);
  };
  const goToPrevQuestion = (e: any) => {
    e.preventDefault();
    if (startQuesNum >= 1) {
      setStartQuesNum(startQuesNum - 1);
    }
  };
  const resetQuiz = () => {
    setStartQuesNum(0);
    setSelectedAnswer([]);
    setWrongQuestion([]);
    setTotalPoints(0);
    setStartTime("");
    setEndTime("");
    setIsDisabled(false);
  };

  const submitAnswers = () => {
    let sAnswers: any = [];
    let count = 0;
    if (
      selectedAnswer.length > 0 &&
      selectedAnswer.length === correctAnswers.length
    ) {
      for (let i = 0; i < correctAnswers.length; i++) {
        if (selectedAnswer[i] === correctAnswers[i]) {
          count = count + 1;
          setTotalPoints(count);
        } else {
          let question = i + 1;
          sAnswers.push(
            question +
              " ) Selected: " +
              selectedAnswer[i] +
              " Correct: " +
              correctAnswers[i]
          );
        }
        setWrongQuestion(sAnswers);
        setEndTime(new Date().toLocaleTimeString());
        setIsDisabled(true);
        if (sAnswers.length > 0) {
          setWrongQuestionDisabled(true);
        }
      }
    }
    
  };

  const handleAnswerChange = (e: any, quesNum: any) => {
    setSelectedAnswer((prevItems: any) => {
      const newItems = [...prevItems];
      newItems[quesNum] = e.target.value;
      return newItems;
    });
  };

  // console.log(selectedAnswer);
  // console.log(correctAnswers);

  function CheckboxItem({ ans, quesNum }) {
    const handleCheckboxChange = (e: any) => {
      if (!hasChanged) {
        console.log("onChange event triggered", e.target.value);
        setHasChanged(true);
        // Perform actions that should only happen once
        //setSelAnswer(e.target.value)
        handleAnswerChange(e, quesNum);
      } else {
        setHasChanged(false);
        handleAnswerChange(e, quesNum);
      }
    };
    return (
      <div>
        <Checkboxes
          transform={"scale(1.0)"}
          value={ans}
          isChecked={selectedAnswer[quesNum] === ans ? true : false}
          onChange={handleCheckboxChange}
        />
      </div>
    );
  }

  return (
    <div className="storybook-quiz">
      <div className="quizContainer">
        Start Time: {startTime} <br />
        End Time: {endTime}
        <div className="quizMarkTemplate">
          <div className="quizTotalQuestion">
            Question: {startQuesNum + 1} / {quizzes.length}
          </div>
          <div className="quizTotalScore">Points Scored: {totalPoints}</div>
        </div>
        <div>
          {isDisabled ? (
            <div style={{ pointerEvents: "none", opacity: 0.5 }}>
              {
                <div className="quizQn">
                  {question}
                  <div className="quizAns">
                    {choices.map((ans) => (
                      <CheckboxItem ans={ans} quesNum={startQuesNum} />
                    ))}
                  </div>
                </div>
              }
            </div>
          ) : (
            <div>
              {
                <div className="quizQn">
                  {question}
                  <div className="quizAns">
                    {choices.map((ans) => (
                      <CheckboxItem ans={ans} quesNum={startQuesNum} />
                    ))}
                  </div>
                </div>
              }
            </div>
          )}
        </div>
        <div className="quizBtnAlign">
          <div className="quizBtnLeftAlign">
            <Button
              size="large"
              label={">> Next"}
              disabled={startQuesNum === totalQuestion - 1}
              primary={startQuesNum < totalQuestion - 1 ? true : false}
              value={"NextQuestion"}
              backgroundColor={undefined}
              onClick={goToNextQuestion}
            />
          </div>
          <div className="quizSubmitBtnAlign">
            <Button
              size="large"
              label="Submit"
              primary={
                startQuesNum < totalQuestion - 1
                  ? false
                  : selectedAnswer.length === correctAnswers.length
                  ? true
                  : false
              }
              disabled={startQuesNum < totalQuestion - 1}
              value={"Submit Answers"}
              backgroundColor={undefined}
              onClick={submitAnswers}
            />
            <Button
              size="large"
              label="Reset"
              primary={false}
              value={"Reset"}
              backgroundColor={undefined}
              onClick={resetQuiz}
            />
          </div>
          <div className="quizBtnRightAlign">
            <Button
              size="large"
              label="<< Prev"
              disabled={startQuesNum === 0}
              primary={startQuesNum === 0 ? false : true}
              value={"Previous Question"}
              backgroundColor={undefined}
              onClick={goToPrevQuestion}
            />
          </div>
        </div>
      </div>
      <div>
        {wrongQuestionDisabled ?  (
          <div>
            <i className="pi pi-times" style={{ color: "red", fontSize: "2rem"}}></i>
            <span className="quizAnswerResults">Incorrect Questions:</span>
            <div className="quizAnswerResults">
              {wrongQuestion.map((item: any, index: any) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        ) : null }
      </div>
    </div>
  );
};
