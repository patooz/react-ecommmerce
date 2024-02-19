import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from "react-bootstrap"
import Logo from "../../assets/images/sokoyetu11.png";
import Bars from "../../assets/images/bars.png";
import {Link} from "react-router-dom"
import AllMegaMenu from "../home/AllMegaMenu";

class NavMenuDesktop extends Component {

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
        <Navbar className="navbar" fixed={"top"} expand="lg" bg="light">
      <Container fluid={"true"} className="p-2 mb-0 fixed-top shadow-sm bg-white">
        <Row>

          <Col lg={4} md={4} sm={12} xs={12}>
            <img className="bar-img" onClick={this.MenuBarClickHandler} src={Bars} alt="" />
            <Link to="/">
            <img className="logo-img" src={Logo} alt="" />
            </Link>
            
          </Col>

          

          <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
            <div className="input-group w-100">
            <input type="text" className="form-control" />
            <Button type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
            </div>
          </Col>

          <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
          <Link to="/favourites" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-success">2</span></sup></Link>

            <Link to="/notifications" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-success">3</span></sup></Link>
            <a className="h4 btn"><i className="fa fa-mobile-alt"></i></a>
            <Link to="/login" className="h4 btn">LOGIN</Link>
            <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"> 3 Items</i></Link>

          </Col>


        </Row>


      </Container>
      
    </Navbar>
        </div>

        
      <div className={this.state.SideNavState}>
        <AllMegaMenu />
      </div>

      <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

      </div>
      
 
      </Fragment>
    )
  }
}

export default NavMenuDesktop