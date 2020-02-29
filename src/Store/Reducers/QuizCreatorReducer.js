import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "../Actions/ActionTypes"

const initialState = {
    quiz: []
}

export default function quizCreatorReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_QUIZ_QUESTION:
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case RESET_QUIZ_CREATION:
            return {
                ...state,
                quiz: []
            }
        default:
            return state
    }
}