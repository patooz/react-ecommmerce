import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import HomeSlide from "./HomeSlide"

export class MobileHomeTop extends Component {
  render() {
    return (
        <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <HomeSlide />
                    
                </Col>

                
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default MobileHomeTop