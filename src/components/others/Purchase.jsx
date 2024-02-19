import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import AppUrl from "../../api/AppUrl";
import axios from "axios";
import parse from 'html-react-parser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    let siteInfoPurchase = sessionStorage.getItem('siteInfo');
    if (siteInfoPurchase == null) {
      axios.get(AppUrl.SiteInfo).then(response => {
        let StatusCode = response.status;
        if (StatusCode == 200) {
          let JsonData = (response.data)[0][ 'purchase_guide']
          this.setState ({purchase: JsonData, loaderDiv: "d-none", mainDiv: ""})
          sessionStorage.setItem('siteInfoPurchase', JsonData)
        }else{
          toast.error("Something went wrong", {position: "bottom-center", theme: "colored",})
        }
      }).catch(error => {
        toast.error("Something went wrong", {position: "bottom-center", theme: "colored",})
        
      })
    }else {
      this.setState({purchase: siteInfoPurchase, loaderDiv: "d-none", mainDiv: ""})
    }

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

                    <h4 className="section-title-login">Purchases</h4>
                    <p className="section-title-contact">
                        {parse(this.state.purchase)}
                    </p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Purchase