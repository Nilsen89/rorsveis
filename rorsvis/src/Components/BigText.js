import React, {Component} from 'react';

class BigText extends Component {
	render() {
		let myStyle = {
			fontSize: "24px",
			padding: "24px"
		}
		return(
			<div style={myStyle}>
				We work seriously with a lot of <span style={{color:"orange"}}>SERIOUS</span> things.
				Such as welding, looking at walls and pipes.
				However, I do think we are the <span style={{color:"orange"}}>BEST</span>  at what we do.
			</div>
		);
}} export default BigText;
