import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Resume = (props)=>{
  return <div>resume </div>
}


const mapStateToProps = (state, ownprops)=>{
  // console.log(state);
  // to be implemented once we have a proper navbar
  // if(!state.user){
  //  ownprops.router.push("/login");
  // }
  return{
    user: state.user,
   
  }
}


export default connect(mapStateToProps)(Resume);