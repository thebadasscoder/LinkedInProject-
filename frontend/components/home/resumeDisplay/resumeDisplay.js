import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Resume = (props)=>{
  return <div>HELLO WORLD </div>
}


const mapStateToProps = (state, ownprops)=>{

  // console.log(state);
  // to be implemented once we have a proper navbar
  // if(!state.user){
  //  ownprops.router.push("/login");
  // }
  return{
    userId: state.user.id,

   
  }
}


export default connect(mapStateToProps)(Resume);