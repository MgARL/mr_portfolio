import React from 'react'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion'

// My Comps
import MySkills from '../subcomponents/MySkills'
import Education from '../subcomponents/Education'
import ProfessionalExp from '../subcomponents/ProfessionalExp'

function Skills() {
  return (
    <motion.div initial={{opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Container style={{ marginTop: '5rem' }}>
        {/* My Skills list of skills/technologies */}
        <MySkills />

        <Education />

        <ProfessionalExp />

      </Container>
    </motion.div>
  )
}

export default Skills