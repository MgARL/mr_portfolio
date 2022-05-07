import React from 'react'
import Container from 'react-bootstrap/Container'

// My Comps
import MySkills from '../subcomponents/MySkills'
import Experience from '../subcomponents/Experience'
import Courses from '../subcomponents/Courses'

function Skills() {
  return (
    <Container>
      {/* My Skills list of skills/technologies */}
      <MySkills />

      {/* Experience list of projects done */}
      <Experience />


      {/* Courses List of courses Taken*/}
      <Courses/>

    </Container>
  )
}

export default Skills