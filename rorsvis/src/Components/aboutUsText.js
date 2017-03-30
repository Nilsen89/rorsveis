/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


class AboutUsText extends Component {
    render() {
        let file = require("../Data/AboutUs.json");
        let imgStyle = {
            width: "400px",
            height: "250px"
        };

        let rowStyle = {
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            alignItems: "center"
        }

        let textStyle = {
            borderColor: "red"
        };
        return (
        <div>
            <Grid>
                <Row style={rowStyle} fluid>
                    <Col xsHidden md={6}>
                        <img src={require("./roring.jpg")} alt="sendnudes" style={imgStyle}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>{file[0].title}</h2>
                        <hr style={textStyle}/>
                        <p>{file[0].content1}</p>
                        <p>{file[0].content2}</p>
                    </Col>
                </Row>
            </Grid>

        </div>
        );
    }
} export default AboutUsText;