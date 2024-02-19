import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap"

export class Collections extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center fluid={true}">
        <div className="section-title text-center mb-55">
            <h2>PRODUCT COLLECTIONS</h2>
            <p>Shop with Product Collections</p>
          </div>
          <Row>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/369033/1.jpg?4525" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion Sexiest Mock Neck Ribbed Bodycon Dress (Hips 36-44" Fit)</p>
              <p className="product-price-on-card">KSh 499</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/890243/1.jpg?5383" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion Ladies Official Long Turkey Dresses - Black</p>
              <p className="product-price-on-card">KSh 950</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/369033/1.jpg?4525" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion Stylish Mock Neck Ribbed Bodycon Dress(Hips 36-44inches Fit)</p>
              <p className="product-price-on-card">KSh 585</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75 h-100" src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/7982911/1.jpg?5299" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion Black Cotton Kneelength Ribbed Bodycon Dress Longsleeve</p>
              <p className="product-price-on-card">KSh 599</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0"xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75 h-100" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/253668/1.jpg?7121" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Generic Women Sexy Cardigan Button Shirt Slim Dress</p>
              <p className="product-price-on-card">KSh 800</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75 h-100" src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/360454/1.jpg?1646" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Generic Women Square Neck Lantern Long Sleeve Ruffle Shorts Casual Culottes Jumpsuit</p>
              <p className="product-price-on-card">KSh 895</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75 h-100" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/253668/1.jpg?7105" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Generic Women Round Neck Open Back Sexy Racer Ribbed Midi Dress</p>
              <p className="product-price-on-card">KSh 700</p>

            </Card.Body>
    </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img className="center w-75 h-100" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/221243/1.jpg?0940" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion Women's Floral Sleeve Office Long Grown Dresses - Red</p>
              <p className="product-price-on-card">KSh 1,090</p>

            </Card.Body>
    </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collections