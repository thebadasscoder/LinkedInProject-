import React from 'react'
import $ from 'jquery'
// import addArtist from '../actions'
import css from '../assets/css/resume.css'
// import EduForm from './ExperienceForm'

var LanguageForm = React.createClass({
  getInitialState (){
    return {
      language: '',
      proficiency: ''
    }
  },


  handleChange(key,event){
    var data = event.target.value
    console.log(data)
    this.setState({[key]:data})
    // store.dispatch(addSchool(data))
    // console.log(this.state. + [key])

  }, 

  handleLanSubmit(event){
    // this.setState({image:''})
    event.preventDefault()
    let data = {language: this.state.language, proficiency: this.state.proficiency}
    // let data = {school: store.getState().school}

    console.log(data)
    $.ajax({
      url:'./api/language',
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
    language: '',
    proficiency: ''
    })

    })

  }, 

 
  render(){
    return(
      <div >
      <div style = {{height:100}}>

      </div>
        <div id = "educationFormStyle">
          <div id = 'left'> 
          language

          </div>
            <form id = 'form' onSubmit = {this.handleLanSubmit}>
          
                <input value = {this.state.language} onChange = {this.handleChange.bind(this, 'language')} className = 'educationInputStyle' type ="text" placeholder = 'Language '/>
                <input value = {this.state.proficiency} onChange = {this.handleChange.bind(this, 'proficiency')} className = 'educationInputStyle' type ="text" placeholder = 'Proficiency'/>
              
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