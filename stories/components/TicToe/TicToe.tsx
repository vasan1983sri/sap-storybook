import {Button} from '../../Button'
import React, {useRef, useState} from "react";

export default function TicToe() {
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [startGame, setStartGame] = useState('Start Game')
    const [enableGame, setEnableGame] = useState(true)

    const [playerX, setPlayerX] = useState([]);
    const [playerO, setPlayerO] = useState([]);
    const [winner, setWinner] = useState('')

    const winningCombinationArray = [
        ['0', '1', '2'],
        ['0', '3', '6'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ]

    const [buttonZeroValue, setButtonZeroValue] = useState('');
    const [buttonOneValue, setButtonOneValue] = useState('');
    const [buttonTwoValue, setButtonTwoValue] = useState('')
    const [buttonThreeValue, setButtonThreeValue] = useState('')
    const [buttonFourValue, setButtonFourValue] = useState('')
    const [buttonFiveValue, setButtonFiveValue] = useState('')
    const [buttonSixValue, setButtonSixValue] = useState('')
    const [buttonSevenValue, setButtonSevenValue] = useState('')
    const [buttonEightValue, setButtonEightValue] = useState('')

    const initialButtonStates = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    }

    const [buttonStates, setButtonStates] = useState(initialButtonStates);

    const startGameValue = () => {
        if (startGame === 'Start Game') {
            setStartGame("Game Started")
            setEnableGame(true)
        } else {
            setStartGame("Start Game")
        }
    }
    const resetGame = () => {
        setStartGame("Start Game")
        setCurrentPlayer('X')
        setEnableGame(true)
        setPlayerO([])
        setPlayerX([])
        resetButtonValues()
        setButtonStates(initialButtonStates)
        setWinner('')
    }

    const resetButtonValues = () => {
        setButtonZeroValue('')
        setButtonOneValue('')
        setButtonTwoValue('')
        setButtonThreeValue('')
        setButtonFourValue('')
        setButtonFiveValue('')
        setButtonSixValue('')
        setButtonSevenValue('')
        setButtonEightValue('')
    }
    const onChangeButtonValue = (e: any) => {
        if (currentPlayer === 'X') {
            setCurrentPlayer('O')
        } else {
            setCurrentPlayer('X')
        }
    }

    const handlePlayerValue = (buttonId: any, currentPlayer: any) => {
        if (currentPlayer === 'X') {
            const arr = [...playerX]
            arr.push(buttonId)
            setPlayerX(arr)
            combinationArrayList(arr, currentPlayer)
        }
        if (currentPlayer === 'O') {
            const arr = [...playerO]
            arr.push(buttonId)
            setPlayerO(arr)
            combinationArrayList(arr, currentPlayer)
        }

    }

    const combinationArrayList = (array: any, currentPlayer: any) => {
       for(let i=0;i<winningCombinationArray.length;i++)
       {
         const isIncluded = winningCombinationArray[i].every(value => array.includes(value));
         if(isIncluded)
         {
             if(winner === '') {
                 setWinner(currentPlayer)
             }
             setEnableGame(false)
             break;
         }
       }
    }

    const handleButtonClick = (buttonId: any) => {
        setButtonStates((prevState) => ({
            ...prevState, [buttonId]: true,
        }))
    }
    const handleButtonFunctionalityAfterClicked = (currentPlayer: any, buttonId: any) => {
        handleButtonClick(buttonId)
        onChangeButtonValue(currentPlayer)
        handlePlayerValue(buttonId, currentPlayer)
    }
    const  handleClick = (buttonId: any) => {
        switch (buttonId) {
            case '0':
                setButtonZeroValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '1':
                setButtonOneValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '2':
                setButtonTwoValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '3':
                setButtonThreeValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '4':
                setButtonFourValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '5':
                setButtonFiveValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '6':
                setButtonSixValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '7':
                setButtonSevenValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
            case '8':
                setButtonEightValue(currentPlayer)
                handleButtonFunctionalityAfterClicked(currentPlayer, buttonId)
                break;
        }
    };

    return (
        <div>
            <div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 180px 180px',
                    columnGap: '30px'
                }}>
                    <Button size='medium' label={startGame} primary={false} backgroundColor={'white'}
                            value={currentPlayer}
                            onClick={startGameValue} disabled={!enableGame}/>
                    <Button size='medium' label={'Reset Game'} primary={false} backgroundColor={'white'}
                            value={currentPlayer} onClick={resetGame}/>
                    <Button size='medium' label={'Current Player: ' + currentPlayer} primary={false}
                            backgroundColor={'white'} value={onChangeButtonValue} disabled={false}/>
                </div>
                <div style={{paddingTop: '30px', fontSize: '20px'}}>
                    Winner is: <b style={{color: "blue", fontSize: '40px'}}> {winner} </b>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '70px 70px 70px',
                    columnGap: '40px',
                    paddingTop: '30px',
                    rowGap: '40px'
                }}>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonZeroValue}
                            disabled={buttonStates["0"]} onClick={() => handleClick('0')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonOneValue}
                            disabled={buttonStates["1"]} onClick={() => handleClick('1')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonTwoValue}
                            disabled={buttonStates["2"]} onClick={() => handleClick('2')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonThreeValue}
                            disabled={buttonStates["3"]} onClick={() => handleClick('3')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonFourValue}
                            disabled={buttonStates["4"]} onClick={() => handleClick('4')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonFiveValue}
                            disabled={buttonStates["5"]} onClick={() => handleClick('5')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonSixValue}
                            disabled={buttonStates["6"]} onClick={() => handleClick('6')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonSevenValue}
                            disabled={buttonStates["7"]} onClick={() => handleClick('7')}/>
                    <Button size='medium' primary={false} backgroundColor={'white'} label={buttonEightValue}
                            disabled={buttonStates["8"]} onClick={() => handleClick('8')}/>
                </div>
            </div>
        </div>
    )


}