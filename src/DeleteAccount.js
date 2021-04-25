import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "./HMSlogo.png";
import { useState, useEffect } from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';

const DeleteAccount = (props) => {
  const {
    handleLogout,
    password,
    setRouter,
    applicationStatus,
    deleteAccount,
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

  console.log(password)

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
                  Enter Password to continue deletion
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
                  {password == cPassword ? (
                                <StyledPopup
                                trigger={
                                  <div class="Button" className="button_redd">
                                    Delete Account
                                  </div>
                                }
                                position="center"
    
                                modal
                                nested
                              >
                                {(close) => (
                                  <div>
                                    <div>
                                      You are about to delete your account. Do you
                                      want to continue?
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
                                          onClick={() => deleteAccount()}
                                          className="button_red"
                                        >
                                          Delete Account
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </StyledPopup>
                    // <button class="Button" className="button_redd" onClick={() => deleteAccount()}>
                    //   {" "}
                    //   Delete Account
                    // </button>
                    //CSS BUTTON
                    //TRIGGER POPUP
                  ) : (
                    <button
                      class="Button"
                      className="button_gray"
                      //MAKE THIS GREYED OUT
                    >
                      {" "}
                      Delete Account
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
            <h2 className="titletext"> DELETE MY ACCOUNT </h2>
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

export default DeleteAccount;
