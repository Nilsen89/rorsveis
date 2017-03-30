import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TaskBox from './TaskBox';

class TaskBoxContrainer extends Component {
	render() {
		let flexStyle = {
			display: "flex",
			width: "100%",
			justifyContent: "center",
			backgroundColor: "black"
		}
		return(
			<Grid>
				<Row>
					<Col md={12}>
						<div style={flexStyle}>
							<TaskBox />
							<TaskBox />
							<TaskBox />
							<TaskBox />
						</div>
					</Col>
				</Row>
			</Grid>
		);	
}} export default TaskBoxContrainer;
