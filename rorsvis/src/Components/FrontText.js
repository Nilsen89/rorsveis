import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class FrontText extends Component {
	render() {
		let boxStyle = {
			padding: "24px",
			backgroundColor: "#f87431"
		}
		let textStyle = {
			padding: "24px",
			backgroundColor: "#f87431"
		}
	
		return(
			<div style={boxStyle}>
				<div style={{fontSize:"24", fontWeight:"bold"}}>Our Servies:</div>
				<Row>
					<Col md={4} xs={6} mdOffset={2}>
						<span style={{fontSize:"18", fontWeight:"bold"}}>Welding</span>
						<p>We offer our experienced services in welding to you and your firm.
						Rør & Sveis have many years experience within welding and take pride in
						doing good work.</p>
					</Col>
					<Col md={4} xs={6}>
						<span style={{fontSize:"18", fontWeight:"bold"}}>Piping</span>
						<p>Rør & Sveis have personell with decade of experience with piping, and other
						services related pipes, we can do the work needed to be done.</p>
					</Col>
				</Row>
			</div>
		);
}} export default FrontText;
