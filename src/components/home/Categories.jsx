import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap"

export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <div className="section-title text-center mb-55">
            <h2>CATEGORIES</h2>
            <p>Product Categories</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Kettles.png" alt=""/>
                    <h5 className="category-name">Kettles</h5>
                    

                  </Card.Body>
            </Card>

                </Col>

                <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Coffee-Makers.png" alt=""/>
                    <h5 className="category-name">Coffee Makers</h5>
                    

                  </Card.Body>
            </Card>

                </Col>

                <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Microwaves.png" alt=""/>
                    <h5 className="category-name">Microwaves and Ovens</h5>
                    

                  </Card.Body>
            </Card>

                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Home/Freelinks/Iron-Boxes.png" alt=""/>
                    <h5 className="category-name">Iron Boxes</h5>
                    

                  </Card.Body>
            </Card>

                </Col>


              </Row>
            </Col>

            <Col className="p-1" key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Home/Freelinks/Washers-&-Dryers.png" alt=""/>
                    <h5 className="category-name">Washers and Driers</h5>
                    

                  </Card.Body>
            </Card>

                </Col>

                <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Fridges.png" alt=""/>
                    <h5 className="category-name">Fridges</h5>
                    

                  </Card.Body>
            </Card>

                </Col>

                <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Dispensers.png" alt=""/>
                    <h5 className="category-name">Water Dispensers</h5>
                    

                  </Card.Body>
            </Card>

                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>

                <Card className="h-100 w-100 text-center">  
                  <Card.Body>
                  <img className="center" src="https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Blenders.png" alt=""/>
                    <h5 className="category-name">Blenders</h5>
                    

                  </Card.Body>
            </Card>

                </Col>


              </Row>
            </Col>

            
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories