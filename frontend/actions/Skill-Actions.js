import $ from 'jquery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: name,
})

const addSkillServer = (data, profileId)=>(dispatch)=>{
	console.log(profileId, 'Did you get the profile ID?')
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

export default {addSkillServer};

//export const removeSkill =(id) =>{
// 	return {
// 		type:'REMOVE_SKILL',
// 		id
// 	}
// }

// export const displaySkill =(profileId)=>{
// 	return {
// 		type: 'DISPLAY_SKILL',
// 		profileId
// 	}
// }

