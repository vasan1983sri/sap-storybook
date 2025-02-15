import React, {useState} from "react"
import {Checkboxes} from '../Checkbox/Checkboxes'
import quizzes from './Quizzes.json'

export const Questions = () => {

    return (
        <div>
            {
                quizzes.map((values: any) => {
                  const id = values.id + ") "
                    return (
                        <div>
                            <span>{id}{values.question}</span>
                            {
                                values.choices.map((answers: any) =>
                                    (
                                        <Checkboxes transform={"scale(1.0)"} value={answers} />
                                    ))
                            }
                        </div>
                    )
                })
            }

        </div>
    )

}