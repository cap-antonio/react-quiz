import React from 'react'
import classes from './Select.module.css'

export const Select = (props) => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className = {classes.Select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select id={htmlFor}
                label={props.label}
                value={props.value}
                onChange={props.onChange}>
                    {props.options.map((option, index) => {
                        return (
                            <option value = {option.value}
                                key={option.value + index}>
                                {option.text}
                            </option>
                        )
                    })}
                </select>
        </div>
    )
}

export const QuestionList = (props) => {
    debugger
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className = {classes.Select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select id={htmlFor}
                label={props.label}
                value={props.value}
                >
                    {props.options.map((questionItem, index) => {
                        return (
                            <option key={questionItem.value + index}>
                                {`1. ${questionItem.question}`}
                            </option>
                        )
                    })}
                </select>
        </div>
    )
}
