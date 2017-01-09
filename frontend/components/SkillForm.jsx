import React from 'react';
import $ from 'jQuery';
// import {addSkill} from '../actions/skills-action.js';

const SkillForm = React.createClass({
getInitialState(){
	return ({name: ''})
}, 
nameChange(e){
	this.setState({name:e.target.value})
},
createASkill(e){
e.preventDefault();
	$.ajax({
		url:'/api/endorsements/' + 2,
		type: 'POST',
		data: this.state
	})
},
render(){
		return (
			<div>
			<input type="text" placeholder="enter a skill" onChange={this.nameChange} value={this.state.name}></input>
			<button type="button" onClick={this.createASkill}>+</button>
			</div>
		)
	}
})

export default SkillForm;