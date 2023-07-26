import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center fluid={true}">
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some of our Exlusive collection you may like</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3775221/1.jpg?7410" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Infinix Smart 7 Plus 6.6" HD+, 64GB ROM + 3GB RAM, 6000mAh + Free Gifts</p>
              <p className="product-price-on-card">KSh 13,299</p>

            </Card.Body>
    </Card>

            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/5704321/1.jpg?2263" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Infinix Hot 30i, 6.56", 4GB RAM, 128GB, 5000mAh, (DUAL SIM), 4G - Mirror Black</p>
              <p className="product-price-on-card">KSh 16,999</p>

            </Card.Body>
    </Card>

            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/5844221/1.jpg?1859" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">XIAOMI Redmi 12C, 6.71", 4GB + 128GB, 50MP CAM, 5000mAh, Grey + Smart Watch & Earbuds</p>
              <p className="product-price-on-card">KSh 16,999</p>

            </Card.Body>
    </Card>

            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/786019/1.jpg?4816" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Freeyond F9,2GB+64GB,6.52", 13.0MP,4G Smartphone 5000mAh Dual SIM Android Phone,Blue</p>
              <p className="product-price-on-card">KSh 9,992</p>

            </Card.Body>
    </Card>

            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3775221/1.jpg?7410" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Tecno Phantom X2, 6.8", 256GB+ 8GB (Dual SIM), 5160mAh, 5G - Moonlight Silver</p>
              <p className="product-price-on-card">KSh 67,999</p>

            </Card.Body>
    </Card>

            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

            <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/4217311/1.jpg?9197" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Tecno Phantom X2 PRO, 6.8", 256GB+12GB, (Dual SIM), 5160 MAh, 5G - Mars Orange</p>
              <p className="product-price-on-card">KSh 83,999</p>

            </Card.Body>
    </Card>

            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts