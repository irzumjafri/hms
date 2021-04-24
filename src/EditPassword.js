import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "./HMSlogo.png";
import { useState, useEffect } from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const EditPassword = (props) => {
  const {
    handleLogout,
    password,
    updatePassword,
    setRouter,
    applicationStatus,
  } = props;

  console.log(password)

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <body>
      <section className="navbar">
        <section></section>

        <section className="paymentHistory">
          <div className="paymentHistoryContainer">
            return (
            <div>
              <Form>
                <div class="col">
                  <Form.Label className="label-left">
                    Enter Current Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col">
                  <Form.Label className="label-left">
                    Enter New Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col">
                  <Form.Label className="label-left">
                    Confirm New Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  ></Form.Control>
                </div>
              </Form>
            </div>
            <div className="btnContainer">
              <div class="row">
                <div class="col-md-12">
                  {oldPassword == password && newPassword == cPassword ? (
                    <button class="Button" className="button_blue" onClick={() => updatePassword(newPassword)}>
                      {" "}
                      Change Password
                    </button>
                  ) : (
                    <button
                      class="Button"
                      className="button_gray"
                      //MAKE THIS GREYED OUT
                    >
                      {" "}
                      Change Password
                    </button>
                  )}
                </div>
              </div>
            </div>
            );
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
            <h2 className="titletext">PAYMENT HISTORY</h2>
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

export default EditPassword;
