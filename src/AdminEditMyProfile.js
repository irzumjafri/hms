import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const AdminEditMyProfile = (props) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    setEmail,
    handlelogout,
    setFirstName,
    setLastName,
    setDateOfBirth,
    cnic,
    setCnic,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    department,
    setDepartment,
    institution,
    setInstitution,
    setRouter,
    editAdminProfile,
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
                  <Form.Label className="label-left">Address *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </div>

                <div class="col-md-6">
                  <Form.Label className="label-left">Department *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Institution *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>
              <div class="row">
                <div class="col-md-6">
                  <div
                    onClick={() => {
                      setRouter("home");
                      editAdminProfile();
                    }}
                    class="Button"
                    className="button_green"
                  >
                    Save Changes
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    onClick={() => setRouter("home")}
                    class="Button"
                    className="button_redd"
                  >
                    Discard Changes
                  </div>
                </div>
              </div>
            </Form>
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
            <h2 className="titletext">EDIT MY PROFILE</h2>
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

export default AdminEditMyProfile;
