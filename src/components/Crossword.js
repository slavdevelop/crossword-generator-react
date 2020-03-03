import React, {useContext} from 'react';

import {GlobalContext} from "../context/GlobalState";

const Crossword = () => {
    const {words, isCrosswordGenerated} = useContext(GlobalContext);

    if (!isCrosswordGenerated) return '';

    return (
        <div className="crossword-container">
        
        </div>
    )
}

export default Crossword
