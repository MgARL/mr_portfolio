import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Subcomps
import Info from '../subcomponents/Info'

function Contact() {
 
  return (
    <Container style={{ height: '100vh' }} >
      <Row>
        <Col xs={12}>
          <h1 className='my-2'>Contact Information</h1>
        </Col>
      </Row>
      <Row className='mx-2 py-2'>
        <Col xs={12} lg={6} className='mb-3 py-3'>
          <h3>Contact Me</h3>
          <Form>
            <Form.Group controlId='basicForm' className='mb-3'>
              <Form.Label>Your Name:</Form.Label>
              <Form.Control type='input' placeholder='Enter Your Name'  className='mb-2'/>
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type='email' placeholder='Enter Your Email' className='mb-3'/>
              <Form.Label>Subject:</Form.Label>
              <Form.Control type='input' placeholder='Enter Subject' className='mb-3'/>
              <Form.Label>Your Message:</Form.Label>
              <Form.Control as='textarea' rows={3} placeholder='Enter Your Message'/>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
        <Col xs={12} lg={6} className='mb-3 py-3'>
            <Info />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact