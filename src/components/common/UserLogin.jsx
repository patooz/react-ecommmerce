import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import LoginImg from "../../assets/images/login.png"

export class UserLogin extends Component {
  render() {
    return (
      
      <Fragment>
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>
                    <Row className="text-center">
                        <Col className="flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                            <Form className="onboardForm">
                                <h4 className="section-title-login">SIGN IN</h4>
                                <h6 className="section-sub-title">Please enter your Mobile Number</h6>
                                <input type="number" className="form-control m-2" placeholder="Enter Mobile Number" />
                                <Button className="btn btn-block m-2 site-btn-login">Next</Button>

                            </Form>
                        </Col>

                        <Col className="p-0 m-0 Desktop" lg={6} md={6} sm={6} xs={6}>
                            <img className="onboardBanner" src={LoginImg} alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default UserLogin