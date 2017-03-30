import React, {Component} from 'react';

class TaskBox extends Component {
	render() {
		let boxStyle = {
			width: "20%",
			backgroundColor: "black",
			color: "white",
			margin: "auto"
		}
		let imageBox = {
			
		}
		return(
			<div className="taskbox" style={boxStyle}>
				<div style={imageBox}>
					<img src={"something"} alt="something" />
				</div>
				<div>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. 
					Morbi et tortor fringilla, 
					hendrerit turpis vitae, 
					efficitur turpis. 
					Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit.
				</div>
			</div>	
		);
}} export default TaskBox;
