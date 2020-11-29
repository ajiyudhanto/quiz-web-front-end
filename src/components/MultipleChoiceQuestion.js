import React from 'react'
import Option from '../components/Option'
import { useSelector } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap'
import NextButton from '../components/NextButton'

export default function MultipleChoiceQuestion (props) {
    const { question } = props
    const isAnswered = useSelector(state => state.isAnswered)

    let options = []
    options.push([question.false_option_1, 'false'])
    options.push([question.false_option_2, 'false'])
    options.push([question.correct_option_1, 'correct'])
    if (question.type === 'MCSAQ') {
        options.push([question.false_option_3, 'false'])
    } else {
        options.push([question.correct_option_2, 'correct'])
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
                   options.map((option, index) => {
                       return <Option choice={ option[0] } correctness={ option[1] } key={ index } />
                   })
               }
            </Row>
        </>
    )
}