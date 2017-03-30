import React, {Component} from 'react'
import {Grid,Row,Col} from 'react-bootstrap';

import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Projects from './Views/Projects';
import NotFound from './Views/NotFound';
import NavigationBar from './Components/NavigationBar';

import { 	BrowserRouter as Router,
			Route,
			Link,
			Switch
} from 'react-router-dom';

class ClientRouter extends Component {
	render() {
		return(
			<Router>
				<Grid fluid className="grid">
					<Row>
						<Col md={12}>
							<NavigationBar />
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/About" component={About} />
								<Route path="/Projects" component={Projects} />
								<Route path="/Contact" component={Contact} />
								<Route component={NotFound} />
							</Switch>
						</Col>
					</Row>
				</Grid>	
			</Router>			
		);				
}} export default ClientRouter;
