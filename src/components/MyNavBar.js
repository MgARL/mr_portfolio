import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MiguelImage from '../images/Miguel.png'
import logo from '../images/logo_no_bg.png'
import LineIcon from 'react-lineicons'

function MyNavBar() {
    return (
        <Navbar bg="light" expand="md" className='d-flex align-items-start'>
            <Container className='d-flex flex-column align-items-end'>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Row className='d-flex flex-column'>
                        <Navbar.Brand href="#" className='border-bottom border-3 mb-2'>
                            <img src={MiguelImage} alt="Miguel Rodriguez" height="200px" />
                        </Navbar.Brand>
                        <Nav className="flex-column text-center border-bottom border-3 mb-2 footer-fill" navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Skills</Nav.Link>
                            <Nav.Link href="#action2">Portfolio</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>
                        <Col xs={12} className="text-center">
                            <Row>
                                <Col xs={12}>
                                    <a href="http://www.linkedin.com/in/miguel-rod-developer/" rel="noreferrer" target="_blank">
                                        <img src={logo} alt="Miguel Rodriguez Logo" style={{ width: "200px" }} />
                                    </a>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={4}>
                                    <LineIcon name="linkedin-original" tag="a" href="http://www.linkedin.com/in/miguel-rod-developer/" rel="noreferrer" target="_blank"/>
                                </Col>
                                <Col xs={4}> 
                                <LineIcon name="github-original" tag="a" href="https://github.com/MgARL" rel="noreferrer" target="_blank"/>
                                </Col>
                                <Col xs={4}>
                                <LineIcon name="twitter-original" tag="a" href="https://twitter.com/mgarl22" rel="noreferrer" target="_blank"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavBar