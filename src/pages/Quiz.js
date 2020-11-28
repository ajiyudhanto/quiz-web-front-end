import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'
import ShortResponseQuestion from '../components/ShortResponseQuestion'
import PlayerStatus from '../components/PlayerStatus'
import { Container, Spinner } from 'react-bootstrap'

export default function Quiz () {
    const history = useHistory()
    const questions = useSelector(state => state.questions)
    const questionsIndex = useSelector(state => state.questionsIndex)
    const playerName = useSelector(state => state.playerName)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (!playerName || questions.length === 0) {
            history.push('/')
        }
        setTimeout(() => setLoading(false), 500)
        // eslint-disable-next-line
    }, [questionsIndex])

    if (loading) {
        return <Container className='loading-container'><Spinner animation="border" /></Container>
    }

    return (
        <>
            <Container>
                <PlayerStatus />
                {
                    questions.length !== 0 ? (questions[questionsIndex].type === 'SRQ' ?
                        <ShortResponseQuestion question={ questions[questionsIndex] } /> : 
                        <MultipleChoiceQuestion question={ questions[questionsIndex] } />) : ''
                }
            </Container>
        </>
    )
}