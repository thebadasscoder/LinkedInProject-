import {connect} from 'react-redux'
import React from 'react'
// import {addArtist} from '../actions'
import Resume from './resume.jsx'



const resumeContainer = store =>({
  // text:store.text
})

const resumeDispatch = dispatch =>({
  // addArtist: () => dispatch(addArtist())
})



export default connect(
resumeContainer,
resumeDispatch


)(Resume)