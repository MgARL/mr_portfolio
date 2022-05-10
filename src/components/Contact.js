import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Subcomps
import Info from '../subcomponents/Info'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://proxy-server-db.herokuapp.com/contact/send-form', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        })
      })

      let parsedRes = await response.json()
      console.log(parsedRes)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container style={{ height: '100vh', marginTop: '4rem' }} >
      <Row>
        <Col xs={12}>
          <h1 className='my-2'>Contact Information</h1>
        </Col>
      </Row>
      <Row className='mx-2 py-2'>
        <Col xs={12} lg={6} className='mb-3 py-3'>
          <h3>Contact Me</h3>
          <Form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}>
            <Form.Group controlId='basicForm' className='mb-3'>
              <Form.Label>Your Name:</Form.Label>
              <Form.Control type='input' placeholder='Enter Your Name' className='mb-2' minLength='4' maxLength='30' value={name} required onChange={(e) => setName(e.target.value)} />
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type='email' placeholder='Enter Your Email' className='mb-3' value={email} required onChange={(e) => setEmail(e.target.value)} />
              <Form.Label>Subject:</Form.Label>
              <Form.Control type='input' placeholder='Enter Subject' className='mb-3' minLength='4' maxLength='40' value={subject} required onChange={(e) => setSubject(e.target.value)} />
              <Form.Label>Your Message:</Form.Label>
              <Form.Control as='textarea' rows={3} placeholder='Enter Your Message' minLength='10' value={message} required onChange={(e) => setMessage(e.target.value)} />
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