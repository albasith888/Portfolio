import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css';

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Albasith</h1>
            <p>A Professional Web Developer</p>
            <a href='www.google.com'>
                <button className='topContent__downloadbutton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}> 
                <button className='topContent__workbuttonn'>My Work</button>
            </Link>

        </div>

    </div>
  )
}

export default TopContent