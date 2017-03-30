import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Footer extends Component {
	render() {
		let footerStyle = {
			textAlign: "center",
			height: "75px"
		}
		return(
			<div style={footerStyle}>
			<hr/>
				<Row>
					<Col md={3} mdOffset={1} xs={6}>
						Organisasjonsnummer: 817 724 892<br/>
						1746 Skjberg<br/>
						Sarpsborg
					</Col>
					<Col md={3} xs={6}>
						<span>
							contact{"\u0040"}rorsveis.no<br/>
							All Rights Reserved.<br/>
							<span style={{color:"orange"}}>©</span> 2017 RØR & SVEISESERVICE AS
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
