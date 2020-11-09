export const initialState = {
    user: 'Walid',
    term: ''
}

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_KEYWORD: 'SET_KEYWORD'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_KEYWORD:
            return {
                ...state,
                term: action.term
            }
        default:
            return state;
    }
}

export default reducer;