import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/sokoyetu11.png";
import MobileMegaMenu from "../home/MobileMegaMenu";

class NavMenuMobile extends Component {
    constructor(){
      super();
      this.state={
        SideNavState: "sideNavClose",
        ContentOverlayState: "ContentOverlayClose"
      }
    }

    MenuBarClickHandler = () => {
      this.SideNavOpenClose()
    }


    SideNavOpenClose = () => {
      let SideNavState = this.state.SideNavState;
      let ContentOverState = this.state.ContentOverlayState;
      if (SideNavState === "sideNavOpen") {
        this.setState({SideNavState: "sideNavClose", ContentOverState: "ContentOverlayClose"})
        
      } else {
        this.setState({SideNavState: "sideNavOpen", ContentOverState: "ContentOverlayOpen"})
        
      }
    }

    ContentOverlayClickHandler = () => {
      this.SideNavOpenClose()
    }

  render() {
    return (
      <Fragment>
                <div className="TopSectionDown">

      <Container fluid={"true"} className="p-2 mb-0 fixed-top shadow-sm bg-white">
        <Row>

          <Col lg={4} md={4} sm={12} xs={12}>
          <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i></Button>
            <Link to="/">
            <img className="logo-img" src={Logo} alt="" />

            </Link>

            <Button className="cart-btn"><i className="fa fa-shopping-cart"> 3 Items</i></Button>
          </Col>



        </Row>


      </Container>

      <div className={this.state.SideNavState}>
        <MobileMegaMenu />
      </div>

      <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

      </div>
      

        </div>
 
      </Fragment>
    )
  }
}

export default NavMenuMobile