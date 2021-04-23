import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const AdminEditSponsorProfile = (props) => {
  const { sponsorProfile, setRouter, editSponsorProfile, handlelogout } = props;

  var id = sponsorProfile.id;
  var applicationStatus = sponsorProfile.applicationStatus;
  var howToAssignChildren = sponsorProfile.howToAssignChildren;

  const [email, setEmail] = useState(sponsorProfile.email);
  const [firstName, setFirstName] = useState(sponsorProfile.firstName);
  const [lastName, setLastName] = useState(sponsorProfile.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(sponsorProfile.dateOfBirth);
  const [cnic, setCnic] = useState(sponsorProfile.cnic);
  const [phoneNumber, setPhoneNumber] = useState(sponsorProfile.phoneNumber);
  const [address, setAddress] = useState(sponsorProfile.address);
  const [
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
  ] = useState(sponsorProfile.preferredMediumOfCommunication);
  const [numberOfSponsoredChildren, setNumberOfSponsoredChildren] = useState(
    sponsorProfile.numberOfSponsoredChildren
  );
  const [paymentMethod, setPaymentMethod] = useState(
    sponsorProfile.paymentMethod
  );
  const [paymentSchedule, setPaymentSchedule] = useState(
    sponsorProfile.paymentSchedule
  );

  return (
    <body>
      <section className="navbar">
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <div>
              <Form>
                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">First Name *</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">Last Name *</Form.Label>
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
<<<<<<< Updated upstream
                      onChange={(e) => setAddress(e.target.value)}
=======
                      
>>>>>>> Stashed changes
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
                      onChange={(e) =>
                        setPreferredMediumOfCommunication(e.target.value)
                      }
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
                      onClick={() => {
                        setRouter("sponsorprofiles");
                        editSponsorProfile({
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
                          applicationStatus: applicationStatus,
                          howToAssignChildren: howToAssignChildren,
                          id: id,
                        });
                      }}
                      class="Button"
                      className="button_green"
                    >
                      {" "}
                      Save Changes
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
            <h2 className="titletext">SPONSORSHIP PROFILE</h2>
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

export default AdminEditSponsorProfile;
