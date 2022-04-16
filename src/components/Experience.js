import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Experience() {
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} >
                    <h2>Experience:</h2>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col xs={12} className='mb-3'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Jetpack Evader Front & Back End</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Jan 2022 - Feb 2022</Card.Subtitle>
                            <Card.Text>
                                Front end: Game created with HTML, CSS and JavaScript. Handles user interactions to manipulate the DOM. Works with an API to save and compare high scores against a global leaderboard. Focused on Desktop web browser, and created a message for mobile users to let them know this is available for Desktop only.
                                <br />
                                <br />
                                Back end: Back end server with two main endpoints one to retrieve data from database and other to store scores data to the database. It connects to Firebase Realtime Database and handles request from front-end application.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card >
                        <Card.Body>
                            <Card.Title>Zelda Anthology</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Mar 2022 - Apr 2022</Card.Subtitle>
                            <Card.Text>
                                Web application that retrieves data from API (Hyrule Compendium) and creates an user interface with the data retrieved using ReactJS Library.
                                <br />
                                <br />
                                Technologies used: <br />
                                HTML| CSS | JavaScript | ReactJS | React-Router-Dom | Bootstrap | Fetch API

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Experience