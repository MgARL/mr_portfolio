import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
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

        <Row className='my-5 g-4 text-center' xs={1} md={3} lg={4}>
          {projects.map((project, i) => {
            return (
              <motion.div key={i} className='d-flex justify-content-center align-items-center' onClick={() => {
                setCurrentProject(project)
                setModalShow(true)
              }}
              whileHover={{
                scale: 1.1
              }}>
                <Card style={{ width: '20rem' }} >
                  <div style={{ position: 'relative' }}>
                    <Card.Img variant="top" id={i} src={project.img} onMouseEnter={(e) => {
                      setHovering(true)
                      setCurrentElement(e.target.id)
                    }} />
                    <HoverDiv project={project} hovering={hovering} setHovering={setHovering} currentElement={currentElement} index={i} />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </Row>
        <ProjectModal show={modalShow} onHide={() => setModalShow(false)} currentProject={currentProject} />
      </Container>
    </motion.div>
  )
}

export default Portfolio