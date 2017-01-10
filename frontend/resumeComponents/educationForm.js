import React from 'react'
import $ from 'jquery'
import {addSchool} from './educationActions'
import store from '../store/store'


var EduForm = React.createClass({

  getInitialState () {
    return {school:'',degree:'',date:'',clubs:'', society:'',image:''}
  },

  handleChangeSchool(event){
    var data = event.target.value
    console.log(data)
    this.setState({school:data})
    // store.dispatch(addSchool(data))
    console.log(this.state.school)

  }, 
  handleChangeDegree(event){
      var data = event.target.value
      // console.log(data)
      this.setState({degree:data})
      console.log(this.state.degree)

    }, 
  handleChangeDate(event){
      var data = event.target.value
      // console.log(data)
      this.setState({date:data})
      console.log(this.state.handleChangeDate)

    },
   handleChangeClubs(event){
      var data = event.target.value
      // console.log(data)
      this.setState({clubs:data})
      console.log(this.state.clubs)

    }, 
   handleChangeSociety(event){
      var data = event.target.value
      // console.log(data)
      this.setState({society:data})
      console.log(this.state.society)

      }, 

   handleChangeImage(event){
      var data = event.target.value
      // console.log(data)
      this.setState({image:data})
      console.log(this.state.image)

      }, 

  handleSubmit(event){
    // this.setState({image:''})
    event.preventDefault()
    let data = {school: this.state.school, degree: this.state.degree, date: this.state.date, clubs: this.state.clubs, society: this.state.society, image: this.state.image}
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
            <input onChange = {this.handleChangeSchool} className = 'educationInputStyle' type ="text" placeholder = 'School '/>
            <input onChange = {this.handleChangeDegree} className = 'educationInputStyle' type ="text" placeholder = 'Degree'/>
            <input onChange = {this.handleChangeDate} className = 'educationInputStyle' type ="text" placeholder = 'Date'/>
            <input onChange = {this.handleChangeClubs} className = 'educationInputStyle' type ="text" placeholder = 'Clubs'/>
            <input onChange = {this.handleChangeSociety} className = 'educationInputStyle' type ="text" placeholder = 'Society'/>
            <input onChange = {this.handleChangeImage} className = 'educationInputStyle' type ="text" placeholder = 'Image'/>
            <input className = 'educationInputStyle' type = 'submit'/>
          </div>
        </form>

        <div>
          <h1>{this.state.school}</h1>
          <h1>{this.state.school}</h1>
          <h1>{this.state.school}</h1>
          <h1>{this.state.school}</h1>
          <h1>{this.state.school}</h1>
          <h1>{this.state.school}</h1>
        </div>
      </div>
    )
  }
})

export default EduForm