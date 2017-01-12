var defaultState = {
  education: null

}


const Resume = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_EDUCATION":
      return Object.assign({}, state, {education: action.data})
    default:
      return state
  }
}
r
export default Resume;