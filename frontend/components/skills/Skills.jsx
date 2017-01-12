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
		url:'/api/endorsements/' + 5,
		type:'GET',
		success:((data)=>{
			data ? this.setState({allSkills:data}) : console.log('Error with getting the skills object')
		})
	})
},
makeEndorsement(e){
	e.preventDefault();
	var newEndorsement = parseInt(e.target.innerHTML)
	$.ajax({
		url:'/api/endorsements/' + 5 + '/' + 30,
		type:'PUT',
		data: {endorsement: newEndorsement}
	})
},
	render(){
		console.log(this.state.allSkills, ':Skills??')
		let SkillsDisplay = this.state.allSkills.map((value, index)=>{
		return <Link className="skills" key={index}><div className="skillTags"><ul key={index} className="skills"><li className="tag"key={index}>{value.name}<button type="button" className="btn" onClick={this.makeEndorsement} key={index}>{value.endorsement}</button></li></ul></div></Link>
		})
		return(
		<div> 
		
			<h1>Skills & Endorsements</h1>
			<SkillForm/>
			{SkillsDisplay}
		</div>
		)
	}
})

export default Skills;