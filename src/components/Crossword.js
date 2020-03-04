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

    const extendedWordsArray = [];

    // Ordering the words by lenght DESC
    const orderedWords = words.sort((a, b) => b.length - a.length);

    for (let i = 0; i < orderedWords.length; i++) {
        const wordObject = {
            id: orderedWords[i],
            text: orderedWords[i],
            length: orderedWords[i].length
        };
        
        // Check if it is the first one
        if (i === 0) {
            console.log(orderedWords[i], 'the first one');

            // Calculating center coordinates of the grid
            const middleRow = Math.round(rows / 2);
            const middleCol = Math.round(cols / 2);

            const startColCoordinate = middleCol - Math.round(wordObject.length / 2);

            wordObject["isHorizontal"] = true;
            wordObject["startRow"] = middleRow;
            wordObject["startCol"] = startColCoordinate;

            extendedWordsArray.push(wordObject);
        } else {
            const charArray = wordObject.text.split("");

            extendedWordsArray.forEach(extendedWord => {

                extendedWord.text.split("").forEach(extendedChar => {
                    charArray.forEach(char => {
                        if(extendedChar === char) {
                            console.log(`Match! NW - ${wordObject.text} | EW - ${extendedWord.text} | char matched => ${char}`)
                        }
                    })
                })

            })
        }
        
    }


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
