import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// assets
import projects from '../assets/projects'

function Portfolio() {
  return (
    <Container style={{ marginTop: '4.5rem' }}>
      <h1>Projects</h1>

      <Row className='mt-5 g-4 text-center' xs={1} lg={2} xxl={3}>
        {projects.map((project, i) => {
          return (
            <Col key={i} className='d-flex justify-content-center'>
              <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
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