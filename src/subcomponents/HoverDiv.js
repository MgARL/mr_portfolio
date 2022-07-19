import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// icons
// import { FaLink, FaGithub, FaGithubSquare } from "react-icons/fa"

function HoverDiv({ project, hovering, setHovering, currentElement, index }) {
    index = Number(index)
    currentElement = Number(currentElement)
    return (
        <div className={!hovering ? 'd-none' : currentElement === index ? 'on-top d-flex align-items-center justify-content-evenly' : 'd-none'  }  onMouseLeave={() => setHovering(false)}>
            <Row>
                <Col xs={12}>
                    <h3>{project.title}</h3>
                </Col>
                <Col>
                <strong>
                    Click for more info...
                </strong>
                </Col>
            </Row>
        </div>
    )
}

export default HoverDiv