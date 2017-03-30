import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Footer extends Component {
	render() {
		let footerStyle = {
			textAlign: "center",
			marginBottom: "20px",
			marginTop: "10px"
		}
		return(
			<div style={footerStyle}>
				<Row>
					<Col md={3} mdOffset={2} xs={6}>
						Org. nr: 817 724 892<br/>
						Bissebergveien 95<br/>
						1746 Skjberg, Sarpsborg
					</Col>
					<Col md={2} xs={6}>
						<span>
							contact{"\u0040"}rorsveis.no<br/>
							All Rights Reserved.<br/>
							<span style={{color:"orange"}}>©</span> 2017 Rør & Sveiseservice AS
						</span>
					</Col>
					<Col md={3} xs={6}>
						Follow us:<br/>
						Facebook<br/>
						Linkdin<br/>
					</Col>
				</Row>
			</div>
		);
}} export default Footer;
