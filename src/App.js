import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import 'firebaseui/dist/firebaseui.css';
import { AuthProvider } from './Firebase/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import NavBar from './Navbar';
import Dashboard from './Dashboard/Dashboard';
import Support from './Dashboard/Support';
function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route exact path="/dashboard" component={Dashboard} />
						<Route path="/signin" exact component={SignIn} />
						<Route exact path="/support" component={Support} />
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
