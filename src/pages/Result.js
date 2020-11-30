import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Result () {
    const history = useHistory()
    const playerName = useSelector(state => state.playerName)
    const score = useSelector(state => state.correct)

    useEffect(() => {
        if (!playerName) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [])

    function backToHomePage () {
        history.push('/')
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center result-congrats'>Selamat <span className='gold-text'>{playerName}</span>!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center result-explanation'>Kamu telah menyelesaikan tantangan ini!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center result-explanation'>Final score kamu adalah:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center result-score'><span className='gold-text'>{ score }</span> / 10</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-center'>
                        <Button onClick={ () => backToHomePage() } variant='gold' className='back-home-btn'>Kembali Ke Halaman Home</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}