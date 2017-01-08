export const addSkill(profileId, name){
	return {
		type:'ADD_SKILL',
		profileId,
		name
	}
}

export const removeSkill(id){
	return {
		type:'REMOVE_SKILL',
		id
	}
}

export const showSkill(profileId){
	return {
		type: 'SHOW_SKILL',
		profileId
	}
}

