import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

const rows = 20;
const cols = 20;

const Box = ({char, row, col}) => {

    return (
        <span className={`crossword-character row-${row} col-${col}`}>{char}</span>
    )
}

const Crossword = () => {
    const {words, isCrosswordGenerated} = useContext(GlobalContext);

    const createGrid = () => {
        const grid = [];

        for (let row = 0; row < rows; row++) {
            grid.push(new Array(cols));
            
            for (let col = 0; col < cols; col++) {
                grid[row][col] = " ";
            }
            
        }

        return grid;
    }

    const grid = createGrid();
    
    if (!isCrosswordGenerated) return '';

    return (
        <div className="crossword-container">
            {grid.map((rowElement, rowNumber) => (
                    <div className={`row row-${rowNumber}`}>
                        {rowElement.map((colElement, colNumber) => {

                            return <Box char={colElement} row={rowNumber} col={colNumber} />
                        })}
                    </div>
            ))}
        </div>
    )
}

export default Crossword;
