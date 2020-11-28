import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getQuestions, setPlayerName } from '../store/actions/index'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Home () {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    useEffect(() => {
        dispatch(getQuestions())
    }, [])

    function nameOnChange (event) {
        setName(event.target.value)
    }

    function startPlay () {
        if (name) {
            dispatch(setPlayerName(name))
            history.push('/quiz')
        } else {

        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4>Tebak</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>KataKota</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Siapa namamu?</p>                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input onChange={ (event) => nameOnChange(event) } value={ name } placeholder='nama saya adalah...' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={ () => startPlay() }>Mulai Permainan</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}