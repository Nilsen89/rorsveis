import React, { Component } from 'react';

import TaskBoxContainer from './../Components/TaskBoxContainer';
import PageHeader from '../Components/PageHeader';
import {Row, Grid} from 'react-bootstrap'

class Projects extends Component {
	render() {

		let file = require('../Data/PageHeaderProjects.json');
		return (
			<div className="Projects">
				<Grid>
					<Row>
						<PageHeader title={file[0].title} quote={file[0].quote}/>
					</Row>

					<TaskBoxContainer />
				</Grid>

			</div>
		);
	}
} export default Projects;
