import axios from "axios"
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap"
import AppUrl from "../../api/AppUrl"

export class Categories extends Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    axios.get(AppUrl.CategoryDetails).then(response => {
      this.setState({
        categories: response.data
      })
    }).catch(error => {
        
    })
}

  render() {
    const Catlist = this.state.categories;
    const MyView = Catlist.map((Catlist, i) => {
      return <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>

      <Card className="h-100 w-100 text-center">  
        <Card.Body>
        <img className="center" src={Catlist.category_image} alt=""/>
          <h5 className="category-name">{Catlist.category_name}</h5>
          

        </Card.Body>
  </Card>

      </Col>
    })
    return (
      <Fragment>
        <Container>
        <div className="section-title text-center mb-55">
            <h2>CATEGORIES</h2>
            <p>Product Categories</p>
          </div>
          <Row>
            {MyView}
            
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories