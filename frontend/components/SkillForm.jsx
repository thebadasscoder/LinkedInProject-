import React from 'react';
import $ from 'jQuery';
import {connect} from 'react-redux';

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
	.done((data)=>{
		this.props.goto('/')	
		// $.ajax({
		// 	url: '/api/endorsements/' + 2,
		// 	type:'GET',
		// 	success: ((data)=>{
		// 		data ? console.log('New Skill Created!') : console.log('Error with name');
		// 	})
		// })
	});
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
const mapToStateProps = (state, ownProps)=>{
	console.log(state, 'State???');
	console.log(ownProps, 'ownProps???');
	return {};
}
export default connect(mapToStateProps)(SkillForm);