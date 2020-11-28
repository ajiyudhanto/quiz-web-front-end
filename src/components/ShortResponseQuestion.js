import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCorrect, setQuestionsIndex } from '../store/actions/index'
import { Row, Col, Image, Button } from 'react-bootstrap'

export default function ShortResponseQuestion (props) {
    const { question } = props
    const dispatch = useDispatch()
    const history = useHistory()
    const questionsIndex = useSelector(state => state.questionsIndex)
    const [answer, setAnswer] = useState('')

    function answerOnChange (event) {
        setAnswer(event.target.value)
    }

    function submit () {
        const inputAnswer = answer.toLowerCase()
        const correctAnswer = question.answer.toLowerCase()
        if (inputAnswer === correctAnswer) {
            dispatch(addCorrect())
        }
        setAnswer('')
        if (questionsIndex === 9) {
            history.push('/result')
        } else {
            dispatch(setQuestionsIndex(questionsIndex + 1))
        }
    }

    return (
        <>
            <Row>
                <Col className='col-center'>
                    <Image className='img-question' src={ question.img_url } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-center question'>{ question.question }</p>
                </Col>
            </Row>
            <Row>
                <Col className='col-center'>
                    <input 
                        onChange={ (event) => answerOnChange(event) }
                        value={ answer } 
                        className='input-text answer'  
                        placeholder='Jawaban saya adalah...'    
                    />
                </Col>
            </Row>
            <Row>
                <Col className='col-center'>
                    <Button onClick={ () => submit() } variant='gold'>Submit</Button>
                </Col>
            </Row>
        </>
    )
}