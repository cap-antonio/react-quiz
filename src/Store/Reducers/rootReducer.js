import {combineReducers} from 'redux'
import quizReducer from './QuizReducer'
import quizCreatorReducer from './QuizCreatorReducer'
import authReducer from './AuthReducer'

export default combineReducers({
    quiz: quizReducer,
    quizCreator: quizCreatorReducer,
    auth: authReducer
})