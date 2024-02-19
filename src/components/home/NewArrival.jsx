import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {

  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next (){
    this.Slider.slickNext();
  }
  previous(){
    this.Slider.slickPrev();

  }


  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,

    };

    return (
      <Fragment>
        <Container className="text-center fluid={true}">
        <div className="section-title text-center mb-55">
          
            <h2>NEW ARRIVALS &nbsp;
            <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
            &nbsp;
            <a className="btn btn-sm ml-2 site-btn" onClick={this.next} ><i className="fa fa-angle-right"></i></a>
            </h2>
            <p>Latest Products in the market</p>
          </div>
          <Row>
          <Slider ref = {c=>(this.Slider=c)} {...settings}>
          <div>
          <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3775221/1.jpg?7410" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion 2020 Casual Women Trench Coat Autumn Zipper Hooded Coat Female Long Trench Coat Horn Button Outwear Ladies ToP Pluse Size S-5XL</p>
              <p className="product-price-on-card">KSh 3,790</p>

            </Card.Body>
    </Card>
          </div>
          <div>
          <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/230785/1.jpg?0593" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion 4 In 1 Women Bag Crossbody Bag Handbag Underarm Bag Ladies Sling Purse Tote Hobo Bag Female Messenger Shoulder Bag Wallet Satchel</p>
              <p className="product-price-on-card">KSh 859</p>

            </Card.Body>
    </Card>
          </div>
          <div>
          <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/900354/1.jpg?3131" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Generic Women Trousers Casual All-match Wide-leg Trousers With Belt Pants</p>
              <p className="product-price-on-card">KSh 830</p>

            </Card.Body>
    </Card>
          </div>
          <div>
          <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/916025/1.jpg?6692" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Fashion Beautiful Ladies Sun Hats Leopard Ribbon Wide Floppy Beach Caps</p>
              <p className="product-price-on-card">KSh 389</p>

            </Card.Body>
    </Card>
          </div>
          <div>
          <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/8137051/1.jpg?0676" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">HP Pavilion X360 14-dy0003ur, 8GB Ram, 256GB SSD, Intel Pentium Gold 7505 Windows 11 Pro</p>
              <p className="product-price-on-card">KSh 46,999</p>

            </Card.Body>
    </Card>
          </div>
          <div>
          <Card className="image-box card">
              <img className="center" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/4217311/1.jpg?9197" alt=""/>
            <Card.Body>
              <p className="product-name-on-card">Tecno Phantom X2 PRO, 6.8", 256GB+12GB, (Dual SIM), 5160 MAh, 5G - Mars Orange</p>
              <p className="product-price-on-card">KSh 83,999</p>

            </Card.Body>
    </Card>
          </div>
        </Slider>
          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArrival