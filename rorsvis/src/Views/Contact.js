import React, { Component } from 'react';
import ContactLayout from '../Components/ContactLayout';
import PageHeader from '../Components/PageHeader';
import Row from 'react-bootstrap';

class Contact extends Component {
	render() {

		let file = require('../Data/PageHeaderContact.json');

		return (
			<div className="contact">
				<Row>
					<PageHeader title={file[0].title} quote={file[0].quote}/>
				</Row>
				<ContactLayout />
			</div>
		);
	}
} export default Contact;
