import React from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../Components/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchQuizes } from '../../Store/Actions/QuizActionCreators'

class QuizList extends React.Component {
    renderQuizes() {
        return (
            this.props.quizes.length === 0
                ? <h1>No created quizes</h1>
                : this.props.quizes.map((quiz) => {
                    return (
                        <li key={quiz.id}>
                            <NavLink
                                to={'/quiz/' + quiz.id} >{quiz.name}</NavLink>
                        </li>
                    )
                })
        )
    }
    componentDidMount() {
        this.props.fetchQuizes()
    }
    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Quiz List</h1>
                    {
                        this.props.loading && this.props.quizes.length !== 0
                            ? <Loader />
                            : <ul>
                                {this.renderQuizes()}
                            </ul>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)