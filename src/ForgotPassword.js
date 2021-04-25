import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "./HMSlogo.png";
import { useState, useEffect } from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";

const ForgotPassword = (props) => {
  const {
    forgotPassword,
    setRouter,
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


  const [resetEmail, setResetEmail] = useState("");

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
                    Enter email of your account
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                  ></Form.Control>
                </div>
              </Form>
            </div>
            <div className="btnContainer">
              <div class="row">
                <div class="col-md-12">
                <StyledPopup
                      trigger={
                        <div class="Button" className="button_green">
                          Reset Password
                        </div>
                      }
                      position="center"
                      modal
                      nested
                    >
                      {(close) => (
                        <div>
                          <div>
                            Email Sent. Please check your email to reset your password.
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <button
                                onClick={() => {
                                  forgotPassword(resetEmail);
                                  setRouter("")
                                  close();
                                }}
                                className="button_green"
                              >
                                Okay
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </StyledPopup>
                </div>
              </div>
            </div>
            );
          </div>
        </section>

        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <nav className="navbarContainer">
            <h2 className="titletext"> FORGOT PASSWORD </h2>
          </nav>
        </nav>
      </section>
    </body>
  );
};

export default ForgotPassword;
