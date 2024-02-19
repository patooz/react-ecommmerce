import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import AppStore from "../../assets/images/apple.png";
import GooglePlay from "../../assets/images/google.png";

class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
                <div className="footerback m-0 mt-5 pt-3 shadow-sm">
        <Container className="text-center">
          <Row className="px-0 my-5">
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              <p>87-30400, Kabarnet, Baringo, Kenya
              <br />
              Email: support@codecorner.co.ke
              </p>
              <h5 className="footer-menu-title">SOCIAL LINKS</h5>
              <a href="#"><i className="fab m-1 h4 fa-facebook"></i></a>
              <a href="#"><i className="fab m-1 h4 fa-instagram"></i></a>
              <a href="#"><i className="fab m-1 h4 fa-twitter"></i></a>
            </Col>

            

             <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">DOWNLOAD APP</h5>
            <a href="#"><img className="mt-2" src={GooglePlay} alt="" /></a><br />
            <a href="#"><img className="mt-2" src={AppStore} alt="" /></a><br /><br /><br />
            </Col>

          </Row>
        </Container>

        <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
          <Container>
            <Row>
              <h6 className="text-white">Copyright 2023. Soko Yetu Online Store, All Rights Reserved</h6>
            </Row>
          </Container>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterMobile