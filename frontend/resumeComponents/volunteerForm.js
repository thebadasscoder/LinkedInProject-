import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './ExperienceForm'

var VolunteerForm = React.createClass({
 
  render(){
    return(
      <div >
      <div style = {{height:100}}>

      </div>
        <div id = "educationFormStyle">
          <div id = 'left'> 
          VolunteerForm

          </div>
            <form id = 'form' onSubmit = {this.props.handleSubmit}>
          
                <input onChange = {this.props.handleChange.bind(this, 'organization')} className = 'educationInputStyle' type ="text" placeholder = 'Organization '/>
                <input onChange = {this.props.handleChange.bind(this, 'role')} className = 'educationInputStyle' type ="text" placeholder = 'Role'/>
                <input onChange = {this.props.handleChange.bind(this, 'date')} className = 'educationInputStyle' type ="text" placeholder = 'Date'/>
                <input onChange = {this.props.handleChange.bind(this, 'description')} className = 'educationInputStyle' type ="text" placeholder = 'Description'/>
              
                <input value = 'Save' className = 'educationInputStyle' type = 'submit'/>
             
            </form>
          <div id = 'right'>
          VolunteerForm
          </div>
       
        </div>
      </div>

    )
  }
})

export default VolunteerForm