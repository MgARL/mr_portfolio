import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

function MySkills() {
    return (
        <>
            <Row>
                <Col>
                    <h2>My Skills & Technologies</h2>
                </Col>
            </Row>
            <Container className='bg-white py-1 rounded'>
                <Row xs={3} className='mt-3'>
                    <Col>
                        <h5>HTML5</h5>
                    </Col>
                    <Col>
                        <h5>CSS3</h5>
                    </Col>
                    <Col>
                        <h5>Javascript</h5>
                    </Col>
                    <Col>
                        <h5>ReactJS</h5>
                    </Col>
                    <Col>
                        <h5>NodeJS</h5>
                    </Col>
                    <Col>
                        <h5>ExpressJS</h5>
                    </Col>
                    <Col>
                        <h5>MongoDB</h5>
                    </Col>
                    <Col>
                        <h5>Mongoose ODM</h5>
                    </Col>
                    <Col>
                        <h5>PostgreSQL</h5>
                    </Col>
                    <Col>
                        <h5>Sequelize ODM</h5>
                    </Col>
                    <Col>
                        <h5>git | Github</h5>
                    </Col>
                    <Col>
                        <h5>Bootstraps</h5>
                    </Col>
                    <Col>
                        <h5>Problem Solver</h5>
                    </Col>
                    <Col>
                        <h5>Goal Oriented</h5>
                    </Col>
                    <Col>
                        <h5>Detail Oriented</h5>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default MySkills