import React, { Component, Fragment } from 'react'
import NavMenuDesktop from "../components/common/NavMenuDesktop"
import NavMenuMobile from "../components/common/NavMenuMobile"
import Favourites from "../components/favourites/Favourites"
import FooterDesktop from "../components/common/FooterDesktop"
import FooterMobile from "../components/common/FooterMobile"

export class FavouritesPage extends Component {
  render() {
    return (
      <Fragment>
      <div className="Desktop">
          <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

          <Favourites />

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

export default FavouritesPage