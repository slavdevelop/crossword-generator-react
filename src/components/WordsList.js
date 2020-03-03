import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

const WordsList = () => {
    const {words, deleteWord} = useContext(GlobalContext);

    return (
        <div className="words-list">
            {words.map((word, index) => <span onClick={() => deleteWord(word)} className="word" key={index} >{word}</span>)}
        </div>
    )
}

export default WordsList;
