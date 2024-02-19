import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import validation from "../../validation/validation";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Contact extends Component {


    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    nameOnChange = (event) => {
        let name = event.target.value;
        // alert(name);
        this.setState({name: name})
    }

    emailOnChange = (event) => {
        let email = event.target.value;
        // alert(email);
        this.setState({email: email})
    }

    messageOnChange = (event) => {
        let message = event.target.value;
        // alert(message);
        this.setState({message: message})
    }

    onFormSubmit = (event) => {
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let sendButton = document.getElementById("sendButton");
        let ContactForm = document.getElementById("ContactForm")

        if (message?.length == 0) {
            toast.error("You forgot the Message", {theme: "colored",})
        }
        else if (name?.length == 0) {
            toast.error("Your name is Required", {theme: "colored",})
        }
        else if (email?.length == 0) {
            toast.error("Your email is required", {theme: "colored",})
        }
        else if (!(validation.NameRegx).test(name)) {
            toast.error("Invalid Name", {theme: "colored",});
        }
        else {
            sendButton.innerHTML = "Sending...";
            let MyFormData = new FormData();
            MyFormData.append("name", name)
            MyFormData.append("email", email)
            MyFormData.append("message", message)

            axios.post(AppUrl.PostContact, MyFormData )
              .then (function (response) {
                if (response.status == 200 && response.data == 1) {
                    toast.success("Message sent!", {theme: "colored",});
                    sendButton.innerHTML = "Send";
                    ContactForm.reset();
                }
                else {
                    toast.error("An Error occurred", {theme: "colored",});
                    sendButton.innerHTML = "Send";
                }
              })
              .catch(function (error) {
                toast.error(error, {theme: "colored",});
                sendButton.innerHTML = "Send";
              });
        }
        event.preventDefault()
    }
  render() {
    return (
        <Fragment>
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>
                    <Row className="text-right">
                        <Col className="flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                            <Form id="ContactForm" onSubmit={this.onFormSubmit} className="onboardForm">
                                <h4 className="section-title-login">Contact Us</h4>
                                <h6 className="section-sub-title">Please enter your Name</h6>
                                <input onChange={this.nameOnChange} type="text" name="name" className="form-control m-2" placeholder="Enter Your Name" />
                                <input onChange={this.emailOnChange} type="email" name="email" className="form-control m-2" placeholder="Enter Email" />
                                <Form.Control onChange={this.messageOnChange} className="form-control m-2" placeholder="Enter Your Message" as="textarea" rows={3} />
                                <Button id="sendButton" type="submit" className="btn btn-block m-2 site-btn-login">Submit</Button>

                            </Form>
                        </Col>

                        <Col className="p-0 m-0 Desktop" lg={6} md={6} sm={6} xs={6}> <br /> <br />
                            <p className="section-contact">
                            P.O BOX 87, <br /> 
                            Kabarnet - 30400, <br /> 
                            Baringo, Kenya <br />
                            Email: support@sokoyetu.co.ke
                            </p>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Contact