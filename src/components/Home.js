import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// My Comps
import SocialMedia from '../subcomponents/SocialMedia'

function Home() {
  return (
    <Container style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-itemns-center' >
      <Row>
        <Col xs={12} className="text-center">
          <h1>Hello, I am Miguel Rodriguez</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <p>I am a passionate web developer with experience in the PERN stack (PostgreSQL, Express, React and Node). I use my skills to solve problems to bring value to clients and prospects. I am always learning about new and upcoming technologies that can help me bring  a better experience to the end user.</p>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center my-3'>
        <Col xs={12} lg={2} className='d-flex justify-content-center mb-2'>
          <Button variant="primary" as={Link} to="/contact">Contact Me</Button>
        </Col>
        <Col xs={12} lg={2} className='d-flex justify-content-center mb-2' >
          <Button variant="primary" as={Link} to="/portfolio" >My Projects</Button>
        </Col>
      </Row>
      <SocialMedia />
    </Container>
  )
}

export default Home