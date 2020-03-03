import React, {useState, useContext} from 'react'

import {GlobalContext} from "../context/GlobalState";

const AddWord = () => {
    const {words, addWord} = useContext(GlobalContext);

    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (words.includes(text)) {
            return;
        }

        addWord(text);

        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add word here" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add word</button>
        </form>
    )
}

export default AddWord
