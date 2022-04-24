import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NCSLogo from '../images/NC_State_logo.jpg'

function Contact() {
  const types = ['Phone', 'Address', 'Email']
  const infoArr = [<a href='tel:9195264896'>(919) 523-4896</a>, 'Raleigh, NC', 'mgarlcr@gmail.com']
  const renderCards = () => {
    return (
      types.map((type, i) => {
        return (
            <Row className='d-flex justify-content-center mb-2' key={i}>
              <Col xs={12} lg={10}>
                <Card className='d-flex flex-row'>
                  <Card.Body className='d-flex justify-content-center'>
                    <img alt='placeholderNAme' src={NCSLogo} />
                  </Card.Body>
                  <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <Card.Title>{type}</Card.Title>
                    <Card.Text>
                      {infoArr[i]}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        )
      })
    )
  }
  return (
    <Container style={{ height: '100vh' }} >
      <Row>
        <Col xs={12}>
          <h1 className='mb-5'>Contact Information</h1>
        </Col>
      </Row>
      <Row className='mx-2 py-2'>
        <Col xs={12} lg={6} className='mb-3 py-3'>
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
        <Col xs={12} lg={6} className='mb-3 py-3'>
            {renderCards()}
        </Col>
      </Row>
    </Container>
  )
}

export default Contact