import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import SkillForm from './SkillForm';
import Skills_Actions from  '../../../actions/Skill-Actions.js';


const Skills = React.createClass({
makeEndorsement(id, e){
	var newEndorsement = parseInt(e.target.innerHTML)
	$.ajax({
		url:'/api/endorsements/' + this.props.profileId + '/' + id,
		type:'PUT',
		data: {endorsement: newEndorsement}
	})
	.done(()=>{
		this.props.getSkills(this.props.profileId);
	})
},
	render(){
		if(this.props.profileId && !this.props.skills){
			this.props.getSkills(this.props.profileId);
		}

		let SkillsDisplay = this.props.skills ? this.props.skills.map((value, index)=>{
			return (
				<Link className="skills" key={index}>
					<div className="skillTags">
						<ul key={index} className="skills">
							<li className="tag"key={index}>
								{value.name}
								<button type="button" 
									className="btn" 
									onClick={this.makeEndorsement.bind(this, value.id)} 
									key={index}>
									{value.endorsement}
								</button>
							</li>
						</ul>
					</div>
				</Link>
			) 
		}): null;
		return(
		<div> 
			<h1>Skills & Endorsements</h1>
			<SkillForm/>
			{SkillsDisplay}
		</div>
		)
	}
})

const mapStateToProps = (state, ownprops)=>{
	console.log(state)
	return {
		profileId:state.user.id,
		skills: state.skills
	};
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getSkills: bindActionCreators(Skills_Actions.getSkills, dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills);

