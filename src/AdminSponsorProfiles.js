import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import AdminEditSponsorProfile from "./AdminEditSponsorProfile";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";

const AdminSponsorProfiles = (props) => {
  const {
    handlelogout,
    sponsorData,
    deleteSponsorProfile,
    setRouter,
    calladmineditprofile,
    fetchSponsorData,
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

  const [i, setI] = useState(0);

  return (
    <body>
      <section className="navbar">
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <div class="row">
              <div class="col-md-12">
                <textbox className="titletext2">
                  Total Active Sponsors: {sponsorData.length}
                </textbox>
              </div>
            </div>
            <div class="col-md-12">
              <div
                onClick={() => setRouter("adminaddsponsorprofile")}
                class="Button"
                className="button_green"
              >
                {" "}
                Add New Sponsors
              </div>
            </div>
            return (
            {sponsorData.length ? (
              <div>
                <Form>
                  <Form.Row>
                    <div class="col-md-6">
                      <Form.Label className="label-left">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].firstName}
                      ></Form.Control>
                    </div>
                    <div class="col-md-6">
                      <Form.Label className="label-right">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].lastName}
                      ></Form.Control>
                    </div>
                  </Form.Row>

                  <Form.Row>
                    <div class="col-md-6">
                      <Form.Label className="label-left">Email</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].email}
                      ></Form.Control>
                    </div>
                    <div class="col-md-6">
                      <Form.Label className="label-right">
                        Date of Birth (DD-MM-YYYY)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].dateOfBirth}
                      ></Form.Control>
                    </div>
                  </Form.Row>

                  <Form.Row>
                    <div class="col-md-6">
                      <Form.Label className="label-left">CNIC</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].cnic}
                      ></Form.Control>
                    </div>
                    <div class="col-md-6">
                      <Form.Label className="label-right">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].phoneNumber}
                      ></Form.Control>
                    </div>
                  </Form.Row>

                  <Form.Row>
                    <div class="col-md-6">
                      <Form.Label className="label-left">Address</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].address}
                      ></Form.Control>
                    </div>

                    <div class="col-md-6">
                      <Form.Label className="label-left">
                        Preferred Medium of Communication
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].preferredMediumOfCommunication}
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
                        value={sponsorData[i].numberOfSponsoredChildren}
                      ></Form.Control>
                    </div>

                    <div class="col-md-6">
                      <Form.Label className="label-left">
                        Payment Method
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={sponsorData[i].paymentMethod}
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
                        value={sponsorData[i].paymentSchedule}
                      ></Form.Control>
                    </div>
                  </Form.Row>

                  <div class="row">
                    <div class="col-md-6">
                      <div
                        onClick={() => calladmineditprofile(sponsorData[i])}
                        class="Button"
                        className="button_blue"
                      >
                        {" "}
                        Edit this Profile
                      </div>
                    </div>
                    <div class="col-md-6">
                      <StyledPopup
                        trigger={
                          <div class="Button" className="button_redd">
                            Delete this Profile
                          </div>
                        }
                        position="center"
                        modal
                        nested
                      >
                        <div>
                          You are about to delete this profile. Do you want to
                          continue?
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <button className="button_gray">Cancel</button>
                          </div>
                          <div class="col-md-6">
                            <button
                              onClick={() =>
                                deleteSponsorProfile(sponsorData[i].id)
                              }
                              className="button_red"
                            >
                              Delete this Profile
                            </button>
                          </div>
                        </div>
                      </StyledPopup>
                    </div>
                  </div>
                </Form>
                <div class="row">
                  <div class="col-md-4">
                    {i ? (
                      <button
                        onClick={() => setI(i - 1)}
                        class="Button"
                        className="button_blue"
                      >
                        {" "}
                        Prev Page
                      </button>
                    ) : (
                      <button className="button_gray"> Prev Page</button>
                    )}
                  </div>
                  <div class="col-md-4">
                    <textbox className="label-down">
                      Page Number {i + 1}/{sponsorData.length}
                    </textbox>
                  </div>
                  <div class="col-md-4">
                    {i + 1 == sponsorData.length ? (
                      <button
                        className="button_gray"
                        //MAKE THIS GREYED OUT
                      >
                        {" "}
                        Next Page
                      </button>
                    ) : (
                      <button
                        onClick={() => setI(i + 1)}
                        class="Button"
                        className="button_blue"
                      >
                        {" "}
                        Next Page
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-md-12">
                <h2 className="titletext">No Sponsors to Display</h2>
              </div>
            )}
            );
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
            <h2 className="titletext">SPONSORSHIP PROFILE</h2>
            <p className="smalltext1" onClick={() => fetchSponsorData()}>
              <span>Sync</span>
            </p>
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
export default AdminSponsorProfiles;
