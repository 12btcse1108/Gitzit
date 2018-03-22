import React from 'react'
import ReactDOM from 'react-dom';
import SearchUser from './Components/SearchUser';
import UserRepository from './Components/UserRepository';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink,BrowserRouter } from 'react-router-dom';

export const history = createHistory();

const AppRouter = () => (
	  <BrowserRouter>
	      <Switch>
	        <Route path="/" component={SearchUser} exact={true} />
	        <Route path="/search" component={UserRepository} exact={true}/>
	      </Switch>
	  </BrowserRouter>
	);

ReactDOM.render(<AppRouter/>,document.getElementById('app'));
