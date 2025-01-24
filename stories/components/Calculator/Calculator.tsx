import {Button} from '../../Button'
import React, {useState} from 'react';
import TextBox from "../Textbox/TextBox";

export default function Calculator() {

    const [val1, setVal1] = useState('')
    const [operatorVal, setOperatorVal] = useState('')
    const [val2, setVal2] = useState('')
    const [result, setResult] = useState('')
    const onClickButton = (e: any) => {
        e.preventDefault()
        setResult('')
        setVal1(val1 + e.target.value)
    }

    const onClickSepValue = (e: any) => {
        setVal2(val1)
        setOperatorVal(e.target.value)
        setVal1('')
    }
    const onClickCalculateValue = () => {
        const a1 = +val2;
        const a2 = +val1;
        setVal1('')
        switch (operatorVal) {
            case '+':
                setResult((a1 + a2).toString())
                break;
            case 'X':
                setResult((a1 * a2).toString())
                break;
            case '-':
                setResult((a1 - a2).toString())
                break;
            case '%':
                setResult((a1 % a2).toString())
                break;
            case '/':
                setResult((a1 / a2).toString())
                break;
        }
    }

    const resetButton = () => {
        console.log(result)
        setVal1('');
        setResult('');
    }
    return (
        <div>
            <div>
                <TextBox type="text" width="306px" textAlign="right" value={result.length > 0 ? result : val1}/>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '70px 70px 70px',
                columnGap: '40px',
                rowGap: "10px",
                width: "max-content",
                height: "70%",
                borderStyle: "solid",
                borderWidth: "thin",
                padding: "10px"
            }}>
                <Button size='medium' label="%" primary={false} backgroundColor={'white'} value={'%'}
                        onClick={onClickSepValue}/>
                <Button size='medium' label="/" primary={false} backgroundColor={'white'} value={'/'}
                        onClick={onClickSepValue}/>
                <Button size='medium' label="X" primary={false} backgroundColor={'white'} value={'X'}
                        onClick={onClickSepValue}/>
                <Button size='medium' label="-" primary={false} backgroundColor={'white'} value={'-'}
                        onClick={onClickSepValue}/>
                <Button size='medium' label="+" primary={false} backgroundColor={'white'} value={'+'}
                        onClick={onClickSepValue}/>
                <Button size='medium' label="0" primary={false} backgroundColor={'white'} value={0}
                        onClick={onClickButton}/>
                <Button size='medium' label="1" primary={false} backgroundColor={'white'} value={1}
                        onClick={onClickButton}/>
                <Button size='medium' label="2" primary={false} backgroundColor={'white'} value={2}
                        onClick={onClickButton}/>
                <Button size='medium' label="3" primary={false} backgroundColor={'white'} value={3}
                        onClick={onClickButton}/>
                <Button size='medium' label="4" primary={false} backgroundColor={'white'} value={4}
                        onClick={onClickButton}/>
                <Button size='medium' label="5" primary={false} backgroundColor={'white'} value={5}
                        onClick={onClickButton}/>
                <Button size='medium' label="6" primary={false} backgroundColor={'white'} value={6}
                        onClick={onClickButton}/>
                <Button size='medium' label="7" primary={false} backgroundColor={'white'} value={7}
                        onClick={onClickButton}/>
                <Button size='medium' label="8" primary={false} backgroundColor={'white'} value={8}
                        onClick={onClickButton}/>
                <Button size='medium' label="9" primary={false} backgroundColor={'white'} value={9}
                        onClick={onClickButton}/>
                <Button size='medium' label="Clear" primary={false} backgroundColor={'white'} onClick={resetButton}/>
                <Button size='medium' label="=" primary={false} backgroundColor={'white'} onClick={onClickCalculateValue}/>
            </div>
        </div>

    )
}