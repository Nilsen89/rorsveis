import React, {Component} from 'react';

class FrontPicture extends Component {
	render() {
		let imageStyle = {
			maxWidth: "100%",
	    	height: "auto",
		};
		return(
			<div className="frontpicture">
				<img src={require("./../images/welder_03.jpg")} alt="front" style={imageStyle} />
			</div>	
		);
}} export default FrontPicture;
