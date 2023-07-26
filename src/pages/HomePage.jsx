import React, { Component, Fragment } from 'react'
import FeaturedProducts from "../components/home/FeaturedProducts"
import Categories from "../components/home/Categories"
import Collections from "../components/home/Collections"
import NewArrival from "../components/home/NewArrival"

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <NewArrival />
        <Collections />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage