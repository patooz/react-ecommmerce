import React, { Component, Fragment } from 'react'
import FooterDesktop from "../components/common/FooterDesktop"
import NavMenuMobile from "../components/common/NavMenuMobile"
import NavMenuDesktop from "../components/common/NavMenuDesktop"
import FooterMobile from "../components/common/FooterMobile"
import Purchase from "../components/others/Purchase"
import ProductDetails from "../components/product_details/ProductDetails"
import SuggestedProducts from "../components/product_details/SuggestedProducts"

export class ProductsDetailsPage extends Component {

    componentDidMount(){
        window.scroll(0, 0)
      }

  render() {
    return (
      <Fragment>
                    <Fragment>
        <div className="Desktop">
            <NavMenuDesktop />
          </div>
  
          <div className="Mobile">
            <NavMenuMobile />
          </div>

            <ProductDetails />
            <SuggestedProducts />

            <div className="Desktop">
            <FooterDesktop /> 
          </div>

          <div className="Mobile">
            <FooterMobile /> 
          </div>
        </Fragment>
      </Fragment>
    )
  }
}

export default ProductsDetailsPage