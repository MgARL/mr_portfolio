import React from 'react'
import Container from 'react-bootstrap/Container'

// My Comps
import MySkills from '../subcomponents/MySkills'
import Courses from '../subcomponents/Courses'

function Skills() {
  return (
    <Container style={{marginTop: '5rem'}}>
      {/* My Skills list of skills/technologies */}
      <MySkills />

      {/* Courses List of courses Taken*/}
      <Courses/>

    </Container>
  )
}

export default Skills