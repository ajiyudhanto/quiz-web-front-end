import React, { useState, useEffect } from 'react'
import Option from '../components/Option'
import { useSelector } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap'
import NextButton from '../components/NextButton'

export default function MultipleChoiceQuestion (props) {
    const { question } = props
    const isAnswered = useSelector(state => state.isAnswered)
    const questionsIndex = useSelector(state => state.questionsIndex)
    const [shuffledOptions, setShuffledOptions] = useState([])

    useEffect(() => {
        const newOptions = getOptions()
        shuffle(newOptions)
        // eslint-disable-next-line
    }, [questionsIndex])
    
    function getOptions () {
        let newOptions = []
        newOptions.push([question.false_option_1, 'false'])
        newOptions.push([question.false_option_2, 'false'])
        newOptions.push([question.correct_option_1, 'correct'])
        if (question.type === 'MCSAQ') {
            newOptions.push([question.false_option_3, 'false'])
        } else {
            newOptions.push([question.correct_option_2, 'correct'])
        }
        return newOptions
    }

    function shuffle (newOptions) {
        let newShuffledOptions = []
        for (let i = 0; i < 4; i++) {
            const index = Math.floor(Math.random() * newOptions.length)
            const chosenOption = newOptions.splice(index, 1)
            newShuffledOptions.push(chosenOption[0])
        }
        setShuffledOptions(newShuffledOptions)
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
            <Row className='choice-row'>
               {
                    shuffledOptions.map((option, index) => {
                        return <Option choice={ option[0] } correctness={ option[1] } key={ index } />
                    })
               }
            </Row>
        </>
    )
}