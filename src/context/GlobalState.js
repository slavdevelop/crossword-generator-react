import React, {createContext, useReducer} from 'react';

import AppReducer from "./AppReducer";

const initialState = {
    words: ['amazing', 'awesome', 'magic', 'outstanding', 'umbrella', 'test', 'words', 'any', 'kind', 'of', 'characters']
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addWord = word => {
        dispatch({
            type: "ADD_WORD",
            payload: word
        });
    }

    const deleteWord = word => {
        dispatch({
            type: "DELETE_WORD",
            payload: word
        });
    }

    return (
        <GlobalContext.Provider value={{words: state.words, addWord, deleteWord}}>
            {children}
        </GlobalContext.Provider>
    );
}
