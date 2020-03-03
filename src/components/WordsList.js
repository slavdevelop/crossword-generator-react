import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

const WordsList = () => {
    const {words} = useContext(GlobalContext);

    return (
        <div className="words-list">
            {words.map((word, index) => <span className="word" key={index} >{word}</span>)}
        </div>
    )
}

export default WordsList;
