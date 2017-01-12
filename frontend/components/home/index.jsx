import React from 'react';

import Profile from './profile/Profile';
import ResumeDisplay from './resumeDisplay/resumeDisplay';

const Home = (profile)=>{
  return(
    <div>
      <Profile />
      <ResumeDisplay/>
    </div>)
}


export default Home