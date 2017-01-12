import $ from "jquery";

const getResume = currentResume => ({
  type: 'GET_EDUCATION',
  data: currentResume,
})

const getResumeServer = (profileID) => dispatch => {
  $.ajax({
    url: '/api/education/'+profileID,
    type: 'GET',

  })
  .done(data => {
    dispatch(getResume(data));
  })
  return Promise.resolve();
}


export default  {
    getResumeServer,
}