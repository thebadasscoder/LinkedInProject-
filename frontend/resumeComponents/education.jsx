import React from 'react'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
import EduForm from './educationForm'



const Education = ({text, addEducation})=>(


    <div id ='educationDiv'>
      <div id ='educationInput'>
        <EduForm />
      </div>
      <img id = 'resume' src = 'http://identity.unc.edu/files/2014/01/image29a.jpg'/> 
      <h1> Bryan</h1>
    </div>


)


export default Education