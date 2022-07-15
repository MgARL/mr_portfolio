import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { motion } from 'framer-motion'

function ProjectModal({ currentProject, ...props }) {
  const { title, description, links, techs } = currentProject
  const renderTech = () => {
    return techs.map((tech, idx) => {
      return (
        <Badge key={idx} bg="info" className='me-2'>{tech}</Badge>
      )
    })
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='mb-2'>
          <Col xs={12}>
            {renderTech()}
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col xs={12}>
            <p>
              {description.frontEnd}
            </p>
            {description.backEnd && <hr />}
            {description.backEnd && <p>{description.backEnd}</p>}
          </Col>
        </Row>

        <Row xs={1} sm={3} className='text-center d-flex justify-content-center'>
          <Col className='my-2'>
            <motion.a className='btn btn-success' as='a' href={links.liveSite} rel="noreferrer" target="_blank" whileHover={{scale: 1.1}}>Live Site</motion.a>
          </Col>
          <Col className='my-2'>
            <motion.a className='btn btn-success' href={links.frontEndRepo} rel="noreferrer" target="_blank" whileHover={{scale: 1.1}}>{links.backEndRepo ? 'Front End' : 'GitHub'}</motion.a>
          </Col>
          {links.backEndRepo && <Col className='my-2'>
            <motion.a className='btn btn-success' as='a' href={links.backEndRepo} rel="noreferrer" target="_blank" whileHover={{scale: 1.1}}>Back End</motion.a>
          </Col>}
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ProjectModal