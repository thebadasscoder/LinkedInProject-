import React from 'react';
import $ from 'jQuery';
import {addSkill} from '../actions/skills-action.js';

const SkillForm = React.createClass({
getInitialState(){
	return ({name: ''})
}, 
nameChange(e){
	this.setState({name:e.target.value})
}
createASkill(e){
e.preventDefault();
	$.ajax({
		url:'/api/endorsement/',
		type: 'POST',
		data: this.state
	})
},
render(){
	console.log(this.state.name, ':SkillName')
		return (
			<div>
			<center>

			<h2>CREATE A SKILL:</h2>
			<form onSubmit={this.createASkill}>
			<input type="text" placeholder="enter a skill" onChange={this.nameChange} value={this.state.name}></input>
			</form>
			</center>
			</div>
		)
	}
})

export default SkillForm;