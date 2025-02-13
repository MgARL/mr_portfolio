import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NCSLogo from '../images/NC_State_logo.jpg';
import pierpontLogo from '../images/logos/PierPontLogo.png';
import WGULogo from '../images/logos/western-governors-university-logo.png';

function Education() {

    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} >
                    <h2>Education</h2>
                </Col>
            </Row>
            <Row className='mb-3'>
                {/* WGU*/}
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title> 
                                <Row>
                                    <Col xs={12} xl={3}>
                                        <img src={WGULogo} alt="North Carolina State logo" height='80px' className='me-2' />
                                    </Col>
                                    <Col xs={12} xl={9} className='d-flex align-items-center'>
                                        Western Governors University
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Subtitle className="my-2 text-muted">Graduation: February 2025</Card.Subtitle>
                            <Card.Text>
                                Bachelor's of Science: Software Engineering
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Pierpont  */}
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title> 
                                <Row>
                                    <Col xs={12} xl={3}>
                                        <img src={pierpontLogo} alt="North Carolina State logo" height='80px' className='me-2' />
                                    </Col>
                                    <Col xs={12} xl={8} className='d-flex align-items-center'>
                                    pierpont community and technical college
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Subtitle className="my-2 text-muted">Graduation: December 2024</Card.Subtitle>
                            <Card.Text>
                                Associates of Applied Science: Board of Governors - Emphasis on Information Systems.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* NC STATE */}
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
                            <Card.Subtitle className="my-2 text-muted">Graduation: July 2022</Card.Subtitle>
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