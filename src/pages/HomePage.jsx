import React, { Component, Fragment } from 'react'
import FeaturedProducts from "../components/home/FeaturedProducts"
import Categories from "../components/home/Categories"
import Collections from "../components/home/Collections"
import NewArrival from "../components/home/NewArrival"
import HomeTop from "../components/home/HomeTop"
import NavMenuDesktop from "../components/common/NavMenuDesktop"
import NavMenuMobile from "../components/common/NavMenuMobile"
import MobileHomeTop from "../components/home/MobileHomeTop"
import FooterDesktop from "../components/common/FooterDesktop"
import FooterMobile from "../components/common/FooterMobile"
import axios from "axios"
import AppUrl from "../api/AppUrl"

export class HomePage extends Component {

  componentDidMount(){
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails = () => {
    axios.get(AppUrl.VisitorDetails)
    .then()
    .catch()
  }
  render() {
    return (



      <Fragment>
      <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <MobileHomeTop />
        </div>

        <FeaturedProducts />
          <NewArrival />
          <Categories />
          <Collections />

          <div className="Desktop">
          <FooterDesktop /> 
        </div>

        <div className="Mobile">
          <FooterMobile /> 
        </div>
      </Fragment>
    )
  }
}

export default HomePage