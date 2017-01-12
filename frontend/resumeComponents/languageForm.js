import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './ExperienceForm'

var LanguageForm = React.createClass({
 
  render(){
    return(
      <div >
      <div style = {{height:100}}>

      </div>
        <div id = "educationFormStyle">
          <div id = 'left'> 
          language

          </div>
            <form id = 'form' onSubmit = {this.props.handleSubmit}>
          
                <input onChange = {this.props.handleChange.bind(this, 'language')} className = 'educationInputStyle' type ="text" placeholder = 'Language '/>
                <input onChange = {this.props.handleChange.bind(this, 'proficiency')} className = 'educationInputStyle' type ="text" placeholder = 'Proficiency'/>
              
                <input value = 'Save' className = 'educationInputStyle' type = 'submit'/>
             
            </form>
          <div id = 'right'>
          Language
          </div>
       
        </div>
      </div>

    )
  }
})

export default LanguageForm