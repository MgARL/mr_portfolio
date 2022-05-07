import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NCSLogo from '../images/NC_State_logo.jpg'

function Courses() {

    const courseNoArr = ['SD01', 'SD02', 'SD03', 'SD04', 'SD05', 'SD06', 'SD07', 'SD08']
    const courseName = ['Introduction to Full Stack Web Development', 'HTML & Web Design', 'CSS & CSS Frameworks', 'User Experience & User Interface Design', 'Javascript & Front-End Development', 'Back-end Development & APIs', 'React & Redux', 'SQL & Data Modeling']

    const renderCards = () => {
        return courseName.map((course, id) => {
            return (
                <Col key={id} className='mb-3'>
                    <Card style={{ height: '100%' }}>
                        <Card.Header>{courseNoArr[id]}</Card.Header>
                        <Card.Body>
                            <Card.Title>{course}</Card.Title>
                            <Card.Text>
                                <img src={NCSLogo} alt="North Carolina State logo" height='30px' className='me-2' />
                                North Carolina State University
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} >
                    <h2>Education</h2>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={12}>
                    <Card className='no-bg' >
                        <Card.Body>
                            <Card.Title> <img src={NCSLogo} alt="North Carolina State logo" height='30px' className='me-2' /> North Carolina State University</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Sep 2021 - Jul 2022</Card.Subtitle>
                            <Card.Text>
                                Web Development Bootcamp
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h4>Courses:</h4>
            <Row xs={1} sm={2} lg={3}>
                {renderCards()}
            </Row>
        </>
    )
}

export default Courses