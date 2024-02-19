import React, { Component, Fragment } from 'react'
import {Route, Routes} from 'react-router'
import HomePage from "../pages/HomePage"
import UserLoginPage from "../pages/UserLoginPage"
import ContactPage from "../pages/ContactPage"
import PurchasePage from "../pages/PurchasePage"
import PrivacyPage from "../pages/PrivacyPage"
import RefundPage from "../pages/RefundPage"
import ProductsDetailsPage from "../pages/ProductsDetailsPage"
import NotificationPage from "../pages/NotificationPage"
import FavouritesPage from "../pages/FavouritesPage";
import CartPage from "../pages/CartPage"
import AboutPage from "../pages/AboutPage"




export class AppRoute extends Component {

  render() {
    return (

        <Fragment>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/product/details" element={<ProductsDetailsPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>


        </Fragment>

    )
  }
}

export default AppRoute