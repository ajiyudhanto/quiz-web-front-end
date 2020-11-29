import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { IoPersonSharp, IoCheckmarkDoneSharp } from "react-icons/io5";

export default function PlayerStatus () {
    const playerName = useSelector(state => state.playerName)
    const correct = useSelector(state => state.correct)
    const questionsIndex = useSelector(state => state.questionsIndex)

    return (
        <>
            <div className='stat-container'>
                <Row>
                    <Col>
                        <p className='stat-text black-text'><IoPersonSharp /> : <span className='gold-text'>{ playerName }</span></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='stat-text black-text'><IoCheckmarkDoneSharp /> : <span className='gold-text'>{ correct }</span> / { questionsIndex + 1 }</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}