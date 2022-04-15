import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LineIcon from 'react-lineicons'
import MiguelImage from '../images/Miguel.png'
import logo from '../images/logo_no_bg.png'

// my Comps
import SocialMedia from './SocialMedia'

function MyNavBar({showNavBar, handleNavToggle,closeNavOnly, Link }) {
    return (
        <>
        <Navbar bg="light" className={showNavBar ? 'opening-animation opened-nav' : 'initial-nav closing-animation'}>
            <Container>
                    <Row className='d-flex'>
                        <Navbar.Brand as={Link} to="/" onClick={closeNavOnly}  className='border-bottom border-3 mb-2 d-flex justify-content-center'>
                            <img src={MiguelImage} alt="Miguel Rodriguez" height="150px" />
                        </Navbar.Brand>
                        <Nav className="flex-column text-center border-bottom border-3 mb-2 footer-fill" navbarScroll>
                            <Nav.Link as={Link} to="/" onClick={closeNavOnly}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/skills" onClick={closeNavOnly}>Skills</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" onClick={closeNavOnly}>Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={closeNavOnly}>Contact</Nav.Link>
                        </Nav>
                        <Col xs={12} className="text-center">
                            <Row className='mb-2'>
                                <Col xs={12}>
                                    <a href="http://www.linkedin.com/in/miguel-rod-developer/" rel="noreferrer" target="_blank">
                                        <img src={logo} alt="Miguel Rodriguez Logo" style={{ width: "150px" }} />
                                    </a>
                                </Col>
                            </Row>
                            <SocialMedia />
                        </Col>
                    </Row>
            </Container>
        </Navbar>
        <div className={showNavBar ? 'opened-toggle opening-animation-toggle' : 'initial-toggle closing-animation-toggle'} onClick={handleNavToggle}>
            <LineIcon name={showNavBar ? 'cross-circle' : 'menu'} style={{fontSize: "25px"}} />
        </div>
        </>
    )
}

export default MyNavBar