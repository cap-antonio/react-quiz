import React from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../Components/UI/Button/Button'
import { createControl, validate, validateForm } from '../../Form/FormFrameWork'
import Input from '../../Components/UI/Input/Input'
import { Select, QuestionList } from '../../Components/UI/Select/Select'
import { connect } from 'react-redux'
import { createQuizQuestion, finishCreateQuiz, resetQuizCreation } from '../../Store/Actions/QuizCreatorActionCreator'

function createOptionControl(number) {
    return createControl(
        {
            label: `Answer ${number}`,
            errorMessage: 'Field is required',
            id: number
        },
        { required: true })
}
function createFormControls() {
    return { 
        // quizName: createControl({
        //     label: 'Create a quiz name',
        //     errorMessage: 'Please enter a quiz name'
        // }, { required: true }),
        question: createControl({
            label: 'Type a question',
            errorMessage: 'Please type a question'
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}
class QuizCreator extends React.Component {
    state = {
        formControls: createFormControls(),
        isFormValid: false,
        correctAnswerId: 1
    }
    submitHandler = (event) => {
        event.preventDefault()
    }
    addQuestionHandler = (event) => {
        event.preventDefault()

        const { question, option1, option2, option3, option4 } = this.state.formControls

        const questionItem = {
            question: question.value,
            id: this.props.quiz.length + 1,
            correctAnswerId: this.state.correctAnswerId,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id }
            ]
        }
        this.props.createQuizQuestion(questionItem)
        this.setState({
            formControls: createFormControls(),
            isFormValid: false,
            correctAnswerId: 1
        })
    }
    createQuizHandler = (event) => {
        event.preventDefault()  
            this.setState({
                formControls: createFormControls(),
                isFormValid: false,
                correctAnswerId: 1
            })
        this.props.finishCreateQuiz()
    }
    onChangeHandler = (value, formItem) => {
        const formControls = { ...this.state.formControls }
        const form = { ...formControls[formItem] }
        form.value = value
        form.touched = true
        form.valid = validate(form.value, form.validation)
        formControls[formItem] = form
        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }
    selectChangeHandler = (event) => {
        this.setState({
            correctAnswerId: +event.target.value
        })
    }
    onEraseHandler = (event) => {
        event.preventDefault()
        this.props.resetQuizCreation()
        this.setState({
            formControls: createFormControls(),
            isFormValid: false,
            correctAnswerId: 1
        })
    }
    renderInputs() {
        return Object.keys(this.state.formControls).map(
            (inputItem, index) => {
                const control = this.state.formControls[inputItem]
                return (
                    <React.Fragment key={`Fragment${index}`}>
                        <Input key={inputItem + index}
                            value={control.value}
                            label={control.label}
                            valid={control.valid}
                            touched={control.touched}
                            errorMessage={control.errorMessage}
                            shouldValidate={!!control.validation}
                            onChange={(event) => this.onChangeHandler(event.target.value, inputItem)}
                        />
                        {index === 1 ? <hr /> : null}
                    </React.Fragment>
                )
            })
    }
    questionButtonLabel() {
        if (this.props.quiz.length === 0) {
            return "Create a Quiz"
        }
        if (this.props.quiz.length === 1) {
            return "Create a Quiz with 1 question"
        }
        return `Create a Quiz with ${this.state.quiz.length} questions`
    }
    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandle}>
                        {this.renderInputs()}
                        {}
                        <Select label="Choose a correct answer"
                            value={this.state.correctAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                { text: this.state.formControls.option1.value, value: 1 },
                                { text: this.state.formControls.option2.value, value: 2 },
                                { text: this.state.formControls.option3.value, value: 3 },
                                { text: this.state.formControls.option4.value, value: 4 }
                            ]} />
                        <Button type='primary' onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}>Add Question</Button>
                        <Button type='success' onClick={this.createQuizHandler}
                            disabled={this.props.quiz.length === 0}>{this.questionButtonLabel()}</Button>
                        {this.props.quiz.length === 0
                            ? null
                            : <>
                                <hr />
                                <QuestionList label="List of questions" value="text" options={this.props.quiz} />
                                <Button type='primary' onClick={this.onEraseHandler}>Erase questions</Button>
                            </>}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quiz: state.quizCreator.quiz
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
        finishCreateQuiz: () => dispatch(finishCreateQuiz()),
        resetQuizCreation: () => dispatch(resetQuizCreation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator)