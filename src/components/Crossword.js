import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

const Word = ({wordText}) => {

    return (
        <span className="crossword-word">{wordText.split("").map(char => (
            <span className="crossword-character">{char}</span>
        ))}</span>
    );
}

const Crossword = () => {
    const {words, isCrosswordGenerated} = useContext(GlobalContext);

    if (!isCrosswordGenerated) return '';

    return (
        <div className="crossword-container">
            {words.map(word => <Word wordText={word} />)}
        </div>
    )
}

export default Crossword
