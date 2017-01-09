import {combineReducers} from 'redux';

/*****IMORT YOUR REDUCER HERE!!!*****/

import skills from './skills-reducer.js';
import user from './user.js';



/*****ADD YOUR REDUCER TO THIS OBJECT REMEMBER WHAT YOU NAME IT HERE IS WHAT IT WILL BE NAMED IN THE STORE!!!*****/
const reducers = {
	skills,
	user
}


const reducer = combineReducers(reducers);

export default reducer;
