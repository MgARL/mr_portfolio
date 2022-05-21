import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

function Home() {
  const navigate = useNavigate()
  return (
  <motion.div initial={{opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Container style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-itemns-center' >
        <Row>
          <Col xs={12} className="text-center">
            <motion.h1 whileHover={{
              scale: 1.1,
            }}>Hello, I am Miguel Rodriguez</motion.h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <p>I am a passionate web developer with experience in the PERN stack (PostgreSQL, Express, React and Node). I use my skills to solve problems to bring value to clients and prospects. I am always learning about new and upcoming technologies that can help me bring  a better experience to the end user.</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center my-3'>
          <Col xs={12} lg={2} className='d-flex justify-content-center mb-2'>
          <motion.button className='btn btn-primary' onClick={()=> navigate('/contact')}
            whileHover={{
              scale: 1.1,
            }} >Contact Me</motion.button>
          </Col>
          <Col xs={12} lg={2} className='d-flex justify-content-center mb-2' >
            <motion.button className='btn btn-primary' onClick={()=> navigate('/portfolio')}
            whileHover={{
              scale: 1.1,
            }} >My Projects</motion.button>
          </Col>
        </Row>
      </Container>

    </motion.div>
  )
}

export default Home