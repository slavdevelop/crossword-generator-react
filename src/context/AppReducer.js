export default (state, action) => {
    switch(action.type) {
        case "DELETE_WORD":
            return {
                ...state,
                words: state.words.filter(word => word !== action.payload)
            }
            case "ADD_WORD":
                return {
                    ...state,
                    words: [...state.words, action.payload] 
                }
        default:
            return state;
    }
}