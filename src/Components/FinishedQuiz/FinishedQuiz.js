import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'


const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
            <h1>Ok. That's all.</h1>
            {props.quiz.map((quizItem, index) => {
                const cls = [
                    props.results[quizItem.id] === "error" ? classes.error : classes.success
                ]
                return (
                    <ul key={index} className={cls.join(' ')}>{index + 1 + '. '}{quizItem.question}</ul>
                )
            })}
            <p>Correct answers: {successCount} from {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Retry</Button>
                <Link to='/'>
                    <Button type="success">To Quiz List</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz