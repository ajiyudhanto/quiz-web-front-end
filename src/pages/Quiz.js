import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'
import ShortResponseQuestion from '../components/ShortResponseQuestion'
import { Container, Spinner } from 'react-bootstrap'

export default function Quiz () {
    const questions = useSelector(state => state.questions)
    const questionsIndex = useSelector(state => state.questionsIndex)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 500)
    }, [questionsIndex])

    if (loading) {
        return <Container className='loading-container'><Spinner animation="border" /></Container>
    }

    return (
        <>
            <Container>
                {
                    questions[questionsIndex].type === 'SRQ' ?
                        <ShortResponseQuestion question={ questions[questionsIndex] } /> : 
                        <MultipleChoiceQuestion question={ questions[questionsIndex] } />
                }
            </Container>
        </>
    )
}