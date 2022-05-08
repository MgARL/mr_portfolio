import React from 'react'
// icons
import { FaLink, FaGithub, FaGithubSquare } from "react-icons/fa"

function HoverDiv({ liveSite, frontEndRepo, backEndRepo, hovering, setHovering, currentElement, index }) {
    // 'on-top d-flex align-items-center justify-content-evenly'
    index = Number(index)
    currentElement = Number(currentElement)
    return (
        <div className={!hovering ? 'd-none' : currentElement === index ? 'on-top d-flex align-items-center justify-content-evenly' : 'd-none'  }  onMouseLeave={() => setHovering(false)}>
            <a href={liveSite} target='_blank' rel="noreferrer"><FaLink style={{ fontSize: '1.5em' }} /></a>
            <a href={frontEndRepo} target='_blank' rel="noreferrer" ><FaGithub style={{ fontSize: '1.5em' }} /></a>
            {backEndRepo ? <a href={backEndRepo} target='_blank' rel="noreferrer"><FaGithubSquare style={{ fontSize: '1.7em' }} /></a> : null}
        </div>
    )
}

export default HoverDiv