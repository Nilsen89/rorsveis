import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class FrontText extends Component {
	render() {
		let boxStyle = {
			padding: "10px",
            border: "1px dashed black",
			marginBottom: "20px"
		};
		let labelStyle = {
			fontSize: "18px",
			fontWeight:"bold",
		};
		let file = require("./../Data/Services.json");

		return(
			<Col md={4} xs={12}>
				<div style={boxStyle}>
					<span style={labelStyle}>{this.props.label}</span>
					<p>{this.props.content}</p>
				</div>
			</Col>
		);
}} export default FrontText;
