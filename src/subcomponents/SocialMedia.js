import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LineIcon from 'react-lineicons'

function SocialMedia() {
    return (
        <>
            <Row >
                <Col xs={4}>
                    <LineIcon name="linkedin-original" style={{ fontSize: "25px", textDecoration: 'none' }} tag="a" href="http://www.linkedin.com/in/miguel-rod-developer/" rel="noreferrer" target="_blank" />
                </Col>
                <Col xs={4}>
                    <LineIcon name="github-original" style={{ fontSize: "25px", textDecoration: 'none' }} tag="a" href="https://github.com/MgARL" rel="noreferrer" target="_blank" />
                </Col>
                <Col xs={4}>
                    <LineIcon name="twitter-original" style={{ fontSize: "25px", textDecoration: 'none' }} tag="a" href="https://twitter.com/mgarl22" rel="noreferrer" target="_blank" />
                </Col>
            </Row>
        </>
    )
}

export default SocialMedia