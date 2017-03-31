/**
 * Created by Rasmus on 30.03.2017.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


class AboutUsText extends Component {
    render() {
        let file = require("../Data/AboutUs.json");
        let headerStyle = {
            fontSize: "300%"
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

        let contentStyle = {
            fontSize: "130%",
            fontWeight: "510"
        }
        return (
        <div>
            <Grid>
                <Row style={rowStyle} fluid>
                    <Col xs={12} md={10} mdOffset={1}>
                        <h1 style={headerStyle}>{file[0].title}</h1>
                        <h3 style={{marginTop:"-10px"}}><i>{file[0].under}</i></h3>
                        <hr style={textStyle}/>
                        <p style={contentStyle}>{file[0].content1}</p>
                        <p style={contentStyle}>{file[0].content2}</p>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
} export default AboutUsText;
