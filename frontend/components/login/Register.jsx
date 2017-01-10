import React from 'react';
import FormInput from 'react-file-input';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import user_actions from '../../actions/User-Actions';

const Register = React.createClass({
	getInitialState(){
		return{
			name: "",
			username: "",
			image: null,
			email: "",
			password: "",
			passwordConfermation: "",
		}
	},
	change(key, e){
		if(key === 'image'){
			this.setState({image: e.target.files[0]});
		}else{
			this.setState({[key]: e.target.value});
		}
	},
	submit(e){
		e.preventDefault();
		var formData = new FormData();
		formData.append('name', this.state.name);
		formData.append('username', this.state.username);
		formData.append('email', this.state.email);
		formData.append('password', this.state.password);
		if(this.state.image){
			formData.append('image', this.state.image, this.state.image.name);
		}
		this.props.register(formData);
	},
	render(){
		return(
			<div>
				<form onSubmit={this.submit}>
					<input type="text" value={this.state.name} placeholder="Name" onChange={this.change.bind(this,"name")}/>
					<br/>
					<input type="text" value={this.state.username} placeholder="username" onChange={this.change.bind(this,"username")}/>
					<br/>
					<input type="password" value={this.state.password} placeholder="password" onChange={this.change.bind(this,"password")}/>
					<br/>
					<input type="password" value={this.state.passwordConfermation} placeholder="confirm password" onChange={this.change.bind(this,"passwordConfermation")}/>
					<br/>
					<input type="email" value={this.state.email} placeholder="email@something.com" onChange={this.change.bind(this,"email")}/>
					<br/>
					<FormInput name="myImage" accept=".jpg" placeholder="MyProfilePic" onChange={this.change.bind(this, "image")}/>
					<br/>
					<input type="submit" value="Register"/>
				</form>
			</div>
			)
	}
})



const mapStateToProps = (state, ownprops)=>{
	return{}
}

function mapDispatchToProps(dispatch) {
	return {register: bindActionCreators(user_actions.postProfile, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);