import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter ,Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

/****ADD YOUR STORE HERE****/
import Store from './store/store'; 

/**** ACTIONS WILL BE IMPORTED HERE ****/
// import  Actions from './actions/skills-action.js';
import User_Actions from './actions/User-Actions';
import Resume_Actions from './actions/resume-actions';

/****ADD YOUR COMPONENTS HERE****/
// import Resume from './resumeComponents/resumeContainer'
import Skills from './components/skills/Skills.jsx';
import Blog from './components/blog/Blog';
import NewBlog from './components/blog/NewBlog';
import LoginPage from './components/login/LoginPage';
import DetailBlog from './components/blog/DetailBlog';
import Resume from './resumeComponents/resume';
import Home from './components/home/index';





const App = withRouter((props)=>(
  <div className="mainComponent">
    {/*<Navbar />*/}
    {props.children}
  </div>
))

const validate = ()=>{
  Store.dispatch(User_Actions.validate());
}

// const enterHome = (nextState) =>{
//   console.log(nextState);
//   store.dispatch(Resume_Actions.getResumeServer())
// }

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={validate}>
        <IndexRoute component={LoginPage}/>
        <Route path="/endorsements" component={Skills}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/blog" component={Blog} />
        <Route path='/newblog' component={NewBlog} />
        <Route path="/blog/:id" component={DetailBlog} />
        <Route path="/profile" component={Home} />
      </Route> 
      {/*<Route path="/*" component={NotFound}/>*/}
    </Router>
  </Provider>,
  document.getElementById('root')
)


