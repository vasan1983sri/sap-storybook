import React from 'react';
import { Button } from '../../Button';
export const Sudoku = () => {
    const generateSudoku = () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill(''));
        // Sudoku generation logic goes here
        return board;
    };
    const sudokuBoard = generateSudoku();
    return (
        <div>
            <h1>Sudoku</h1>
            <p>Sudoku is a logic-based, combinatorial number-placement puzzle.</p>
           {sudokuBoard.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', columnGap: '5px', marginBottom: '5px', marginTop: '5px' }}>
                    {row.map((cell, cellIndex) => ( 
                        <div key={cellIndex} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
