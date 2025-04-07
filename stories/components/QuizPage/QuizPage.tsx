import React, { useState, useEffect } from "react";
import quizzes from "../Questions/Quizzes.json";
import { DynamicOption } from "../DynamicOption/DynamicOption"
import  { Checkboxes}  from "../Checkbox/Checkboxes"
import "./quizPage.css";
import { Button } from "../../Button";

export const QuizPage = () => {
  const [startQuesNum, setStartQuesNum] = useState(0)
  const {question, choices} = quizzes[startQuesNum]
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const [selAnswer, setSelAnswer]= useState('')

  const handleButtonClick = () => {
    if(startQuesNum < quizzes.length-1)
    {
      setStartQuesNum(startQuesNum+1)
    }
  }
  const handlePrev = ( )=> {
    if(startQuesNum >= 1 )
    {
      setStartQuesNum(startQuesNum-1)
    }
  }
  const resetQuestion = () => {
    setStartQuesNum(0)
    setSelectedAnswer([])
  }
  const handleAnswerChange = (e: any, quesNum: any) => {  
   setSelectedAnswer((prevItems : any) => {
    const newItems = [...prevItems];
    newItems[quesNum] = e.target.value;
    return newItems;
   })
  };

  console.log(selectedAnswer)

  function CheckboxItem({ans, quesNum}) {   
      const handleCheckboxChange = (e : any) => { 
       setSelAnswer(e.target.value)
       handleAnswerChange(e, quesNum)        
      };
      return (    
        <div>
           <Checkboxes  transform={"scale(1.0)"}
              value={ans} isChecked={selAnswer === ans?true:false}
              onChange={handleCheckboxChange} />
        </div>
      );
   
  }

  return (
    <div>
      <div>
        Question: {startQuesNum + 1}
      </div>
      <div>{question}
        <div>
          {choices.map((ans)=>(
           <CheckboxItem ans={ans} quesNum={startQuesNum}/>
          ))}
        </div>
      </div>
      <div>
      <Button
              size="large"
              label="Submit"
              primary={false}
              value={"Submit"}
              backgroundColor={undefined}
              onClick={handleButtonClick}
            />
            <Button
              size="large"
              label="Reset"
              primary={false}
              value={"Reset"}
              backgroundColor={undefined}
              onClick={resetQuestion}
            />
            <Button
              size="large"
              label="prev"
              primary={false}
              value={"prev"}
              backgroundColor={undefined}
              onClick={handlePrev}
            />
      </div>
    </div>
  )
};
