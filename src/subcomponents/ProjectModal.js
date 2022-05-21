import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

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
            {description.backEnd ? <hr /> : null}
            {description.backEnd ? <p>{description.backEnd}</p> : null}
          </Col>
        </Row>

        <Row xs={1} sm={3} className='text-center d-flex justify-content-center'>
          <Col className='my-2'>
            <Button variant='success' as='a' href={links.liveSite} rel="noreferrer" target="_blank">Live Site</Button>
          </Col>
          <Col className='my-2'>
            <Button variant='success' as='a' href={links.frontEndRepo} rel="noreferrer" target="_blank">Front End</Button>
          </Col>
          {links.backEndRepo ? <Col className='my-2'>
            <Button variant='success' as='a' href={links.backEndRepo} rel="noreferrer" target="_blank">Back End</Button>
          </Col> : null}
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ProjectModal