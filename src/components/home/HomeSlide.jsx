import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slid1 from "../../assets/images/s1.png"
import Slid2 from "../../assets/images/s2.jpg"
import Slid3 from "../../assets/images/s3.jpg"
import Slid4 from "../../assets/images/s4.png"
import Slid5 from "../../assets/images/s5.jpg"

export class HomeSlide extends Component {
  render() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
  
      };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slider-img" src={Slid1} alt="" />
          </div>
          <div>
          <img className="slider-img" src={Slid2} alt="" />
          </div>
          <div>
          <img className="slider-img" src={Slid3} alt="" />
          </div>
          <div>
          <img className="slider-img" src={Slid4} alt="" />
          </div>
          <div>
          <img className="slider-img" src={Slid5} alt="" />
          </div>

        </Slider>
      </div>
    )
  }
}

export default HomeSlide