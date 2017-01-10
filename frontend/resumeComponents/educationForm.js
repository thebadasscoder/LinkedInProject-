import React from 'react'
import $ from 'jquery'
import {addSchool} from './educationActions'
import store from '../store/store'


var EduForm = React.createClass({

  getInitialState () {
    return {school:'',degree:'',date:'',clubs:'', society:'',image:''}
  },

  handleChange(key,event){
    var data = event.target.value
    console.log(data)
    this.setState({[key]:data})
    // store.dispatch(addSchool(data))
    // console.log(this.state. + [key])

  }, 


  handleSubmit(event){
    // this.setState({image:''})
    event.preventDefault()
    let data = {school: this.state.School, degree: this.state.degree, date: this.state.date, clubs: this.state.clubs, society: this.state.society, image: this.state.image}
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

      }.bind(this)

    })

  },

  render(){
    return(
      <div id = 'educationMainDiv'>

        <form onSubmit = {this.handleSubmit}>
          <div id = "educationFormStyle">
            <input onChange = {this.handleChange.bind(this, 'school')} className = 'educationInputStyle' type ="text" placeholder = 'School '/>
            <input onChange = {this.handleChange.bind(this, 'degree')} className = 'educationInputStyle' type ="text" placeholder = 'Degree'/>
            <input onChange = {this.handleChange.bind(this, 'date')} className = 'educationInputStyle' type ="text" placeholder = 'Date'/>
            <input onChange = {this.handleChange.bind(this, 'clubs')} className = 'educationInputStyle' type ="text" placeholder = 'Clubs'/>
            <input onChange = {this.handleChange.bind(this, 'society')} className = 'educationInputStyle' type ="text" placeholder = 'Society'/>
            <input onChange = {this.handleChange.bind(this, 'image') }className = 'educationInputStyle' type ="text" placeholder = 'Image'/>
            <input className = 'educationInputStyle' type = 'submit'/>
          </div>
        </form>

        <div id='image'>
          <img id = 'resume' src = 'http://identity.unc.edu/files/2014/01/image29a.jpg'/> 

        </div>
          
          <div id = 'outputDiv'>
          
            <h3 style = {{width: 1000}} className = 'eduOutput'>{this.state.school}</h3>
            <h3 style = {{width: 1000}} className = 'eduOutput'>{this.state.degree}</h3>
            <h3 style = {{width: 1000}} className = 'eduOutput'>{this.state.date}</h3>
            <h3 style = {{width: 1000}} className = 'eduOutput'>{this.state.clubs}</h3>
            <h3 style = {{width: 1000}} className = 'eduOutput'>{this.state.society}</h3>
          </div>
      
      </div>
    )
  }
})

export default EduForm