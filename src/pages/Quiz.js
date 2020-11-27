import React from 'react'
import { useSelector } from 'react-redux'

export default function Quiz () {
    const questions = useSelector(state => state.questions)

    return (
        <>
            <h1>QUIZ PAGE</h1>
            {
                JSON.stringify(questions)
            }
        </>
    )
}