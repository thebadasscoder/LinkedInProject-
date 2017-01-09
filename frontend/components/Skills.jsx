import React from 'react';
import $ from 'jQuery';
import {Link} from 'react-router';
import SkillForm from './SkillForm.jsx';


const Skills = React.createClass({
	render(){
		return(
		<div>
		<center>
		<h1> SKILLS & ENDORSEMENTS </h1>
		<SkillForm/>
		</center>
		</div>
		)
	}
})

export default Skills;