// import React from 'react'
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import resume_actions from '../../../actions/resume-actions'



// const ExperienceDisplay = (props) =>{
//   if(props.userId && !props.experience){
//     props.getResumeExperience(props.userId);
//   }
//           // <div>
//           //   <h3 className ='experienceDisplayFields'>experience: {props.experience.title }</h3>
//           // </div>

//           // <div>
//           //   <h3 className ='experienceDisplayFields'> Degree: {props.experience.location }</h3>
//           // </div>

//           // <div>
//           //   <h3 className ='experienceDisplayFields'> Clubs: {props.experience.period }</h3>
//           // </div>

//           // <div>
//           //   <h3 className ='experienceDisplayFields'> Society: {props.experience.description }</h3>
//           // </div>
//   return(
//     <div>


//       <div id = 'experienceDisplay'>
//           <h3>  style = {{width: 220 ,height: 220, marginLeft: 40}} 
//             {props.experience.company}
//           </h3>
//         <div id ='experienceDisplayFields'>


//         </div>
//       </div>

//     </div>
//   )
// }

// const mapStateToProps = (state, ownprops)=>{
//   // console.log(state);
//   // to be implemented once we have a proper navbar
//   // if(!state.user){
//   //  ownprops.router.push("/login");
//   // }  
//   console.log(state)
//   return{
//     company : state.company,
//     title : state.title, 
//     location : state.location, 
//     period : state.period, 
//     description : state.description,
//     userId : state.user.id,
//     // education : state.education,
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//       getResumeExperience: bindActionCreators(resume_actions.getResumeExperience, dispatch),
//   }
// }




// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(ExperienceDisplay)