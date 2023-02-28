import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NCSLogo from '../images/NC_State_logo.jpg'

function Education() {

    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} >
                    <h2>Education</h2>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title> 
                                <Row>
                                    <Col xs={12} xl={3}>
                                        <img src={NCSLogo} alt="North Carolina State logo" height='80px' className='me-2' />
                                    </Col>
                                    <Col xs={12} xl={6} className='d-flex align-items-center'>
                                        North Carolina State University
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Subtitle className="my-2 text-muted">Sep 2021 - Jul 2022</Card.Subtitle>
                            <Card.Text>
                                Web Development Bootcamp
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Education