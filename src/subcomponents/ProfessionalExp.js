import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ASCLogo from '../images/ASC_Logo_Dark.png'
import OuiLogo from '../images/logos/Odysseys Logo.png'

function ProfessionalExp() {
  return (
    <>
    <Row className='mt-5'>
        <Col xs={12} >
            <h2>Professional Experience</h2>
        </Col>
    </Row>
    <Row className='mb-3'>
         {/* Odysseys */}
         <Col xs={12} sm={4} md={6}>
            <Card>
                <Card.Body>
                    <Card.Title> <img src={OuiLogo} alt="Odysseys logo" height='80px' className='me-2' /> Odysseys Unlimited </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                        Feb 2024 - Aug 2026 
                        <span className='text-end'>Developer</span>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                        Aug 2026 - Currently 
                        <span>Developer II</span>
                    </Card.Subtitle>
                    <Card.Text>
                        Responsibilities include:
                        <ul>
                            <li>Independently design, develop, and scale enterprise features for the in-house core Management System using C#, .NET 6+, and ASP.NET Core web APIs.</li>
                            <li>Architect and optimize complex SQL Server databases, stored procedures, and ORM frameworks (EF Core/Dapper) for maximum performance and scalability.</li>
                            <li>Troubleshoot complex, system-wide technical issues independently, while actively contributing to solution design and application architecture.</li>
                            <li>Elevate team standards by conducting rigorous code reviews focused on logic, edge cases, and regression prevention.</li>
                            <li>Translate complex business requirements into technical solutions, collaborating directly with stakeholders and managers to deliver high-impact software.</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        {/* Archetype */}
        <Col xs={12} sm={4} md={6}>
            <Card>
                <Card.Body>
                    <Card.Title> <img src={ASCLogo} alt="ASC logo" height='80px' className='me-2' /> Archetype SC </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                        Sep 2022 - Feb 2024
                        <span className='text-end'>Developer</span>
                    </Card.Subtitle>
                    <Card.Text>
                        Responsibilities include designing and sustaining solutions for a diverse clientele by harnessing our expertise within the Microsoft ecosystem, encompassing technologies such as C#, Microsoft SQL Server, Azure DevOps, Azure Cloud Services, and the ASP.NET framework, among others. 
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