import addSchool from '../resumeComponents/educationActions'

const defaultState = {
  school:'',
  degree:'',
  date:'',
  clubs:'', 
  society:'',
  image:''

}

const educationReducer = (oldstate = defaultState, action) => {
  switch(action.type){

    case 'addSchool':
      return Object.assign({}, oldstate, {school:action.data})
    default:
      oldstate
  }
}

export default educationReducer