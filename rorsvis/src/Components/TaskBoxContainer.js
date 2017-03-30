import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TaskBox from './TaskBox';

class TaskBoxContrainer extends Component {
	render() {

		let file = require("./../Data/Thumbnail.json");		

		let flexStyle = {
			display: "flex",
			justifyContent: "center",
			margin: "10px"
		}
		return(
			<div style={flexStyle}>
					<Row>
					{ file.map( function(obj) {
						return(
							<Col xs={6} md={4} mdOffset={1}>	
								<TaskBox src={obj.src}
									alt={obj.alt}
									label={obj.label}
									content={obj.content}
								/>
							</Col>
			  			);
					})}
					</Row>
			</div>
		);	
}} export default TaskBoxContrainer;
