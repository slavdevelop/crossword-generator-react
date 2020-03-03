import React, {createContext, useReducer} from 'react';

import AppReducer from "./AppReducer";

const initialState = {
    words: ['amazing', 'awesome', 'magic', 'outstanding', 'umbrella', 'test', 'words', 'any', 'kind', 'of', 'characters']
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{words: state.words}}>
            {children}
        </GlobalContext.Provider>
    );
}
