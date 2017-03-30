import React, {Component} from 'react';

class Footer extends Component {
	render() {
		let footerStyle = {
			textAlign: "center",
			height: "50px"
		}
		return(
			<div style={footerStyle}>
				All Rights Reserved.<br/> 
				© 2017 Rør & Sveis
			</div>
		);
}} export default Footer;
