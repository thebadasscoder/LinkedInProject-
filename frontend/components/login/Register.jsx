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
		this.props.register(formData)
		.then(date=>{
			this.props.router.push('/blog')
		})
	},
	render(){
		return(
			<div className="registerFlex" >
				<h3 className="title"> Be great at what you do! </h3>
				<form onSubmit={this.submit} className="registerFlex">
				Name:<br/>
				<input type="text" value={this.state.name} className="name btn btn-default"placeholder="name" onChange={this.change.bind(this,"name")}/>
					<br/>
				Username:<br/>
					<input type="text" value={this.state.username}  className="user btn btn-default" placeholder="username" onChange={this.change.bind(this,"username")}/>
					<br/>
				Password:<br/>
					<input type="password" value={this.state.password} className="passwrd btn btn-default" placeholder="password" onChange={this.change.bind(this,"password")}/>
					<br/>
				Confirm password:<br/>
					<input type="password" value={this.state.passwordConfermation} className="confirmPswrd btn btn-default" placeholder="confirm password" onChange={this.change.bind(this,"passwordConfermation")}/>
					<br/>
				Email:<br/>
					<input type="email" value={this.state.email} className="email btn btn-default" placeholder="email address" onChange={this.change.bind(this,"email")}/>
					<br/>
				Upload Photo:<br/>
					<FormInput name="myImage" accept=".jpg" className="uploadphoto btn btn-default" placeholder="upload" onChange={this.change.bind(this, "image")}/>
					<br/>
					<input  className="joinNow btn btn-warning" type="submit" value="Join now"/>
				</form>
			</div>
			)
	}
})



const mapStateToProps = (state, ownprops)=>{
	return{
	}
}

function mapDispatchToProps(dispatch) {
	return {
		register: bindActionCreators(user_actions.postProfile, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);