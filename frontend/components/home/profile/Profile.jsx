import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Profile = (props)=>(
	<div>
		<img src={props.user.image} width="200" height="200"/>
		<p>{props.user.name}</p>
		<p>{props.user.username}</p>
		<p>{props.user.email}</p>
	</div>

)

const mapStateToProps = (state, ownprops)=>{
	// console.log(state);
	// to be implemented once we have a proper navbar
	// if(!state.user){
	// 	ownprops.router.push("/login");
	// }
	return{
		user: state.user,
		goTo: ownprops.router.push
	}
}


export default connect(mapStateToProps)(Profile);