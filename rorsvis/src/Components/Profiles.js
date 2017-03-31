import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Profiles extends Component {

	render() {
        let logoStyle = {
        	height: "50px"
        };
		return(
			<Col md={2} xs={12} style={{marginTop:"20px", marginBottom:"20px"}}>
				<Image style={logoStyle} src="https://www.career.edu.pk/assets/img/profile-icon.png" circle /><br/>
				<span>{this.props.name}</span><br />
				<span>{this.props.title}</span><br/>
				<span>{this.props.email}</span>
			</Col>
		);
	
}} export default Profiles;
