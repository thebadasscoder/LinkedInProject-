import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import resume_actions from '../../../actions/resume-actions'



const EducationDisplay = (props) =>{
  if(props.userId && !props.education){
    props.getResumeServer(props.userId);
  }
  return(
    <div>
      {props.education.clubs}
    </div>
  )
}

const mapStateToProps = (state, ownprops)=>{
  // console.log(state);
  // to be implemented once we have a proper navbar
  // if(!state.user){
  //  ownprops.router.push("/login");
  // }  
  console.log(state)
  return{
    userId : state.user.id,
    education : state.education, 
  }
}
const mapDispatchToProps = dispatch => {
  return {
      getResumeServer: bindActionCreators(resume_actions.getResumeServer, dispatch),
  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(EducationDisplay)