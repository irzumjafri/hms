import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import AdminEditSponsorProfile from "./AdminEditSponsorProfile";
import { Button, Form } from "react-bootstrap";

const AdminSponsorProfiles = (props) => {
  const {
    handlelogout,
    sponsorData,
    deleteSponsorProfile,
    setRouter,
    calladmineditprofile,
    fetchSponsorData
  } = props;

  const [i, setI] = useState(0);

  return (
    <body>
      <section className="navbar">
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <div class="row">
              <div class="col-md-6">
                <textbox className="label-left"> Add Filter</textbox>
                {/* convert to dropdown */}
              </div>
              <div class="col-md-6">
             
                <textbox className="label-left">
                  Total Active Sponsors: {sponsorData.length}
                </textbox>
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
            </div>
              return (
                <div>
                  <Form>
                    <Form.Row>
                      <div class="col-md-6">
                        <Form.Label className="label-left">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          value={sponsorData[i].firstName}
                        ></Form.Control>
                      </div>
                      <div class="col-md-6">
                        <Form.Label className="label-right">
                          Last Name
                        </Form.Label>
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
                        <div
                          onClick={() =>
                            deleteSponsorProfile(sponsorData[i].id)
                          }
                          class="Button"
                          className="button_redd"
                        >
                          {" "}
                          Delete this Profile
                        </div>
                      </div>
                    </div>
                  </Form>
                  <div class ="row">
                  <div class = "col-md-4">
                  {i ? (<button
                  onClick={() => setI(i-1)}
                  class="Button"
                  className="button_blue"
                >
                  {" "}
                  Prev Page
                </button>) : (<button
                  
                  className = "button_gray"
                >
                  {" "}
                  Prev Page
                </button>)}
                </div>
                <div class = "col-md-4"> 
                <textbox className="label-down">
              Page Number {i+1} / {sponsorData.length}
                </textbox> 
                </div>
                <div class = "col-md-4"> 
                {i+1==sponsorData.length ? (<button
                  
                  className = "button_gray"
                  //MAKE THIS GREYED OUT
                >
                  {" "}
                  Next Page
                </button>) : (<button
                  onClick={() => setI(i+1)}
                  class="Button"
                  className="button_blue"
                >
                  {" "}
                  Next Page
                </button>)}
                </div>
                </div>
                  
                
                </div>
              );
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
            <p className="smalltext" onClick={() => fetchSponsorData()}>
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
