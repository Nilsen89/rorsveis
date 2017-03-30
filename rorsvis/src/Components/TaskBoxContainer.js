import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TaskBox from './TaskBox';

class TaskBoxContrainer extends Component {
	render() {

		let file = require("./../Data/Thumbnail.json");		

		let flexStyle = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}
		return(
			<div style={flexStyle}>
					<Row>
					{ file.map( function(obj) {
						return(
							<Col xs={12} md={3} mdOffset={0}>	
								<TaskBox src={obj.src}
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
