import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu"
import HomeSlide from "./HomeSlide";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export class HomeTop extends Component {
  constructor() {
    super();
    this.state = {
      Menudata: []
    };
  }
  componentDidMount() {
    axios.get(AppUrl.CategoryDetails).then(response => {
      this.setState({
        Menudata: response.data
      })
    }).catch(error => {
        
    })
}
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={"true"}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={this.state.Menudata} />
                    
                </Col>

                <Col lg={9} md={9} sm={12}>
                <HomeSlide />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop