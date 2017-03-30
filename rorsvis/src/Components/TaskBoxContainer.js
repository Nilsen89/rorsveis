import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TaskBox from './TaskBox';

class TaskBoxContrainer extends Component {
	render() {
		let flexStyle = {
			display: "flex",
			justifyContent: "center",
			margin: "10px"
		}
		return(
			<div style={flexStyle}>
				<TaskBox />
				<TaskBox />
				<TaskBox />
				<TaskBox />
			</div>
		);	
}} export default TaskBoxContrainer;
