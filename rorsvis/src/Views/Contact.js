import React, { Component } from 'react';
import ContactLayout from '../Components/ContactLayout';
import PageHeader from '../Components/PageHeader';
import {Row, Grid, Col} from 'react-bootstrap';

import SimpleMap from './../Components/SimpleMap';

class Contact extends Component {
	render() {

		let file = require("../Data/"+localStorage.getItem("lang")+"/PageHeaderContact.json");

		return (
			<div className="contact">
				<Grid>
					<Row>
						<PageHeader title={file[0].title} quote={file[0].quote}/>
					</Row>
					<Row>
						<Col md={6}></Col>
						<ContactLayout />
					</Row>
				</Grid>
			</div>
		);
	}
} export default Contact;
