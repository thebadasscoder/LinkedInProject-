import React from 'react';
import $ from 'jQuery';
import {Link} from 'react-router';
import SkillForm from './SkillForm.jsx';


const Skills = React.createClass({
getInitialState(){
	return({allSkills: []})
},
componentDidMount(){
	$.ajax({
		url:'/api/endorsements/' + 2,
		type:'GET',
		success:((data)=>{
			data ? this.setState({allSkills:data}) : console.log('Error with the skills object')
		})
	})
},
	render(){
		console.log(this.state.allSkills, ':Skills??')
		let SkillsDisplay = this.state.allSkills.map((value, index)=>{
		return <Link className="allSkills" key={index}><div key={index} className="skills"><p key={index}>{value.name}</p></div></Link>
		})
		return(
		<div>
		
		<h1> Skills & Endorsements </h1>
		<h3> ProfileId#: 2 </h3>
		<SkillForm/>
		{SkillsDisplay}
	
		</div>
		)
	}
})

export default Skills;