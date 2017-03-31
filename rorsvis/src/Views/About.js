import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import AboutUsText from '../Components/aboutUsText';
import Profiles from '../Components/Profiles';

class AboutUs extends Component {
	render() {
		return (
			<div className="aboutus">
				<Row>
					<Col md={2}/>
					<Col md={8}>
						<AboutUsText />
					</Col>
					<Col md={2}/>
				</Row>
			</div>
		);
	}
} export default AboutUs;
