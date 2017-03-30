import React, {Component} from 'react';
import {Thumbnail, Image} from 'react-bootstrap';

class TaskBox extends Component {
	render() {
		let labelStyle = {
			color:"orange",
			fontSize: "20"
		}
		let contentStyle = {
			
		}
		return(
			<Thumbnail src={this.props.src} alt={this.props.alt}>
				<p style={labelStyle}>
					{this.props.label}
				</p>
				<p style={contentStyle}>
					{this.props.content}
				</p>
			</Thumbnail>
		);
}} export default TaskBox;
