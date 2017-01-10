import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import user_actions from '../../actions/User-Actions';


const Login = React.createClass({
	getInitialState(){
		return{username: 'joshuaf91', password: 'test1'}
	},
	change(key, e){
		this.setState({[key]: e.target.value})
	},
	submit(e){
		e.preventDefault();
		this.props.login(this.state)
		.then(()=>{
			this.props.router.push('/')
		})
	},
	redirect(e){
		this.props.router.push('/register');

	},
	render(){
		return(
			<div>
				<form onSubmit={this.submit}>
					<input type="text" placeholder="username" onChange={this.change.bind(this,"username")} value={this.state.username} /> 
					<br/>
					<input type="text" placeholder="password" onChange={this.change.bind(this,"password")} value={this.state.password} />
					<br/>
					<input type="submit" value="Login"/>
					<input type="reset" value="Register" onClick={this.redirect} />
				</form>
			</div>
		)
	}
})

const mapStateToProps = (state, ownprops)=>{
	return{}
}

function mapDispatchToProps(dispatch) {
	return {login: bindActionCreators(user_actions.getUserServer, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);