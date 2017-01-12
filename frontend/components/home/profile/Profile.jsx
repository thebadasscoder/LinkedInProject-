import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Profile = (props)=>(
	<div className="profileFlex">
		<div>
		<img src={props.user.image} width="200" height="200" className=" profileImage "/>
		</div>
		<div className="profilePadded" >
		<p className="" >name:</p>
		<p className="" >{props.user.name}</p>
		<p className="" >username:</p>
		<p className="" >{props.user.username}</p>
		<p className="" >email:</p>
		<p className="" >{props.user.email}</p>
		</div>
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
	}
}


export default connect(mapStateToProps)(Profile);