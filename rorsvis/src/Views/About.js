import React, { Component } from 'react';
import {Row, Grid} from 'react-bootstrap';

import AboutUsText from '../Components/aboutUsText';
import PageHeader from './../Components/PageHeader';

class AboutUs extends Component {
	render() {

		let file = require("./../Data/"+localStorage.getItem("lang")+"/PageHeaderAboutUs.json");

		return (
			<div className="aboutus">
				<Grid>
					<Row>
						<PageHeader title={file[0].title} quote={file[0].quote}/>
					</Row>
					<AboutUsText />
				</Grid>

			</div>
		);
	}
} export default AboutUs;
