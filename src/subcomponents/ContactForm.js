import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { motion } from 'framer-motion'


function ContactForm({ setMessageSent }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [messageNotSent, setMessageNotSent] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://proxy-server-prod.up.railway.app/contact/send-form', {
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
            setLoading(false)
            if (response.ok) {
                setMessageSent(true)
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
                return
            }
            setMessageNotSent(true)
            setTimeout(() => setMessageNotSent(false), 3000)

        } catch (error) {
            setLoading(false)
            setMessageNotSent(true)
            setTimeout(() => setMessageNotSent(false), 3000)
        }
    }

    return (
        <Col xs={12} lg={6} className='mb-3 py-3'>
            <h3>Contact Me</h3>
            <Col xs={12} className='d-flex justify-content-center align-items-center'>
                {loading ? <Spinner animation="border" variant="primary" /> : messageNotSent ? <Alert variant='danger' className='w-100 text-center'>Error: Please Try Again </Alert> : null}
                
            </Col>
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
                <motion.button className='btn btn-primary' type='submit'
            whileHover={{
              scale: 1.1,
            }} >Submit</motion.button>
            </Form>
        </Col>
    )
}

export default ContactForm