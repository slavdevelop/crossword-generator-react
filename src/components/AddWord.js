import React, {useState} from 'react'

const AddWord = () => {
    const [text, setText] = useState('');

    return (
        <form>
            <input type="text" placeholder="Add word here" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add word</button>
        </form>
    )
}

export default AddWord
