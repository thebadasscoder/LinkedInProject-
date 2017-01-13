import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './ExperienceForm'

var VolunteerForm = React.createClass({
  getInitialState(){
    return {
      organization: '',
      role: '',
      date: '',
      description: ''
    }

  },

  handleChange(key,event){
    var data = event.target.value
    console.log(data)
    this.setState({[key]:data})
    // store.dispatch(addSchool(data))
    // console.log(this.state. + [key])

  }, 


  handleVolSubmit(event){
    // this.setState({image:''})
    event.preventDefault()
    let data = {organization: this.state.organization, role: this.state.role, date: this.state.date, description: this.state.description}
    // let data = {school: store.getState().school}

    console.log(data)
    $.ajax({
      url:'./api/volunteer',
      type: 'POST',
      data: data,
      success: function(data){
        // JSON.stringify(data)
        console.log(data)
      // this.print(data)

      }

    })
    .done(data=>{
    this.setState({
    organization: '',
    role: '',
    date: '',
    description: ''
  })

  })

  },

 
  render(){
    return(
      <div >
    
        <div id = "educationFormStyle">
          <div id = 'left'> 

          </div>
            <form id = 'form' onSubmit = {this.handleVolSubmit}>
          
                <input onChange = {this.handleChange.bind(this, 'organization')} className = 'educationInputStyle' type ="text" placeholder = 'Organization '/>
                <input onChange = {this.handleChange.bind(this, 'role')} className = 'educationInputStyle' type ="text" placeholder = 'Role'/>
                <input onChange = {this.handleChange.bind(this, 'date')} className = 'educationInputStyle' type ="text" placeholder = 'Date'/>
                <input onChange = {this.handleChange.bind(this, 'description')} className = 'educationInputStyle' type ="text" placeholder = 'Description'/>
              
                <input value = 'Save' className = 'educationInputStyle' type = 'submit'/>
             
            </form>
          <div id = 'right'>
          </div>
       
        </div>
      </div>

    )
  }
})

export default VolunteerForm