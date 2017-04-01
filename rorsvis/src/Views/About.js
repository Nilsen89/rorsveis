import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import AboutUsText from '../Components/aboutUsText';
import PageHeader from './../Components/PageHeader';

class AboutUs extends Component {
	render() {

		let file = require("./../Data/PageHeaderAboutUs.json");

		return (
			<div className="aboutus">
				<Row>
					<Col md={2}/>
					<Col md={8}>
						<Row>
							<PageHeader title={file[0].title} quote={file[0].quote}/>
						</Row>
						<AboutUsText />
					</Col>
					<Col md={2}/>
				</Row>
			</div>
		);
	}
} export default AboutUs;
