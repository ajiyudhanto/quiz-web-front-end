import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCorrect, switchIsAnswered } from '../store/actions/index'
import { Col } from 'react-bootstrap'
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

export default function Option (props) {
    const { choice, correctness } = props
    const dispatch = useDispatch()
    const isAnswered = useSelector(state => state.isAnswered)

    function scoring () {
        if (correctness === 'correct') {
            dispatch(addCorrect())
        }
        dispatch(switchIsAnswered())
    }

    return (
        <>
            <Col className='choice-col' xs={6}>
                {
                    isAnswered ? (
                        correctness === 'correct' ? 
                            <p className='text-center result correct'><IoCheckmarkSharp /> { choice }</p> :
                            <p className='text-center result false'><IoCloseSharp /> { choice }</p>
                    ) :
                        <p onClick={ () => scoring() } className='text-center choice'>{ choice }</p>
                }
            </Col>
        </>
    )
}