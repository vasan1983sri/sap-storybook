import {useState} from "react";
import PropTypes from "prop-types";
import React from 'react'

export default function TextBoxComp ({textBox1, textBox2}){

    const [txtBox1, setTxtBox1] = useState(textBox1);
    const [txtBox2, setTxtBox2] = useState(textBox2);

    return (
        <div>
            <label> Text Box One:
           <input type="text" value={txtBox1}/>
            </label> <br />
            <label> Text Box Two:
                <input type="text" value={txtBox2}/>
            </label>
        </div>
    )

}

TextBoxComp.prototype = {
    tb1 : PropTypes.string
}