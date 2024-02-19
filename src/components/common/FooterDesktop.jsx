import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import AppStore from "../../assets/images/apple.png";
import GooglePlay from "../../assets/images/google.png"
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import parse from 'html-react-parser';

class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      android_app: "",
      ios_app: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
      linkedin_link: "",
      copyright_text: "",
      loaderDiv: "",
      mainDiv: "d-none",

    };
  }
  componentDidMount() {
    axios.get(AppUrl.SiteInfo).then(response => {
      let StatusCode = response.status;
      if (StatusCode == 200) {
        let JsonData = (response.data)[0]
        this.setState ({
          address: JsonData["address"],
          android_app: JsonData["android_app"],
          ios_app: JsonData["ios_app"],
          facebook_link: JsonData["facebook_link"],
          twitter_link: JsonData["twitter_link"],
          instagram_link: JsonData["instagram_link"],
          copyright_text: JsonData["copyright_text"],
          loaderDiv: "d-none", 
          mainDiv: ""
        })
      }
    }).catch(error => {
      
    })
  }
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
        <Container>
          <Row className="px-0 my-5">
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
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
            
        </div>
    </div>
</div>
                    </div>
            <div className={this.state.mainDiv}>
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              {parse(this.state.address)}
              </div>
              {/* <p className="footer-link">
                  P.O BOX 87, <br /> 
                  Kabarnet - 30400, <br /> 
                  Baringo, Kenya <br />
                  Email: support@sokoyetu.co.ke
              </p> */}

              <h5 className="footer-menu-title">SOCIAL LINKS</h5>
              <a href={this.state.facebook_link} target="_blank" rel="noreferrer"><i className="fab m-1 h4 fa-facebook"></i></a>
              <a href={this.state.instagram_link} target="_blank" rel="noreferrer"><i className="fab m-1 h4 fa-instagram"></i></a>
              <a href={this.state.twitter_link} target="_blank" rel="noreferrer"><i className="fab m-1 h4 fa-twitter"></i></a>
            </Col>

             <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
             <h5 className="footer-menu-title">THE COMPANY</h5>
             <Link to="/about" className="footer-link">About us</Link> <br />
             <Link to="/" className="footer-link">Company Profile</Link> <br />
             <Link to="/contact" className="footer-link">Contact us</Link> <br />
            </Col>

             <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">MORE INFO</h5>
            <Link to="/purchase" className="footer-link">How to Purchase</Link> <br />
             <Link to="/privacy" className="footer-link">Privacy Policy</Link> <br />
             <Link to="/refund" className="footer-link">Refund Policy</Link> <br />
            </Col>

             <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">DOWNLOAD APP</h5>
            <a href={this.state.android_app} target="_blank" rel="noreferrer"><img className="mt-2" src={GooglePlay} alt="" /></a><br />
            <a href={this.state.ios_app} target="_blank" rel="noreferrer"><img className="mt-2" src={AppStore} alt="" /></a><br /><br /><br />
            Change Language <br />
            <div id="google_translate_element" />
            </Col>

          </Row>
        </Container>

        <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
          <Container>
            <Row>
              {/* <h6 className="text-white">&copy; Copyright@2023 Soko Yetu Online Store, All Rights Reserved</h6> */}
              <h6 className="text-white">
                {parse(this.state.copyright_text)}
              </h6>
            </Row>
          </Container>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop