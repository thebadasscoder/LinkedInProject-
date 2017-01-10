import $ from 'jQuery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: name 
})

const addSkillServer = (data)=>(dispatch)=>{
	console.log('I just created a skill!')
	$.ajax({
		url:
		type:'POST',
		data:data,
	})
	.done(data =>{
		dispatch(addSkill(data))
	})
	return Promise.resolve();
	}
}
export default addSkillServer;



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

