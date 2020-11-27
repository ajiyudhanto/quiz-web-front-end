import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../store/actions/index'

export default function Home () {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions)

    useEffect(() => {
        dispatch(getQuestions())
    }, [])

    return (
        <>
            <h1>HOME PAGE</h1>
            {
                JSON.stringify(questions)
            }
        </>
    )
}