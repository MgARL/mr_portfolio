import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// assets
import projects from '../assets/projects'
import '../assets/portfolio.css'
import HoverDiv from '../subcomponents/HoverDiv'

function Portfolio() {
  const [hovering, setHovering] = useState(false)
  const [currentElement, setCurrentElement] = useState(null)

  return (
    <Container style={{ marginTop: '4.5rem' }}>
      <h1>Projects</h1>

      <Row className='my-5 g-4 text-center' xs={1} lg={2} xxl={3}>
        {projects.map((project, i) => {
          return (
            <Col key={i} className='d-flex justify-content-center'>
              <Card style={{ width: '35rem' }} >
                <div style={{position: 'relative'}}>
                  <Card.Img variant="top" id={i} src={project.img} onMouseEnter={(e) => {
                    setHovering(true)
                    setCurrentElement(e.target.id)
                  }} />
                  <HoverDiv liveSite={project.links.liveSite} frontEndRepo={project.links.frontEndRepo} backEndRepo={project.links.backEndRepo} hovering={hovering} setHovering={setHovering} currentElement={currentElement} index={i} />
                </div>
                <Card.Body className='mt-2' >
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    {project.description.frontEnd}
                  </Card.Text>
                  {project.description.backEnd ? <Card.Text>
                    {project.description.backEnd}
                  </Card.Text> : null}
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>

    </Container>
  )
}

export default Portfolio