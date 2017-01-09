import $ from "jquery";

const getUser = currentUser => ({
  type: 'GET_USER',
  data: currentUser,
})

const getUserServer = (data) => dispatch => {
  $.ajax({
    url: '/api/profile',
    type: 'GET',
    data: data,
  })
  .done(data => {
    dispatch(getUser(data));
  })
  return Promise.resolve();
}

const postProfile = (userInfo) => dispatch => {
  // console.log(userInfo);
  $.ajax({
    url: '/api/profile/',
    type: 'POST',
    cache: false,
    contentType: false,
    processData: false,
    data: userInfo,
  })
  .done(data => {
    dispatch(getUser(data))
  })
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}

const validate = () => (dispatch) => {
  console.log("validate")
  $.ajax({
    url: '/api/user/validate/1',
    type: 'get',
  })
  .done(data=>{
    console.log(data);
    dispatch(getUser(data));
  })
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}

const signOut = dispatch => dispatch =>{
  dispatch(getUser(null))
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}

export default  {
    getUserServer,
    postProfile,
    validate,
    signOut,
}