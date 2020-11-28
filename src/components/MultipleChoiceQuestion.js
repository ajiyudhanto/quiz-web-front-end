import React from 'react'

export default function MultipleChoiceQuestion (props) {
    const { question } = props

    return (
        <>
            {
                JSON.stringify(question)
            }
        </>
    )
}