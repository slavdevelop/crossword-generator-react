import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

import {getCharsCoordinates} from "../core";

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

                extendedWord.text.split("").forEach((extendedChar, extendedCharIndex) => {
                    charArray.forEach((newChar, newCharIndex) => {
                        if(extendedChar === newChar) {
                            let exCharRow;
                            let exCharCol;

                            let newWordStartRow;
                            let newWordStartCol;

                            if(extendedWord.isHorizontal) {
                                exCharRow = extendedWord.startRow;
                                exCharCol = extendedWord.startCol + extendedCharIndex;

                                newWordStartRow = extendedWord.startRow - newCharIndex;
                                newWordStartCol = exCharCol;
                            } else {
                                exCharRow = extendedWord.startRow + extendedCharIndex;
                                exCharCol = extendedWord.startCol;

                                newWordStartRow = exCharRow;
                                newWordStartCol = extendedWord.startCol - newCharIndex;
                            }

                            console.log(`Extended word start coordinates - SR ${extendedWord.startRow} SC ${extendedWord.startCol}`);
                            console.log(`Extended char index - ${extendedCharIndex}`);
                            console.log(`exCharRow - ${exCharRow} | exCharCol - ${exCharCol}`);
                            console.log(`new char index - ${newCharIndex}`);
                            console.log(`E - ${extendedWord.text} | N - ${wordObject.text} | MATCH => ${newChar}`);
                            console.log(`Should be horizontal - ${!extendedWord.isHorizontal}`);
                            console.log(`New word start coordinates - SR ${newWordStartRow} SC ${newWordStartCol}`);
                            console.log('-------------------------------');

                            wordObject["isHorizontal"] = !extendedWord.isHorizontal;

                            wordObject["startRow"] = newWordStartRow;
                            wordObject["startCol"] = newWordStartCol;

                            extendedWordsArray.push(wordObject);
                        }
                    })
                })
            });
        }
    }

    console.log(extendedWordsArray);

    const crds = [];
    
    extendedWordsArray.forEach(word => {
        const obj = getCharsCoordinates(word);

        crds.push(obj);
    });

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

    crds.forEach(c => {
        c.forEach(o => {
            grid[o.rowNumber][o.colNumber] = o.char;
        })
    })

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
