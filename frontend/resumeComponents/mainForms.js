import React from 'react'
import $ from 'jquery'
// import {addSchool} from './educationActions'
// import store from '../store/store'
import EducationForm from './educationForm'
import ExperienceForm from './experienceForm'
import LanguageForm from './languageForm'
import VolunteerForm from './volunteerForm'
import {Link} from 'react-router'



var MainForms = React.createClass({

  // getInitialState () {
  //   return {school:'',degree:'',edudate:'',clubs:'', society:'',image:'', company:'', title:'', location:'', period: '', expdescription: '', language:'', proficiency:'', organization: '', role: '', voldate: '', voldescription:''}
  // },

  // handleChange(key,event){
  //   var data = event.target.value
  //   console.log(data)
  //   this.setState({[key]:data})
  //   // store.dispatch(addSchool(data))
  //   // console.log(this.state. + [key])

  // }, 


  // handleEduSubmit(event){
  //   // this.setState({image:''})
  //   event.preventDefault()
  //   let data = {
  //     school: this.state.school,
  //     degree: this.state.degree,
  //     clubs: this.state.clubs,
  //     society: this.state.society,
  //     image: this.state.image,
  //     // profileId: this.props.userId
  //     profileId: 1
  //   }
  //   // let data = {school: store.getState().school}

  //   console.log(data)
  //   $.ajax({
  //     url:'./api/education',
  //     type: 'POST',
  //     data: data,
  //     success: function(data){
  //       // JSON.stringify(data)
  //       console.log(data)
  //     // this.print(data)

  //     }

  //   })

  // },

  // handleLanSubmit(event){
  //   // this.setState({image:''})
  //   event.preventDefault()
  //   let data = {language: this.state.language, proficiency: this.state.proficiency}
  //   // let data = {school: store.getState().school}

  //   console.log(data)
  //   $.ajax({
  //     url:'./api/language',
  //     type: 'POST',
  //     data: data,
  //     success: function(data){
  //       // JSON.stringify(data)
  //       console.log(data)
  //     // this.print(data)

  //     }

  //   })

  // }, 

  // handleVolSubmit(event){
  //   // this.setState({image:''})
  //   event.preventDefault()
  //   let data = {organization: this.state.organization, role: this.state.role, voldate: this.state.voldate, voldescription: this.state.voldescription}
  //   // let data = {school: store.getState().school}

  //   console.log(data)
  //   $.ajax({
  //     url:'./api/volunteer',
  //     type: 'POST',
  //     data: data,
  //     success: function(data){
  //       // JSON.stringify(data)
  //       console.log(data)
  //     // this.print(data)

  //     }

  //   })

  // },

  // handleExpSubmit(event){
  //   // this.setState({image:''})
  //   event.preventDefault()
  //   let data = {company: this.state.company, title: this.state.title, location: this.state.location, period: this.state.period, expdescription: this.state.expdescription}
  //   // let data = {school: store.getState().school}

  //   console.log(data)
  //   $.ajax({
  //     url:'./api/experience',
  //     type: 'POST',
  //     data: data,
  //     success: function(data){
  //       // JSON.stringify(data)
  //       console.log(data)
  //     // this.print(data)

  //     }

  //   })

  // },

  render(){
    console.log(this.props)
    return(
         
      <div>
        <div style = {{height:100}}>

         <div id = "doneButtonPos">

            <button id = "doneButtonStyle"> 
              Done
            </button>
            
          </div>

        </div>
          
          <div >

            <EducationForm userId={this.props.userId} />

          </div>

         <div>

            <ExperienceForm />
            
          </div>

           <div>

            <LanguageForm />

          </div>

          <div>

            <VolunteerForm  />

          </div>

        <div style = {{height:100}}>

          
        </div>

          <div id = "doneButtonPos">

            <button id = 'doneButtonStyle'> Done</button> 

          </div>
      </div>
    )
  }
})

export default MainForms