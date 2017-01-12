import $ from 'jquery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: currentSkill
})

const addSkillServer = (data, profileId)=>(dispatch)=>{
	console.log(profileId, 'Did you get the profile ID TO ADD?')
	$.ajax({
		url: '/api/endorsements/' + profileId,
		type:'POST',
		data:data
	})
	.done(data =>{
		dispatch(addSkill(data))
	})
	return Promise.resolve();
}

const makeEndorsement = (data, profileId, id)=>(dispatch)=>{
	$.ajax({
		url: '/api/endorsements/' + profileId + '/' + id,
		type: 'PUT',
		data: data
	})
	.done(data =>{
		dispatch(addSkill(data))
	})
	return Promise.resolve();
}

export default {addSkillServer, makeEndorsement};

//export const removeSkill =(id) =>{
// 	return {
// 		type:'REMOVE_SKILL',
// 		id
// 	}
// }


