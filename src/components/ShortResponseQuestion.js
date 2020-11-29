import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCorrect, switchIsAnswered } from '../store/actions/index'
import { Row, Col, Image, Button } from 'react-bootstrap'
import NextButton from '../components/NextButton'
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

export default function ShortResponseQuestion (props) {
    const { question } = props
    const dispatch = useDispatch()
    const isAnswered = useSelector(state => state.isAnswered)
    const [answer, setAnswer] = useState('')
    const [submitted, setSubmitted] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)

    function answerOnChange (event) {
        setAnswer(event.target.value)
    }

    function submit () {
        const inputAnswer = answer.toLowerCase()
        const correctAnswer = question.answer.toLowerCase()
        if (inputAnswer === correctAnswer) {
            dispatch(addCorrect())
            setIsCorrect(true)
        }
        setSubmitted(answer)
        dispatch(switchIsAnswered())
        setAnswer('')
    }

    return (
        <>
            <Row>
                <Col className='col-center'>
                    <Image 
                        className={ isAnswered ? 'img-question img-darken' : 'img-question' } 
                        src={ question.img_url }
                    />
                    {
                        isAnswered ? <NextButton /> : ''
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-center question'>{ question.question }</p>
                </Col>
            </Row>
            <Row>
                <Col className='col-center'>
                    {
                        isAnswered ? 
                            (
                                isCorrect ?
                                    <label className='icon icon-correct'><IoCheckmarkSharp /></label> :
                                    <label className='icon icon-false'><IoCloseSharp /></label>
                            ) : ''
                    }
                    <input 
                        onChange={ (event) => answerOnChange(event) }
                        value={ isAnswered ? submitted : answer } 
                        className={ isAnswered ? (isCorrect ? 'input-text answer input-correct' : 'input-text answer input-false') : 'input-text answer'}
                        placeholder='Jawaban saya adalah...'
                        readOnly={ isAnswered ? true : false }
                    />
                </Col>
            </Row>
            <Row>
                <Col className='col-center'>
                    {
                        isAnswered ?
                            <p className='text-center question'>Jawaban : <span className='gold-text'>{ question.answer }</span></p> :
                            <Button onClick={ () => submit() } variant='gold'>Submit</Button>
                    }
                </Col>
            </Row>
        </>
    )
}