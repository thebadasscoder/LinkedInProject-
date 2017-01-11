import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import SkillForm from './SkillForm';

const Skills = React.createClass({
getInitialState(){
	return({allSkills: []})
},
componentDidMount(){
	$.ajax({
		url:'/api/endorsements/' + 4,
		type:'GET',
		success:((data)=>{
			data ? this.setState({allSkills:data}) : console.log('Error with the skills object')
		})
	})
},
// makeEndorsement(e){
// 	$.ajax({
// 		url:'/api/endorsements/' + 4,
// 		type:'GET',
// 		success((data)=>{
// 			console.log(data, 'DATA????????')
// 		})
// 	})
// },
	render(){
		console.log(this.state.allSkills, ':Skills??')
		let SkillsDisplay = this.state.allSkills.map((value, index)=>{
			console.log(value, 'THIS IS THE VALUE')
		return <Link className="allSkills" key={index}><ul key={index} className="skills"><li key={index}>{value.name}<button type="button" onClick={this.makeEndorsement}key={index}>{value.endorsement}</button></li></ul></Link>
		})
		return(
		<div>
			<h1> Skills</h1>
			<h3> ProfileId#: 2 </h3>
			<SkillForm/>
			{SkillsDisplay}
		</div>
		)
	}
})

export default Skills;