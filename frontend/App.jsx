import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter ,Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

/****ADD YOUR STORE HERE****/
import Store from './store/store'; 
import User_Actions from './actions/User-Actions';


/****ADD YOUR COMPONENTS HERE****/
import Blog from './components/blog/Blog';
import NewBlog from './components/blog/NewBlog';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Profile from './components/home/profile/Profile';



const App = withRouter((props)=>(
  <div>
    {/*<Navbar />*/}
    {props.children}
  </div>
))

const validate = ()=>{
  Store.dispatch(User_Actions.validate());
}

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={validate}>
      <Route path="/blog" component={Blog} />
      <Route path='/newblog' component={NewBlog} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/profile" component={Profile} />
    </Route>
      {/*<Route path="/*" component={NotFound}/>*/}
    </Router>
  </Provider>,
  document.getElementById('root')
)


