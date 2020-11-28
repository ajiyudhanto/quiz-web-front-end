import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCorrect, setQuestionsIndex } from '../store/actions/index'
import { Col } from 'react-bootstrap'

export default function Option (props) {
    const { choice, correctness } = props
    const history = useHistory()
    const dispatch = useDispatch()
    const questionsIndex = useSelector(state => state.questionsIndex)

    function scoring () {
        if (correctness === 'correct') {
            dispatch(addCorrect())
        }
        if (questionsIndex === 9) {
            history.push('/result')
        } else {
            dispatch(setQuestionsIndex(questionsIndex + 1))
        }
    }

    return (
        <>
            <Col xs={6}>
                <p onClick={ () => scoring() }>{ choice }</p>
            </Col>
        </>
    )
}