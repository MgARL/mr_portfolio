import React from 'react'
// icons
import { FaLink, FaGithub, FaGithubSquare } from "react-icons/fa"

function HoverDiv({ liveSite, frontEndRepo, backEndRepo, hovering, setHovering, currentElement, index }) {
    // 'on-top d-flex align-items-center justify-content-evenly'
    index = Number(index)
    currentElement = Number(currentElement)
    return (
        <div className={!hovering ? 'd-none' : currentElement === index ? 'on-top d-flex align-items-center justify-content-evenly' : 'd-none'  }  onMouseLeave={() => setHovering(false)}>
            <a href={liveSite} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} ><FaLink style={{ fontSize: '2.1em' }} /></a>
            <a href={frontEndRepo} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} ><FaGithub style={{ fontSize: '1.5em' }} /><br/>Front End</a>
            {backEndRepo ? <a href={backEndRepo} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}><FaGithubSquare style={{ fontSize: '1.7em' }} /><br/>Back End</a> : null}
        </div>
    )
}

export default HoverDiv