import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';
import { Dropdown, Selection } from "react-dropdown-now";
 

const AdminAddSponsorProfile = (props) => {
  const {
    setRouter,
    addSponsorProfile,
    handlelogout,
    StyledPopup = Styled(Popup)`
    // use your custom style for ".popup-overlay"
    &-overlay {
      background: rgba(0, 0, 0, 0.5);
    }
    // use your custom style for ".popup-content"
    &-content {
      align-items: center;
      justify-content: center;
      margin: auto;
      background: white;
      width: 40%;
      padding: 5px;
      border-radius: 10px;
      font-size: 18px;
      padding: 2%;
    }
    
    &-content .button_green
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #33773d;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: max-content;
     
      padding: 10px 10px;
    }
  
    &-content .button_gray
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #d3d3d3;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    &-content .button_blue
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #529cea;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: max-content;
     
      padding: 10px 10px;
    }
  
    &-content .button_red
    {
  
      border: none;
      outline: none;
      //padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #ff0033;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center
      min-width: max-content;
     
      padding: 10px 10px;
  
    }
    `,
  } = props;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
  ] = useState("");
  const [numberOfSponsoredChildren, setNumberOfSponsoredChildren] = useState(
    ""
  );
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSchedule, setPaymentSchedule] = useState("");

  return (
    <body>
      <section className="navbar">
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">


            <div>
              <Form>
                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      First Name *
                        </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Last Name *
                        </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">Email *</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Date of Birth (DD-MM-YYYY) *
                        </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">CNIC</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={cnic}
                      onChange={(e) => setCnic(e.target.value)}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Phone Number *
                        </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">Address</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                  </div>

                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Preferred Medium of Communication *
                        </Form.Label>
                        <Dropdown
                    className="my-className"
                    options={[
                      { value: "Phone/Whatsapp", label: "Phone / Whatsapp" },
                      { value: "Email", label: "Email" },
                    ]}
                    required
                    value={preferredMediumOfCommunication}
                    onChange={(i) => setPreferredMediumOfCommunication(i.value)}
                  />
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Number of Sponsored Children
                        </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={numberOfSponsoredChildren}
                      onChange={(e) => setNumberOfSponsoredChildren(e.target.value)}
                    ></Form.Control>
                  </div>

                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Payment Method
                        </Form.Label>
                        <Dropdown
                    className="my-className"
                    options={[
                      { value: "Cash", label: "Cash" },
                      { value: "Online Transfer", label: "Online Transfer" },
                      { value: "Cheque", label: "Cheque" },
                    ]}
                    required
                    value={paymentMethod}
                    onChange={(i) => setPaymentMethod(i.value)}
                  />
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Payment Schedule
                    </Form.Label>
                    <Dropdown
                    className="my-className"
                    options={[
                      { value: "Quarterly", label: "Quarterly" },
                      { value: "Monthly", label: "Monthly" },
                      { value: "Annually", label: "Annualy" },
                    ]}
                    required
                    placeholder="Select"
                    value={paymentSchedule}
                    onSelect={(i) => setPaymentSchedule(i.value)}
                  />
                  </div>
                </Form.Row>

                <div class="row">
                  {(firstName && lastName && email && dateOfBirth && cnic && phoneNumber && address && preferredMediumOfCommunication && numberOfSponsoredChildren && paymentMethod && paymentSchedule) ? (<div class="col-md-6">
                    <div
                      onClick=
                      {() => {
                        setRouter("home");
                        addSponsorProfile({
                          firstName: firstName,
                          lastName: lastName,
                          email: email,
                          dateOfBirth: dateOfBirth,
                          cnic: cnic,
                          phoneNumber: phoneNumber,
                          address: address,
                          preferredMediumOfCommunication: preferredMediumOfCommunication,
                          numberOfSponsoredChildren: numberOfSponsoredChildren,
                          paymentMethod: paymentMethod,
                          paymentSchedule: paymentSchedule,
                          applicationStatus: "Accepted",
                          howToAssignChildren: "auto",
                        });
                      }}
                      class="Button"
                      className="button_green"
                    >
                      {" "}
                          Create Profile
                        </div>
                  </div>) : (<div class="col-md-6">
                    <div
                      class="Button"
                      className="button_gray"
                    >
                      {" "}
                          Create Profile
                        </div>
                  </div>)}
                  
                  <div class="col-md-6">
                  <StyledPopup trigger={<div class = "Button" className= "button_redd">
                     Discard Changes</div>} position="center" modal nested>


                     {close => (
      <div >
        <div>
          You are about to discard the changes made. Do you want to continue?
        </div>

        <div class = "row">
                      <div class = "col-md-6">
                      
                     <button
                        onClick={() => {
                          console.log('modal closed ');
                          close();
                        }}
                         className="button_gray"
                       >
                         Cancel
                       </button> 

                       </div>
                       <div class = "col-md-6">
                       <button
                         onClick={() => {
                          setRouter("sponsorprofiles");
                        }}
                         
                         className="button_red"
                       >
                        Discard Changes
                       </button>

                       </div>
                       </div>

      </div>
    )}
                       </StyledPopup>
                  </div>
                </div>
              </Form>
            </div>



          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handlelogout}>
            <span>Logout</span>
          </p>
          

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext"> ADD NEW SPONSOR PROFILE</h2>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p
              className="smalltext"
              onClick={() => setRouter("admincontactus")}
            >
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("adminfaqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>






  );
};

export default AdminAddSponsorProfile;
