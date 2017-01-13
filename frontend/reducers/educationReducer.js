const EDUCATION = (state = false, action) => {
  switch (action.type) {
    case "GET_EDUCATION":
      return action.data
    default:
      return state
  }
}

export default EDUCATION;