/**
 * Created by Rasmus on 01.04.2017.
 */
import React, {Component} from 'react';

class PageHeader extends Component {

    render() {
        let headerStyle = {
            fontSize: "300%"
        };

        let textStyle = {
            borderColor: "red"
        };

        return(
        <div>
            <h1 style={headerStyle}>{this.props.title}</h1>
            <h3 style={{marginTop:"-10px"}}><i>{this.props.quote}</i></h3>
            <hr style={textStyle}/>
        </div>
        );
    }
} export default PageHeader