import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class FrontText extends Component {
	render() {
		let boxStyle = {
			padding: "24px",
			backgroundColor: "#f87431"
		}
	
		return(
			<div style={boxStyle}>
				<div style={{fontSize:"24", fontWeight:"bold", marginBottom:"25px"}}>Our Servies:</div>
				<Row>
					<Col md={4} xs={6} mdOffset={2}>
						<div style={{border:"1px dashed black", padding:"10px"}}>
							<span style={{fontSize:"18", fontWeight:"bold"}}>Welding</span>
							<p>We offer our experienced services in welding to you and your firm.
							Rør & Sveis have many years experience within welding and take pride in
							doing good work.
							<br/><br/>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus efficitur lacus, nec consectetur odio scelerisque ut. Suspendisse sodales consequat mollis. Suspendisse lacinia, turpis gravida pulvinar posuere, mi nibh sodales. 

							</p>
						</div>
					</Col>
					<Col md={4} xs={6}>
						<div style={{border:"1px dashed black", padding:"10px"}}>
							<span style={{fontSize:"18", fontWeight:"bold"}}>Piping</span>
							<p>Rør & Sveis have personell with decade of experience with piping, and other
							services related pipes, we can do the work needed to be done.
							<br/><br/>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus efficitur lacus, nec consectetur odio scelerisque ut. Suspendisse sodales consequat mollis. Suspendisse lacinia, turpis gravida pulvinar posuere, mi nibh sodales. 
							</p>
						</div>
					</Col>
				</Row>
			</div>
		);
}} export default FrontText;
