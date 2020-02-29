import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {

    function isInvalid({valid, touched, shouldValidate}) {
        return !valid && shouldValidate && touched
    } 

    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    const cls = [classes.Input]

    if(isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} autoComplete="off"
                onChange={props.onChange} />
            { isInvalid(props)
                ? <span>{props.errorMessage || "Incorrect login or password"}</span>
                : null }
        </div>
    )
}

export default Input