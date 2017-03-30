/**
 * Created by Rasmus on 31.03.2017.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class ContactLayout extends Component {

    render() {
        let file = require("../Data/Contact.json");
        let imgStyle = {
            width: "400px",
            height: "250px"
        };

        let rowStyle = {
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            alignItems: "center"
        };

        let textStyle = {
            borderColor: "red"
        };

        return (
            <div>
                <Grid>
                    <Row style={rowStyle} >
                        <Col xsHidden md={6}>
                            <img src={require("./contact.jpg")} alt="contact" style={imgStyle}/>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>{file[0].title}</h2>
                            <hr style={textStyle}/>
                            <h3>{file[0].content1}</h3>
                            <h3>{file[0].content2}</h3>
                            <h3><i className="fa fa-user"></i>{file[0].sjef1}</h3>
                            <h3><i className="fa fa-user"></i>{file[0].sjef2}</h3>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} export default ContactLayout;