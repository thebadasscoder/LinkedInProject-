import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './ExperienceForm'

var ExperienceForm = React.createClass({

  getInitialState(){
    return {

      company: '',
      title: '',
      location: '',
      period: '',
      edudescription:''

    }

  },
  handleChange(key,event){
      var data = event.target.value
      // console.log(data)
      this.setState({[key]:data})
      // store.dispatch(addSchool(data))
      console.log(this.state.company)

    }, 

  handleExpSubmit(event){
    // this.setState({image:''})
    event.preventDefault()
    let data = {company: this.state.company, title: this.state.title, location: this.state.location, period: this.state.period, description: this.state.description}
    // let data = {school: store.getState().school}

    console.log(data)
    $.ajax({
      url:'./api/experience',
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
    company: '',
    title: '',
    location: '',
    period: '',
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
            <form id = 'form' onSubmit = {this.handleExpSubmit}>
          
                <input value = {this.state.company} onChange = {this.handleChange.bind(this, 'company')} className = 'educationInputStyle' type ="text" placeholder = 'Company '/>
                <input value = {this.state.title} onChange = {this.handleChange.bind(this, 'title')} className = 'educationInputStyle' type ="text" placeholder = 'Title'/>
                <input value = {this.state.location} onChange = {this.handleChange.bind(this, 'location')} className = 'educationInputStyle' type ="text" placeholder = 'Location'/>
                <input value = {this.state.period} onChange = {this.handleChange.bind(this, 'period')} className = 'educationInputStyle' type ="text" placeholder = 'period'/>
                <input value = {this.state.description} onChange = {this.handleChange.bind(this, 'description')} className = 'educationInputStyle' type ="text" placeholder = 'Description'/>
                <input value = 'Save' className = 'educationInputStyle' type = 'submit'/>
             
            </form>
          <div id = 'right'>
          
          </div>
       
        </div>
      </div>

    )
  }
})

export default ExperienceForm