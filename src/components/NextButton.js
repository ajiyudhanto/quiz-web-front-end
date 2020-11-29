import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ImArrowRight } from "react-icons/im";

export default function NextButton () {

    return (
        <>
            <div className='next-container'>
                <Row>
                    <Col className='next-arrow-container'>
                        <ImArrowRight className='next-arrow' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='gold-text next-text'>Next Question</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}