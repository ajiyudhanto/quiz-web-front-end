import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function PlayerStatus () {
    const playerName = useSelector(state => state.playerName)
    const correct = useSelector(state => state.correct)

    return (
        <>
            <div className='stat-title-container'>
                <p className='stat-text stat-title'>STATUS KAMU</p>
            </div>
            <div className='stat-container'>
                <Row>
                    <Col>
                        <p className='stat-text'>Nama: { playerName }</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='stat-text'>Skor: { correct } / 10</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}