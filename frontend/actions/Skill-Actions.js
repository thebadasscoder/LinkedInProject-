import $ from 'jquery';

const addSkill = currentSkill =>({
	type: 'ADD_SKILL',
	data: currentSkill
})

const getSkills = (profileId)=>(dispatch)=>{
	console.log("IM IN getSkills")
	if(profileId){
		$.ajax({
			url:'/api/endorsements/' + profileId,
			type:'GET'		
		})
		.done(data =>{
			dispatch(addSkill(data));
		})
	}
}

const addSkillServer = (data, profileId)=>(dispatch)=>{
	$.ajax({
		url: '/api/endorsements/' + profileId,
		type:'POST',
		data: data
	})
	.done(data =>{
		getSkills(profileId);
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
		getSkills(profileId);
	})
	return Promise.resolve();
}

export default {
	addSkillServer,
	makeEndorsement,
	getSkills,
};

//export const removeSkill =(id) =>{
// 	return {
// 		type:'REMOVE_SKILL',
// 		id
// 	}
// }


