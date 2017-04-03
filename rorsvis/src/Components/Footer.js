import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Footer extends Component {
	render() {
		let footerStyle = {
			textAlign: "center",
			marginBottom: "20px",
			marginTop: "10px",
			paddingTop: "10px",
			borderTop: "1px solid black"
		}
		return(
			<div style={footerStyle}>
				<Row>
					<Col md={3} mdOffset={2} xs={12}>
						Org. nr: 817 724 892<br/>
						Bissebergveien 95<br/>
						1746 Skjberg, Sarpsborg
					</Col>
					<Col md={2} xs={12}>
						<span>
							contact{"\u0040"}rorsveis.no<br/>
							All Rights Reserved.<br/>
							<span style={{color:"orange"}}>©</span> 2017 Rør & Sveiseservice AS
						</span>
					</Col>
					<Col md={3} xs={12}>
						<span style={{fontWeight:"bold"}}>Follow us:</span><br/>
						Facebook<br/>
						Linkd-in<br/>
					</Col>
				</Row>
			</div>
		);
}} export default Footer;
