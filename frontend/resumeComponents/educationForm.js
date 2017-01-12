import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './educationForm'

var EducationForm = React.createClass({
 
  render(){
    return(
      <div >
        <div id = "educationFormStyle">
          <div id = 'left'> 
          education

          </div>
            <form id = 'form' onSubmit = {this.props.handleSubmit}>
          
                <input onChange = {this.props.handleChange.bind(this, 'school')} className = 'educationInputStyle' type ="text" placeholder = 'School '/>
                <input onChange = {this.props.handleChange.bind(this, 'degree')} className = 'educationInputStyle' type ="text" placeholder = 'Degree'/>
                <input onChange = {this.props.handleChange.bind(this, 'edudate')} className = 'educationInputStyle' type ="text" placeholder = 'Date'/>
                <input onChange = {this.props.handleChange.bind(this, 'clubs')} className = 'educationInputStyle' type ="text" placeholder = 'Clubs'/>
                <input onChange = {this.props.handleChange.bind(this, 'society')} className = 'educationInputStyle' type ="text" placeholder = 'Society'/>
                <input onChange = {this.props.handleChange.bind(this, 'image') }className = 'educationInputStyle' type ="text" placeholder = 'Image'/>
                <input value = 'Save' className = 'educationInputStyle' type = 'submit'/>
             
            </form>
          <div id = 'right'>
          education
          </div>
       
        </div>
      </div>

    )
  }
})

export default EducationForm