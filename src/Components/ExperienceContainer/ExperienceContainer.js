import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
     <h1>Experience</h1> 
    <div className='experienceContainer__info'>      
        <ExperienceBox number='5+' title='Clients' />
        <ExperienceBox number='10+' title='Projects' style={{backgroundColor:'#f64c08'}} />
        <ExperienceBox number='2+' title='Experience' />
        <ExperienceBox number='6+' title='Clients' />
    </div>
    </Element>
  )
}

export default ExperienceContainer