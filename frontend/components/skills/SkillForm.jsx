import React from 'react'; 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'; 
import Skills_Actions from  '../../actions/Skill-Actions.js'

const SkillForm = React.createClass({
getInitialState(){
	return ({name: ''})
}, 
nameChange(e){
	this.setState({name:e.target.value})
},
createASkill(e){
e.preventDefault();
this.props.addSkills(this.state, this.props.profileId)
},
render(){
		return (
			<div>
			<input type="text" placeholder="enter a new skill" onChange={this.nameChange} value={this.state.name}></input>
			<button type="button" onClick={this.createASkill}>+</button>
			</div>
		)
	}
})
//This is creating a new state
const mapStateToProps = (state, ownprops)=>{
	return {profileId:state.user.id};
}
//This is what's dispatching the addSkill action
const mapDispatchToProps = (dispatch)=>{
	return {addSkills: bindActionCreators(Skills_Actions.addSkillServer, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);
