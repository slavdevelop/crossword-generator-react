import React, {createContext, useReducer} from 'react';

import AppReducer from "./AppReducer";

const initialState = {
    words: ['parking', 'tree', 'go', 'amazing', 'awesome', 'magician'],// 'outstanding', 'umbrella', 'testing', 'words', 'anything', 'kind', 'offline', 'characters'],
    isCrosswordGenerated: false
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

    const generateCrossword = () => {
        dispatch({
            type: "GENERATE_CROSSWORD"
        });
    }

    const reset = () => {
        dispatch({
            type: "RESET"
        });
    }

    return (
        <GlobalContext.Provider value={{
            words: state.words, isCrosswordGenerated: state.isCrosswordGenerated,
            addWord, deleteWord, generateCrossword, reset
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
