import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './ExperienceForm'

var ExperienceForm = React.createClass({
 
  render(){
    return(
      <div >
      <div style = {{height:100}}>

      </div>
        <div id = "educationFormStyle">
          <div id = 'left'> 
          experience

          </div>
            <form id = 'form' onSubmit = {this.props.handleSubmit}>
          
                <input onChange = {this.props.handleChange.bind(this, 'company')} className = 'educationInputStyle' type ="text" placeholder = 'Company '/>
                <input onChange = {this.props.handleChange.bind(this, 'title')} className = 'educationInputStyle' type ="text" placeholder = 'Title'/>
                <input onChange = {this.props.handleChange.bind(this, 'location')} className = 'educationInputStyle' type ="text" placeholder = 'Location'/>
                <input onChange = {this.props.handleChange.bind(this, 'period')} className = 'educationInputStyle' type ="text" placeholder = 'period'/>
                <input onChange = {this.props.handleChange.bind(this, 'description')} className = 'educationInputStyle' type ="text" placeholder = 'Description'/>
                <input value = 'Save' className = 'educationInputStyle' type = 'submit'/>
             
            </form>
          <div id = 'right'>
          experience
          </div>
       
        </div>
      </div>

    )
  }
})

export default ExperienceForm