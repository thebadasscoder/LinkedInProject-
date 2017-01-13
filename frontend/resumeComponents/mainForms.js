import React from 'react'
import $ from 'jquery'
// import {addSchool} from './educationActions'
// import store from '../store/store'
import EducationForm from './educationForm'
// import ExperienceForm from './experienceForm'
// import LanguageForm from './languageForm'
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

            <EducationForm userId={this.props.userId} />

          </div>

         {/*<div>

            <ExperienceForm />
            
          </div>  

           <div>

            <LanguageForm />

          </div>

          <div>

            <VolunteerForm  />

          </div>*/}

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