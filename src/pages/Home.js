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
        // eslint-disable-next-line
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
                    <Col xs={6}>
                        <h4 className='text-center sub-title'>Tebak</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className='text-center title'>KataKota</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center ask-name'>Halo, nama saya <span className='ask-name bentala'>Bentala</span>, kalau nama kamu siapa?</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-center'>
                        <input 
                            onChange={ (event) => nameOnChange(event) }
                            value={ name }
                            className='input-text'
                            placeholder='nama saya adalah...' 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-center'>
                        <Button onClick={ () => startPlay() } variant='gold'>Mulai Bermain!</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}