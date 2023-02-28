import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ASCLogo from '../images/ASC_Logo_Dark.png'

function ProfessionalExp() {
  return (
    <>
    <Row className='mt-5'>
        <Col xs={12} >
            <h2>Professional Experience</h2>
        </Col>
    </Row>
    <Row className='mb-3'>
        <Col xs={12} sm={4}>
            <Card>
                <Card.Body>
                    <Card.Title> <img src={ASCLogo} alt="ASC logo" height='80px' className='me-2' /> Archetype SC </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Sep 2021 - Currently</Card.Subtitle>
                    <Card.Text>
                        Developing and maintaining solutions for multitude of clients leveraging our knowledge in Microsoft ecosystem, included but not limited
                        to C#, Microsoft SQL Server, Azure DevOps, Azure Cloud Services, ASP.NET framework and others. Using tools like Visual Studio, Visual Studio Code,
                        SQL Server Management Studio (SSMS), etc.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</>
  )
}

export default ProfessionalExp