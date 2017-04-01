import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';

class TaskBox extends Component {
	render() {
		let labelStyle = {
			color: "#f87431",
			fontSize: "22px",
		}
		return(
			<Thumbnail src={this.props.src} alt="something">
				<div style={labelStyle}>{this.props.label}</div>
				<p>{this.props.content}</p>
			</Thumbnail>
		);
}} export default TaskBox;
