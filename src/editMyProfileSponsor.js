import React from "react";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const EditMyProfileSponsor = (props) => {
  const {
    id,
    fetchSponsorData,
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
    applicationStatus,
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

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <Form>
              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
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
                    DoB (DD-MM-YYYY) *
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
                  <Form.Label className="label-left">Address *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Mode of Communication *
                  </Form.Label>
                  <Dropdown
                    className="my-className"
                    options={[
                      { value: "Phone/Whatsapp", label: "Phone / Whatsapp" },
                      { value: "Email", label: "Email" },
                    ]}
                    required
                    placeholder={preferredMediumOfCommunication}
                    value={preferredMediumOfCommunication}
                    onChange={(i) => setPreferredMediumOfCommunication(i.value)}
                  />
                  {/* <Form.Control
                    type="text"
                    required
                    value={preferredMediumOfCommunication}
                    onChange={(e) =>
                      setPreferredMediumOfCommunication(e.target.value)
                    } // make it into drop down menu
                  ></Form.Control> */}
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">
                    Total Sponsored Children *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={numberOfSponsoredChildren}
                    // onChange={(e) => setNumberOfSponsoredChildren(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Payment Method *
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
                  {/* <Form.Control
                    type="text"
                    required
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)} // make it into drop down menu
                  ></Form.Control> */}
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">
                    Payment Schedule *
                  </Form.Label>
                  {/* <Form.Control
                    type="text"
                    required
                    value={paymentSchedule}
                    onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
                  ></Form.Control> */}
                  <Dropdown
                    className="my-className"
                    options={[
                      { value: "Quarterly", label: "Quarterly" },
                      { value: "Monthly", label: "Monthly" },
                      { value: "Annually", label: "Annualy" },
                    ]}
                    required
                    placeholder={paymentSchedule}
                    value={paymentSchedule}
                    onSelect={(i) => setPaymentSchedule(i.value)}
                  />
                </div>

                <div class="col-md-6">
                  <Form.Label className="label-right"></Form.Label>
                  <Form.Control
                    className="blue"
                    type="text"
                    required
                    value={paymentSchedule}
                    onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
                  ></Form.Control>
                </div>
              </Form.Row>
              <div class="row">
                {firstName &&
                lastName &&
                email &&
                dateOfBirth &&
                cnic &&
                phoneNumber &&
                address &&
                preferredMediumOfCommunication &&
                numberOfSponsoredChildren &&
                paymentMethod &&
                paymentSchedule ? (
                  <div class="col-md-6">
                    <div
                      onClick={() => {
                        setRouter("registered");
                        editSponsorProfile();
                      }}
                      class="Button"
                      className="button_green"
                    >
                      Save Changes
                    </div>
                  </div>
                ) : (
                  <div class="col-md-6">
                    <div class="Button" className="button_gray">
                      Save Changes
                    </div>
                  </div>
                )}
                <div class="col-md-6">
                  <StyledPopup
                    trigger={
                      <div class="Button" className="button_redd">
                        Discard Changes
                      </div>
                    }
                    position="center"
                    modal
                    nested
                  >
                    {(close) => (
                      <div>
                        <div>
                          You are about to discard the changes made. Do you want
                          to continue?
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <button
                              onClick={() => {
                                console.log("modal closed ");
                                close();
                              }}
                              className="button_gray"
                            >
                              Cancel
                            </button>
                          </div>
                          <div class="col-md-6">
                            <button
                              onClick={() => {
                                fetchSponsorData(id);
                                setRouter("registered");
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
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <div className="smalltext">
            <Dropdown
              className="my-className"
              options={[
                { value: "changepw", label: "Edit Password" },
                { value: "editprofile", label: "Edit Profile" },
                { value: "deleteacc", label: "Delete Account" },
                { value: "logout", label: "Log Out" },
              ]}
              placeholder="My Account"
              value="My Account"
              onSelect={(i) => {
                if (i.value == "logout") {
                  handleLogout();
                } else if (i.value == "editprofile") {
                  setRouter("editmyprofile");
                } else if (i.value == "changepw") {
                  setRouter("editpassword");
                } else if (i.value == "deleteacc") {
                  setRouter("deleteaccount");
                }
              }} // always fires once a selection happens even if there is no change
            />
          </div>

          <nav className="navbarContainer">
            <p
              className="smalltext"
              onClick={() =>
                applicationStatus
                  ? setRouter("registered")
                  : setRouter("unregistered")
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">EDIT MY PROFILE</h2>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}>
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("faqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default EditMyProfileSponsor;
