import $ from 'jQuery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: name 
})

export const addSkillServer = (data, profileId)=>(dispatch)=>{
	console.log(profileId, 'Did you get the profile ID?')
	$.ajax({
		url: '/http://localhost:8888/api/endorsements/' + profileId 
		type:'POST',
		data:data,
	})
	.done(data =>{
		dispatch(addSkill(data))
	})
	return Promise.resolve();
	}
}


// export const removeSkill =(id) =>{
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

