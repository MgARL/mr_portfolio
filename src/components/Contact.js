import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiTwotonePhone, AiOutlineMail } from 'react-icons/ai'
import { BsFillPinMapFill } from 'react-icons/bs'

function Contact() {
 const infoArr = [{
   type: 'Phone',
   myInfo: <a href='tel:9195264896'>(919) 523-4896</a>,
   img: <AiTwotonePhone style={{fontSize: '2em'}}/>
 },{
   type: 'Address',
   myInfo: 'Raleigh, NC',
   img:  <BsFillPinMapFill style={{fontSize: '2em'}} />
 },{
  type: 'Email',
  myInfo: <a href='mailto:mgarlcr@gmail.com'>mgarlcr@gmail.com</a>,
  img: <AiOutlineMail  style={{fontSize: '2em'}}/>
 }]
  const renderCards = () => {
    return (
      infoArr.map((info, i) => {
        return (
            <Row className='d-flex justify-content-center mb-4' key={i}>
              <Col xs={12} lg={10}>
                <Card className='d-flex flex-row p-4'>
                  <Col xs={4} className='d-flex justify-content-center align-items-center'>
                    {info.img}
                  </Col>
                  <Col xs={8} className='d-flex flex-column justify-content-center align-items-center'>
                    <Card.Title>{info.type}</Card.Title>
                    <Card.Text>
                      {info.myInfo}
                    </Card.Text>
                  </Col>
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
            {renderCards()}
        </Col>
      </Row>
    </Container>
  )
}

export default Contact