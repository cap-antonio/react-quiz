import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = (props) => (
    <div className = { classes.ActiveQuiz }>
        <h1>Do you know?</h1>
        <p className = { classes.Question }>
            <span>
                <strong>1.</strong>&nbsp;
                { props.question }
            </span>
            <small>{ props.answerNumber } of { props.quizLength }</small>
        </p>
        <AnswerList
            answers = { props.answers }
            onAnswerClick = { props.onAnswerClick } 
            state = { props.state } />
    </div>
)

export default ActiveQuiz