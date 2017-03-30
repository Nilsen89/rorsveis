import React, {Component} from 'react';
import {Thumbnail, Image} from 'react-bootstrap';

class TaskBox extends Component {
	render() {
		let labelStyle = {
			color: "#f87431",
			fontSize: "24",
		}
		let textStyle = {	
		}
		return(
			<Thumbnail src={this.props.src} alt="something">
				<div style={labelStyle}>{this.props.label}</div>
				<p style={textStyle}>{this.props.content}</p>
			</Thumbnail>
		);
}} export default TaskBox;
