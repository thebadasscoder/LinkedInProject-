import $ from 'jquery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: currentSkill
})

const addSkillServer = (data, profileId)=>(dispatch)=>{
	console.log(profileId, 'Did you get the profile ID?')
	$.ajax({
		url: '/api/endorsements/' + profileId,
		type:'POST',
		data:data
	})
	.done(data =>{
		console.log(data, 'DATA!')
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

