import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCorrect, switchIsAnswered } from '../store/actions/index'
import { Col } from 'react-bootstrap'

export default function Option (props) {
    const { choice, correctness } = props
    const dispatch = useDispatch()
    const isAnswered = useSelector(state => state.isAnswered)

    function scoring () {
        console.log(isAnswered)
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
                            <p className='text-center result correct'>{ choice }</p> :
                            <p className='text-center result false'>{ choice }</p>
                    ) :
                        <p onClick={ () => scoring() } className='text-center choice'>{ choice }</p>
                }
            </Col>
        </>
    )
}