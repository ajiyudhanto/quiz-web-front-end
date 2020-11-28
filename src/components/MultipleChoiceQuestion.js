import React from 'react'
import Option from '../components/Option'
import { Row, Col, Image } from 'react-bootstrap'

export default function MultipleChoiceQuestion (props) {
    const { question } = props
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
                    <Image className='img-question' src={ question.img_url } />
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