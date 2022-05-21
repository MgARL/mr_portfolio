import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

import skillsArray from '../assets/techNSkills'

function MySkills() {
    return (
        <>
            <Row>
                <Col>
                    <h2>My Skills & Technologies</h2>
                </Col>
            </Row>
            <Container className='py-1 rounded'>
                <Row xs={2} md={3} xxl={4} className='mt-3 d-flex align-items-center'>
                    {skillsArray.map((skill, i) => {
                        const { name, logo } = skill
                        return (
                            <Col key={i}>
                                <Row className='mt-3'>
                                    {logo ? <Col xs={2} className='d-flex align-items-center'>
                                        {logo}
                                    </Col> : null}
                                    <Col xs={10} className='d-flex align-items-center'>
                                        <h5 className='mt-2'>{name}</h5>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </>
    )
}

export default MySkills