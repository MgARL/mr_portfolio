import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// My Comps
import SocialMedia from './SocialMedia'

function Home() {
  return (
    <Container style={{height: '100vh'}} className='d-flex flex-column align-items-center justify-content-center'>
      <Row>
        <Col xs={12} className="text-center">
          <h1>Hello, I am Miguel Rodriguez</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <p>I am a passionate web developer that uses my skills to solve problems to bring value to clients and prospects. I am always learning about new and upcoming technologies that can help me bring  a better experience to the end user.</p>
        </Col>
      </Row>
      <SocialMedia />
    </Container>
  )
}

export default Home