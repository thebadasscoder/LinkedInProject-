import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Login from './Login.jsx';
import Register from './Register.jsx';

import user_actions from '../../actions/User-Actions';

const LoginPage = (props)=>{
	return(
		<div>
		<Login login={props.login} router={props.router}/>
		<Register register={props.register} login={props.login} router={props.router}/>
		</div>
		)
}

const mapStateToProps = (state, ownprops)=>{
	return{

	}
}

function mapDispatchToProps(dispatch) {
	return {
		login: bindActionCreators(user_actions.getUserServer, dispatch),
		register: bindActionCreators(user_actions.postProfile, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);