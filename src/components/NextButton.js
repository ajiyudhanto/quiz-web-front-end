import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setQuestionsIndex, switchIsAnswered } from '../store/actions/index'
import { Row, Col } from 'react-bootstrap'
import { ImArrowRight } from "react-icons/im";

export default function NextButton () {
    const dispatch = useDispatch()
    const history = useHistory()
    const questionsIndex = useSelector(state => state.questionsIndex)

    function next () {
        dispatch(switchIsAnswered())
        if (questionsIndex === 9) {
            history.push('/result')
        } else {
            dispatch(setQuestionsIndex(questionsIndex + 1))
        }
    }

    return (
        <>
            <div className='next-container'>
                <Row>
                    <Col className='next-arrow-container'>
                        <ImArrowRight onClick={ () => next() } className='next-arrow' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p onClick={ () => next() } className='gold-text next-text'>Pertanyaan Selanjutnya</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}