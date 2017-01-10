const skills = (state = false, action)=>{
	switch(action.type){
		case "ADD_SKILL":
		return action.data
	default: 
		return state
	}
}
export default skills;