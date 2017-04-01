import React, { Component } from 'react';

import TaskBoxContainer from './../Components/TaskBoxContainer';
import PageHeader from '../Components/PageHeader';

class Projects extends Component {
	render() {

		let file = require('../Data/PageHeaderProjects.json');
		return (
			<div className="Projects">
				<PageHeader title={file[0].title} quote={file[0].quote}/>
				<TaskBoxContainer />
			</div>
		);
	}
} export default Projects;
