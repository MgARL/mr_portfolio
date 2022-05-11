import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'

function ContactMessage() {
  return (
    <Col xs={12} lg={6} className='mb-3 py-3'>
        <Alert variant='info'>
            <Alert.Heading>Thank You for contacting me</Alert.Heading>
            <p>Your message was received, I will be in touch with you shortly</p>
        </Alert>
    </Col>
  )
}

export default ContactMessage