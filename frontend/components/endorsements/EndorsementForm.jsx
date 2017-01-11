import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Endorsement_Actions from '../../actions/Endorsements-Actions';


const EndorseForm = React.createClass({
addEndorsement(){
	console.log('This is the addEndorsement function');
	this.props.getEndorsed(this.state , this.props.profileId, this.props.skillId)
},
	render(){
		return(
			<div>
			<button type="button" onClick={this.addEndorsement}>Endorse!!</button>
			</div>
		)
	}
})

const mapStateToProps = (state, ownprops)=>{
	return {profileId:2 , skillId: 9}
}

const mapDispatchToProps = (dispatch)=>{
	return {getEndorsed: bindActionCreators(Endorsement_Actions.addEndorsementServer, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(EndorseForm);