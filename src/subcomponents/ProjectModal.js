import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProjectModal({currentProject, ...props}) {
    const {title, description, links } = currentProject
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
        <h4>Centered Modal</h4>
        <p>
          {description.frontEnd}
          </p>
          {description.backEnd ? <hr/> : null}
          {description.backEnd ? <p>{description.backEnd}</p> : null}
       
        <Row xs={1} sm={3} className='text-center'>
            <Col className='my-2'>
                <Button variant='success' as='a' href={links.liveSite} rel="noreferrer" target="_blank">Live Site</Button>
            </Col>
            <Col className='my-2'>
                <Button variant='success' as='a' href={links.frontEndRepo} rel="noreferrer" target="_blank">Front End</Button>
            </Col>
            {links.backEndRepo ?  <Col className='my-2'>
                <Button variant='success' as='a' href={links.backEndRepo} rel="noreferrer" target="_blank">Back End</Button>
            </Col> : null }
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal