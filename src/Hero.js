import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import {Button, Form} from 'react-bootstrap';


const EditMyProfileSponsor = (props) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    setEmail,
    handleLogout,
    setFirstName,
    setLastName,
    setDateOfBirth,
    cnic,
    setCnic,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
    numberOfSponsoredChildren,
    setNumberOfSponsoredChildren,
    paymentMethod,
    setPaymentMethod,
    paymentSchedule,
    setPaymentSchedule,
    setRouter,
    editSponsorProfile,
    applicationStatus
  } = props;

  return (
    <body>
      <section className="navbar">
      <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">EDIT MY PROFILE</h2>
        </nav>
        <section>
          <button onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}> HOME PAGE </button>
        </section>
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <Form>
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">First Name *</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Last Name *</Form.Label>
            <Form.Control
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">Email *</Form.Label>
            <Form.Control
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
            </Form.Control>
            </div>
            <div  class = "col-md-6">
            <Form.Label className= "label-right">Date of Birth (DD-MM-YYYY) *</Form.Label>
            <Form.Control
              type="text"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            >
              </Form.Control>
            </div >
            </Form.Row>

            <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">CNIC</Form.Label>
            <Form.Control
             type="text"
             required
             value={cnic}
             onChange={(e) => setCnic(e.target.value)}
            >
            </Form.Control>
            </div>
            <div class = "col-md-6">
            <Form.Label className= "label-right">Phone Number *</Form.Label>
            <Form.Control
             type="text"
             required
             value={phoneNumber}
             onChange={(e) => setPhoneNumber(e.target.value)}
            >
              </Form.Control>
            </div >
            </Form.Row >

            <Form.Row> 
              <div class = "col-md-6">
            <Form.Label className= "label-left">Address *</Form.Label>
            <Form.Control
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            >
            </Form.Control>
            </div>
            <div class = "col-md-6">
            <Form.Label className= "label-right">Preferred Medium of Communication *</Form.Label>
            <Form.Control
              type="text"
              required
              value={preferredMediumOfCommunication}
              onChange={(e) =>
                setPreferredMediumOfCommunication(e.target.value)
              } // make it into drop down menu
            >
              </Form.Control>
            </div>
            </Form.Row>

            <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">Number of Sponsored Children *</Form.Label>
            <Form.Control
              type="text"
              required
              value={numberOfSponsoredChildren}
              onChange={(e) => setNumberOfSponsoredChildren(e.target.value)}
            >
            </Form.Control>
            </div>
            <div class = "col-md-6" >
            <Form.Label className= "label-right">Payment Method *</Form.Label>
            <Form.Control
              type="text"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)} // make it into drop down menu
            >
              </Form.Control>
            </div>
            </Form.Row>
            
            <Form.Row>
              <div class = "col-md-6" >
            <Form.Label className= "label-left">Payment Schedule *</Form.Label>
            <Form.Control
              type="text"
              required
              value={paymentSchedule}
              onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
            >
            </Form.Control>
            </div>

            <div class = "col-md-6" >
            <Form.Label className = "label-right"></Form.Label>
            <Form.Control className = "blue"
              type="text"
              required
              value={paymentSchedule}
              onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
            >
            </Form.Control>
            </div>
            </Form.Row>  
            <div class = "row">
              <div class = "col-md-6" >
                <div onClick={() => {setRouter("registered");editSponsorProfile();}} class = "Button" className="button_green">Save Changes</div>
              </div>
              <div class = "col-md-6" >
                <div onClick={() => setRouter("registered")} class = "Button" className="button_redd">Discard Changes</div>
              </div>
            </div>

            </Form>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
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

export default EditMyProfileSponsor;
