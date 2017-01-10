import {combineReducers} from 'redux';

/*****IMORT YOUR REDUCER HERE!!!*****/
import user from './user';
// import educationReducer from './educationReducer';


/*****ADD YOUR REDUCER TO THIS OBJECT REMEMBER WHAT YOU NAME IT HERE IS WHAT IT WILL BE NAMED IN THE STORE!!!*****/
const reducers = {
	user,
  // educationReducer
}


const reducer = combineReducers(reducers);

export default reducer;
