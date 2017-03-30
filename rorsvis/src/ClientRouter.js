import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Portfolio from './Views/Portfolio';
import CV from './Views/CV';
import Blog from './Views/Blog';
import Contact from './Views/Contact';

class ClientRouter extends Component {

	render() {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Portfolio} />
				<Route path="/CV" component={CV} />
				<Route path="/Blog" component={Blog} />
				<Route path="/Contact" component={Contact} />
			</Router>	
		);
	}

} export default ClientRouter;
