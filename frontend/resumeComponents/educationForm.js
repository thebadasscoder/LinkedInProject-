import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './educationForm'

var EducationForm = React.createClass({
  getInitialState(){
    return {
      school: '',
      degree: '',
      clubs: '',
      society: ''

    }

  },
  handleChange(key,event){
      var data = event.target.value
      // console.log(data)
      this.setState({[key]:data})
      // store.dispatch(addSchool(data))
      console.log(this.state.school)

    }, 

  handleEduSubmit(event){
  // this.setState({image:''})
  event.preventDefault()
  let data = {
    school: this.state.school,
    degree: this.state.degree,
    clubs: this.state.clubs,
    society: this.state.society,
    image: this.state.image,
    profileId: this.props.userId
  }
  // let data = {school: store.getState().school}

  console.log(data)
  $.ajax({
    url:'./api/education',
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
    school: '',
    degree: '',
    clubs: '',
    society: ''
  })

  })

},


 
  render(){
    return(
      <div >
        <div id = "educationFormStyle">
          <div id = 'left'> 
          education

          </div>
            <form id = 'form' onSubmit = {this.handleEduSubmit}>
          
                <input value={this.state.school} onChange = {this.handleChange.bind(this, 'school')} className = 'educationInputStyle' type ="text" placeholder = 'School '/>
                <input value={this.state.degree} onChange = {this.handleChange.bind(this, 'degree')} className = 'educationInputStyle' type ="text" placeholder = 'Degree'/>
                <input value={this.state.clubs} onChange = {this.handleChange.bind(this, 'clubs')} className = 'educationInputStyle' type ="text" placeholder = 'Clubs'/>
                <input value={this.state.society} onChange = {this.handleChange.bind(this, 'society')} className = 'educationInputStyle' type ="text" placeholder = 'Society'/>
               
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