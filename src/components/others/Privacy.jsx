import React, { Component, Fragment } from 'react'
import {Col, Container, Row } from "react-bootstrap"
import AppUrl from "../../api/AppUrl";
import axios from "axios";
import parse from 'html-react-parser';

export class Privacy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    axios.get(AppUrl.SiteInfo).then(response => {
      let StatusCode = response.status;
      if (StatusCode == 200) {
        let JsonData = (response.data)[0][ 'privacy']
        this.setState ({privacy: JsonData, loaderDiv: "d-none", mainDiv: ""})
      }
    }).catch(error => {
      
    })
  }
  
  render() {
    return (
        <Fragment>
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <div className={this.state.loaderDiv}>
                    <div class="ph-item">
    <div class="ph-col-12">
        <div class="ph-row">
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
</div>
                    </div>
                    <div className={this.state.mainDiv}>

                    <h4 className="section-title-login">Our Privacy Policy</h4>
                    <p className="section-title-contact">
                        {parse(this.state.privacy)}
                    </p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Privacy