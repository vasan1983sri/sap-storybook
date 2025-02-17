import React, { useState } from "react";
import { Checkboxes } from "../Checkbox/Checkboxes";
import quizzes from "./Quizzes.json";

export const Questions = () => {

  const handleChange = (e: any) => {
    let isChecked = e.target.value;
    console.log(isChecked)
    // do whatever you want with isChecked value
  }
  return (
    <div style={{ borderStyle: "Solid", borderWidth: "thin" }}>
      <div  style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        {quizzes.map((values: any) => {
          const id = values.id;
          return (
            <div style={{padding: "3px"}}>
                <div style={{ border: "2px solid red", borderRadius: "25px", padding: "10px"}}>
                  <div>
                    Question {id} <br />
                    <span>{values.question}</span>
                  </div>
                  {values.choices.map((answers: any) => (
                    <Checkboxes transform={"scale(1.0)"} value={answers} onChange={handleChange} />
                  ))}
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};
