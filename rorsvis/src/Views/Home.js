import React, { Component } from 'react';
import FrontPicture from '../Components/FrontPicture';
import TaskBoxContainer from '../Components/TaskBoxContainer';
import BigText from '../Components/BigText';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<FrontPicture />
				<BigText />
				<TaskBoxContainer />
			</div>
		);
	}
} export default Home;
