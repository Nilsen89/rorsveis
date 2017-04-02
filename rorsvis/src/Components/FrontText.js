import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Service from './Services';

class FrontText extends Component {
	render() {
		let boxStyle = {
			padding: "18px",
			backgroundColor: "#f87431"
		}
		let labelStyle = {
			fontWeight: "bold",
			fontSize: "24px",
		}
		let file = require("./../Data/Services.json");

		return(

			<div style={boxStyle}>
				<Grid>
					<span style={labelStyle}>Services</span>
					<Row>
						{ file.map( function(obj) {
							return(
								<Service label={obj.label} content={obj.content} />
							);
						})}
					</Row>
				</Grid>
			</div>
		);
}} export default FrontText;
