import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import Home from './Views/Home.js';
import Projects from './Views/Projects.js';
import Project from './Views/Project.js';
import Contact from './Views/Contact.js';
import NotFound from './Views/NotFound.js';
import Layout from './Views/Layout.js';
import AboutUs from './Views/AboutUs.js';

class ClientRouter extends Component {
	render() {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRedirect to="/Home" />
					<Route path="Home" component={Home} />
					<Route path="Projects" component={Projects} />
					<Route path="AboutUs" component={AboutUs} />
					<Route path="Contact" component={Contact} />
					<Route path="*" component={NotFound} />
				</Route>
			</Router>	
		);
	}

} export default ClientRouter;
