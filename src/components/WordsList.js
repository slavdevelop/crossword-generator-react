import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

const WordsList = () => {
    const {words, deleteWord, generateCrossword, reset} = useContext(GlobalContext);

    const handleGenerate = () => {
        console.log("Generate clicked...");
        if (words.length < 2) {
            console.log("You can not generate a crossword with less than 2 words!");

            return;
        }

        generateCrossword();
    }

    const handleReset = () => {
        console.log("Reset clicked...");
        reset();
    }

    return (
        <div className="word-list-container">
            <div className="words-list">
                {words.map((word, index) => <span onClick={() => deleteWord(word)} className="word" key={index} >{word}</span>)}
            </div>
            <div className="actions">
                <button onClick={handleGenerate} >Generate Crossword</button>
                <button onClick={handleReset} >Reset</button>
            </div>
        </div>
    )
}

export default WordsList;
