export default (state, action) => {
    switch(action.type) {
        case "ADD_WORD":
            return {
                ...state,
                words: [...state.words, action.payload] 
            }

        case "DELETE_WORD":
            return {
                ...state,
                words: state.words.filter(word => word !== action.payload)
            }

        case "GENERATE_CROSSWORD":
            return {
                ...state,
                isCrosswordGenerated: true
            }

        case "RESET":
            return {
                words: [],
                isCrosswordGenerated: false
            }
        default:
            return state;
    }
}