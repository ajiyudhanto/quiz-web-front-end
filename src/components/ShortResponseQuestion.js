import React from 'react'

export default function ShortResponseQuestion (props) {
    const { question } = props

    return (
        <>
            {
                JSON.stringify(question)
            }
        </>
    )
}