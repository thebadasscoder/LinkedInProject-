import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter ,Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

/****ADD YOUR STORE HERE****/
import Store from './store/store'; 

/****ADD YOUR COMPONENTS HERE****/
import Resume from './resumeComponents/resumeContainer'

const App = withRouter((props)=>(
  <div>
    {props.children}
    {"<Navbar />"}
    <Resume/>
  </div>
))

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      {/*<Route path="/*" component={NotFound}/>*/}
    </Router>
  </Provider>,
  document.getElementById('root')
)


