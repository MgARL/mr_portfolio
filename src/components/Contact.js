import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NCSLogo from '../images/NC_State_logo.jpg'

function Contact() {
  return (
    <Container style={{ height: '100vh' }} className='d-flex flex-column justify-content-center'>
      {/* Tittle Contact Info */}
      <h1 className='mb-5'>Contact Information</h1>
      {/* Send Email form | Contact me */}
      <Row>
        <Col xs={12} sm={6}>
          <h3>Contact Me</h3>
          <Form>
            <Form.Group controlId='basicForm' className='mb-3'>
              <Form.Label>Your Name:</Form.Label>
              <Form.Control type='input' placeholder='Enter Your Name' />
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type='email' placeholder='Enter Your Email' />
              <Form.Label>Subject:</Form.Label>
              <Form.Control type='input' placeholder='Enter Subject' />
              <Form.Label>Your Message:</Form.Label>
              <Form.Control as='textarea' rows={3} placeholder='Enter Your Message' />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col xs={12}>
              <Card className='d-flex flex-row'>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                  <img alt='placeholderNAme' src={NCSLogo}/>
                </Card.Body>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                  <Card.Title>Phone</Card.Title>
                  <Card.Text>
                    <a href='tel:9195264896'>(919) 523-4896</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Col>
      </Row>
      {/* Other Container flex col */}
      {/* inside second container 3 Cards with Phone, Email and City of residence */}

    </Container>
  )
}

export default Contact