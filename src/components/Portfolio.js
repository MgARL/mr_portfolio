import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'


// assets
import projects from '../assets/projects'
import '../assets/portfolio.css'
import HoverDiv from '../subcomponents/HoverDiv'
import ProjectModal from '../subcomponents/ProjectModal'

function Portfolio() {
  const [hovering, setHovering] = useState(false)
  const [currentElement, setCurrentElement] = useState(null)
  const [currentProject, setCurrentProject] = useState(projects[0])
  const [modalShow, setModalShow] = useState(false)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container style={{ marginTop: '4.5rem' }}>
        <h1>Projects</h1>

        <Row className='my-5 g-4 text-center' xs={1} lg={2} xxl={3}>
          {projects.map((project, i) => {
            return (
              <Col key={i} className='d-flex justify-content-center align-items-center' onClick={() => {
                setCurrentProject(project)
                setModalShow(true)
              }}>
                <Card style={{ width: '35rem' }} >
                  <div style={{ position: 'relative' }}>
                    <Card.Img variant="top" id={i} src={project.img} onMouseEnter={(e) => {
                      setHovering(true)
                      setCurrentElement(e.target.id)
                    }} />
                    <HoverDiv project={project} hovering={hovering} setHovering={setHovering} currentElement={currentElement} index={i} />
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
        <ProjectModal show={modalShow} onHide={() => setModalShow(false)} currentProject={currentProject} />
      </Container>
    </motion.div>
  )
}

export default Portfolio