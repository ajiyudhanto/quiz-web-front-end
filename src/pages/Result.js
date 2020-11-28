import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetCorrect, setPlayerName, setQuestionsIndex } from '../store/actions/index'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Result () {
    const history = useHistory()
    const dispatch = useDispatch()
    const playerName = useSelector(state => state.playerName)
    const score = useSelector(state => state.correct)

    function backToHomePage () {
        dispatch(resetCorrect())
        dispatch(setPlayerName(''))
        dispatch(setQuestionsIndex(0))
        history.push('/')
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Selamat {playerName}!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Kamu telah menyelesaikan tantangan ini!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Final score kamu adalah: { score } / 10</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={ () => backToHomePage() }>Kembali ke halaman home</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}