import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import AppUrl from "../../api/AppUrl";
import axios from "axios";
import parse from 'html-react-parser';

class FeaturedProducts extends Component {
  
  constructor() {
    super();
    this.state = {
        productData: []
        
    }
}
componentDidMount() {
  axios.get(AppUrl.ProductListByRemark("FEATURED")).then(response => {
     
      this.setState({productData:response.data})
  }).catch(error => {
      
  })
}
  render() {
    const featuredList = this.state.productData;
    const myView = featuredList.map((featuredList, i) => {
      if (featuredList.special_price == "na") {
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
      <Link to="/product/details">
    <Card className="image-box card">
      <img className="center" src={featuredList.image} alt=""/>
    <Card.Body>
      <p className="product-name-on-card">{featuredList.title}</p>
      <p className="product-price-on-card">KSh {featuredList.price}</p>

    </Card.Body>
</Card>
</Link>

    </Col>
        
      }else {
        return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
      <Link to="/product/details">
    <Card className="image-box card">
      <img className="center" src={featuredList.image} alt=""/>
    <Card.Body>
      <p className="product-name-on-card">{featuredList.title}</p>
      <p className="product-price-on-card"> <strike className="text-secondary">KSh {featuredList.price}</strike> Ksh {featuredList.special_price}</p>

    </Card.Body>
</Card>
</Link>

    </Col>

      }
      
    })
    return (
      <Fragment>
        <Container className="text-center fluid={true}">
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some of our Exlusive collection you may like</p>
          </div>
          <Row>
            
            {myView}
            
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts