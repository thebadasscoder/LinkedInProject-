import React from 'react'
import $ from 'jquery'
// import {addSchool} from './educationActions'
// import store from '../store/store'
import VolunteerForm from './volunteerForm'
import EducationForm from './educationForm'
import ExperienceForm from './experienceForm'
import LanguageForm from './languageForm'
import EducationDisplay from '../components/home/resumeDisplay/EducationDisplay'
import {Link} from 'react-router'



var MainForms = React.createClass({


  render(){
    console.log(this.props)
    return(
         
      <div>
        <div style = {{height:100}}>

         <div id = "doneButtonPos">

            <Link to = '/profile' ><button id = "doneButtonStyle"> 
              Done
            </button> </Link>
            
          </div>

        </div>
          
          <div >
            <center>
              <h2 > Education </h2>
            </center>
            <EducationForm userId={this.props.userId} />

          </div>

          <div>
            <div style = {{height:100}}>

            </div>


            <center>
              <h2> Experience </h2>
            </center>

            <ExperienceForm />
            
          </div>  

           <div>
             <div style = {{height:100}}>

             </div>

            <center>
              <h2> Language </h2>
            </center>

            <LanguageForm />

          </div>

          <div>
            <div style = {{height:100}}>

            </div>

            <center>
              <h2> Volunteer </h2>
            </center>

            <VolunteerForm  />

          </div>

        <div style = {{height:100}}>

          
        </div>

          <div id = "doneButtonPos">

            <Link to = '/profile' ><button id = "doneButtonStyle"> 
              Done
            </button> </Link> 

          </div>
      </div>
    )
  }
})

export default MainForms