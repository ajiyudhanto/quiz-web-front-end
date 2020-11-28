import React from 'react'
import { useSelector } from 'react-redux'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'
import ShortResponseQuestion from '../components/ShortResponseQuestion'
import { Container } from 'react-bootstrap'

export default function Quiz () {
    const questions = useSelector(state => state.questions)
    const questionsIndex = useSelector(state => state.questionsIndex)

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