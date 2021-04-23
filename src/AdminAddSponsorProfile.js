import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const AdminAddSponsorProfile = (props) => {
  const {
    setRouter,
    addSponsorProfile,
    handlelogout,
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
                    <Form.Control
                      type="text"
                      required
                      value={preferredMediumOfCommunication}
                      onChange={(e) => setPreferredMediumOfCommunication(e.target.value)}
                    ></Form.Control>
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
                    <Form.Control
                      type="text"
                      required
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Payment Schedule
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={paymentSchedule}
                      onChange={(e) => setPaymentSchedule(e.target.value)}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <div class="row">
                  <div class="col-md-6">
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
                  </div>
                  <div class="col-md-6">
                    <div
                      onClick={() => {
                        setRouter("sponsorprofiles");
                      }}
                      class="Button"
                      className="button_redd"
                    >
                      {" "}
                          Discard Changes
                        </div>
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
          <SearchField placeholder="search..." classNames="search" />

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
