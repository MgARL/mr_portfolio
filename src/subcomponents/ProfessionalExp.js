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
                    <Card.Subtitle className="mb-2 text-muted">Sep 2022 - Currently</Card.Subtitle>
                    <Card.Text>
                        Designing and sustaining solutions for a diverse clientele by harnessing our expertise within the Microsoft ecosystem, encompassing technologies such as C#, Microsoft SQL Server, Azure DevOps, Azure Cloud Services, and the ASP.NET framework, among others. 
                        Utilizing advanced tools including Visual Studio, Visual Studio Code, and SQL Server Management Studio (SSMS), and more.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</>
  )
}

export default ProfessionalExp