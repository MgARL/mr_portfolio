import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

function MySkills() {
    const skillsArray = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS','ExpressJS', 'MongoDB', 'MongooseODM', 'PostgreSQL', 'SequelizeODM', 'git | Github', 'Bootstrap', 'Problem Solver', 'Goal Oriented', 'Detail Oriented']
    return (
        <>
            <Row>
                <Col>
                    <h2>My Skills & Technologies</h2>
                </Col>
            </Row>
            <Container className='bg-white py-1 rounded'>
                <Row xs={3} className='mt-3'>
                    {skillsArray.map((skill, i) =>{
                        return(
                            <Col key={i}>
                                <h5>{skill}</h5>
                            </Col>
                        )
                    })}                  
                </Row>

            </Container>
        </>
    )
}

export default MySkills