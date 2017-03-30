import React, { Component } from 'react';
import FrontPicture from '../Components/FrontPicture';
import TaskBoxContainer from '../Components/TaskBoxContainer';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<FrontPicture />
				<TaskBoxContainer />
			</div>
		);
	}
} export default Home;
