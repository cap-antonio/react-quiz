import React from 'react'
import classes from './Auth.module.css'
import Button from '../../Components/UI/Button/Button'
import Input from '../../Components/UI/Input/Input'
import { connect } from 'react-redux'
import { auth } from '../../Store/Actions/AuthActionCreator'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: "",
                type: "email",
                label: "Email",
                errorMessage: "Enter a valid email",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: "",
                type: "password",
                label: "Password",
                errorMessage: "Enter a password",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }
    validateControl(value, validation) {
        if(!validation) {
            return true
        }
        let isValid = true
        if(validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }
    onChangeHandler = (event, formItem) => {
        const formControls = {...this.state.formControls}
        const form = {...formControls[formItem]}
        form.value = event.target.value
        form.touched = true
        form.valid = this.validateControl(form.value, form.validation)
        formControls[formItem] = form
        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })
        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map(
            (formItem, index) => {
            const form = this.state.formControls[formItem]
            return (
                <Input key = {formItem + index}
                    value = {form.value}
                    type = {form.type} 
                    label = {form.label}
                    valid = {form.valid}
                    touched = {form.touched} 
                    errorMessage = {form.errorMessage} 
                    shouldValidate = {!!form.validation} 
                    onChange = {(event) => this.onChangeHandler(event, formItem)} 
                     />
            )
        })
    }
    
    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        )
    }
    registerHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )
    }
    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Sign up</h1>
                    <form onSubmit = {this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}
                        
                        <Button type = "success" onClick = {this.loginHandler}
                            disabled = {!this.state.isFormValid}
                            >Sign in</Button>
                        <Button type = "primary" onClick = {this.registerHandler}
                            disabled = {!this.state.isFormValid}
                            >Registration</Button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}
export default connect(null, mapDispatchToProps)(Auth)