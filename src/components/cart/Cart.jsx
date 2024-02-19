import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Product1 from "../../assets/images/product/product1.png"

export class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
            
          </div>
            <Row>
                <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3} lg={3} sm={6} xs={6}>
                                <img className="w-100 h-100" src={Product1} alt="" />
                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6}>
                                <h5 className="product-name">Asus Tuf A15 FA5061U Ryzen & 400 GTX</h5>
                                <h6>Quantity  = 05</h6>
                                <h6>Price = 05 x 100 = Ksh 5000</h6>
                            </Col>

                            <Col md={3} lg={3} sm={12} xs={12}>
                                <input type="number" placeholder="4" className="form-control text-center" />
                                <Button className="btn btn-block w-100 mt-3 site-btn">
                                    <i className="fa fa-trash-alt"> Remove</i>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
                </Col>

                <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3} lg={3} sm={6} xs={6}>
                                <img className="cart-product-img" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3775221/1.jpg?7410" alt="" />
                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6}>
                                <h5 className="product-name">Asus Tuf A15 FA5061U Ryzen & 400 GTX</h5>
                                <h6>Quantity  = 05</h6>
                                <h6>Price = 05 x 100 = Ksh 5000</h6>
                            </Col>

                            <Col md={3} lg={3} sm={12} xs={12}>
                                <input type="number" placeholder="4" className="form-control text-center" />
                                <Button className="btn btn-block w-100 mt-3 site-btn">
                                    <i className="fa fa-trash-alt"> Remove</i>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
                </Col>

                <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3} lg={3} sm={6} xs={6}>
                                <img className="w-100 h-100" src={Product1} alt="" />
                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6}>
                                <h5 className="product-name">Asus Tuf A15 FA5061U Ryzen & 400 GTX</h5>
                                <h6>Quantity  = 05</h6>
                                <h6>Price = 05 x 100 = Ksh 5000</h6>
                            </Col>

                            <Col md={3} lg={3} sm={12} xs={12}>
                                <input type="number" placeholder="4" className="form-control text-center" />
                                <Button className="btn btn-block w-100 mt-3 site-btn">
                                    <i className="fa fa-trash-alt"> Remove</i>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
                </Col>

                <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3} lg={3} sm={6} xs={6}>
                                <img className="w-100 h-100" src={Product1} alt="" />
                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6}>
                                <h5 className="product-name">Asus Tuf A15 FA5061U Ryzen & 400 GTX</h5>
                                <h6>Quantity  = 05</h6>
                                <h6>Price = 05 x 100 = Ksh 5000</h6>
                            </Col>

                            <Col md={3} lg={3} sm={12} xs={12}>
                                <input type="number" placeholder="4" className="form-control text-center" />
                                <Button className="btn btn-block w-100 mt-3 site-btn">
                                    <i className="fa fa-trash-alt"> Remove</i>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
                </Col>

                <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                          

                            <Col md={4} lg={4} sm={6} xs={6}>
                                
                                <h5>Total Quantity  = 05</h5>
                                <h5>Total Price = Ksh 5000</h5>
                                <Button className="btn btn-block w-100 mt-3 site-btn">
                                    <i className="fa fa-shopping-cart"> Checkout</i>
                                </Button>
                            </Col>

                           
                        </Row>
                    </Card.Body>

                </Card>
                </Col>


                
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Cart