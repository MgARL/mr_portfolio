import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

// Subcomps
import Info from '../subcomponents/Info'
import ContactForm from '../subcomponents/ContactForm'
import ContactMessage from '../subcomponents/ContactMessage'

function Contact() {
  const [messageSent, setMessageSent] = useState(false)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container style={{ height: '100vh', marginTop: '4rem' }} >
        <Row>
          <Col xs={12}>
            <h1 className='my-2'>Contact Information</h1>
          </Col>
        </Row>
        <Row className='mx-2 py-2 d-flex justify-content-center align-items-center'>
          {messageSent ? <ContactMessage /> : <ContactForm setMessageSent={setMessageSent} />}
          <Col xs={12} lg={6} className='mb-3 py-3'>
            <Info />
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default Contact