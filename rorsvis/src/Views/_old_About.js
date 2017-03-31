import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import AboutUsText from '../Components/aboutUsText';
import Profiles from '../Components/Profiles';

class AboutUs extends Component {
	render() {
		return (
			<div className="aboutus">
				<Row>
					<AboutUsText />
				</Row>
				<Row style={{backgroundColor:"#f87431"}}>
					<Col md={3}></Col>
						<Profiles 	name="Rune Eide" 
									title="Board Member" 
									email="eide@rorsveis.no" />
						<Profiles 	name="May-Liss Ahlsen Larsen" 
									title="Board Member"
									email="larsen@rorsveis.no" />
						<Profiles 	name="Mariusz Stanislaw Roginski"
									title="Board Member" 
									email="roginiski@rorsveis.no"/>
					<Col md={3}></Col>
				</Row>
			</div>
		);
	}
} export default AboutUs;
