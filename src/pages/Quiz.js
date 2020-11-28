import React from 'react'
import { useSelector } from 'react-redux'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'
import ShortResponseQuestion from '../components/ShortResponseQuestion'

export default function Quiz () {
    const questions = useSelector(state => state.questions)
    const questionsIndex = useSelector(state => state.questionsIndex)

    return (
        <>
            <h1>QUIZ PAGE</h1>
            {
                JSON.stringify(questions)
            }
            {
                questions[questionsIndex].type === 'SRQ' ?
                    <ShortResponseQuestion question={ questions[questionsIndex] } /> : 
                    <MultipleChoiceQuestion question={ questions[questionsIndex] } />
            }
        </>
    )
}