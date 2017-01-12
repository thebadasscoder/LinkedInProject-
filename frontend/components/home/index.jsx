import React from 'react';

import Profile from './profile/Profile';
import ResumeDisplay from './resumeDisplay/resumeDisplay';
import Skills from './skills/Skills.jsx';

const Home = (profile)=>{
  return(
    <div>
      <Profile />
      <ResumeDisplay/>
      <Skills/>
    </div>)
}


export default Home