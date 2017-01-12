import {connect} from 'react-redux'
import React from 'react'
// import {addArtist} from '../actions'
import Education from './education.jsx'


const educationContainer = store =>({
  school:store.school
  // clubs:store.clubs,
  // society:store.society,
  // degree:store.degree,
  // image:store.image,
  // date:store.date

})

// const educationDispatch = dispatch =>({
//   // addArtist: () => dispatch(addArtist())
// })



export default connect(
educationContainer,
// educationDispatch


)(Education)