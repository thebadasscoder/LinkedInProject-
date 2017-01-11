import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter ,Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

/****ADD YOUR STORE HERE****/
import Store from './store/store'; 


/****ADD YOUR COMPONENTS HERE****/

import Blog from './components/blog/Blog';
import NewBlog from './components/blog/NewBlog';
import Login from './components/login/Login';
import Register from './components/login/Register';
import DetailBlog from './components/blog/DetailBlog';



const App = withRouter((props)=>(
  <div>
    {/*<Navbar />*/}
    {props.children}
  </div>
))

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={DetailBlog} />
      <Route path='/newblog' component={NewBlog} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      </Route>
      {/*<Route path="/*" component={NotFound}/>*/}
    </Router>
  </Provider>,
  document.getElementById('root')
)


