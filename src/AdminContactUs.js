import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";

const AdminContactUs = (props) => {
  const {
    handlelogout,
    setRouter,
    contactUs
  } = props;
  console.log(contactUs,"inside0")
  console.log(contactUs.phoneNumber,"inside")

  return (
    <body>
            <section className="navbar">
      
      <section>
      </section>
      <section className="contactUs">
        <div className="contactUsContainer">
        <Form>
              <div class = "col">
              <Form.Label className= "label-left">Phone Number</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.phoneNumber}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Email Address</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.email}
              ></Form.Control>
              </div>

              <div class = "col">
              <Form.Label className= "label-left">Address</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.address}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Facebook</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.facebook}
              ></Form.Control>
              </div>
              
              <div class = "col">
              <Form.Label className= "label-left">Instagram</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.instagram}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Twitter</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.twitter}
              ></Form.Control>
              </div>

              <div class = "col">
              <Form.Label className= "label-left">YouTube</Form.Label>
              <Form.Control
              type="text"
              value={contactUs.youtube}
              ></Form.Control>
              </div>
              </Form>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handlelogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => setRouter("home")}><span>HOME PAGE</span></p>
          <h2 className="titletext">CONTACT US</h2>
        </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
            <p className="smalltext" onClick={() => setRouter("faqs")}><span>FAQs</span></p>
          </navbar>
        </section>
      </section>
    </body>
  );
};


export default AdminContactUs;
