import React from "react";
import SearchField from "react-search-field";
import { Button, Form } from "react-bootstrap";
import logo from "./HMSlogo.png";
import { useState, useEffect } from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const PaymentHistory = (props) => {
  const { handleLogout, paymentData, setRouter, applicationStatus } = props;

  const [i, setI] = useState(0);

  return (
    <body>
      <section className="navbar">
        <section></section>

        <section className="paymentHistory">
          <div className="paymentHistoryContainer">
            return (
            {paymentData.length ? (<><div>
              <Form>
                <Form.Label className="label-left">Amount</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={paymentData[i].amount}
                ></Form.Control>

                <Form.Label className="label-left">
                  Payment Date (DD-MM-YYYY)
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={paymentData[i].paymentDate}
                ></Form.Control>
              </Form>
            </div>
            <div className="btnContainer">
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
                    <button
                      class="Button"
                      className="button_gray"
                      //MAKE THIS GREYED OUT
                    >
                      {" "}
                      Prev Page
                    </button>
                  )}
                </div>
                <div class="col-md-4">
                  <textbox className="label-down">
                    Page Number {i + 1} / {paymentData.length}
                  </textbox>
                </div>
                <div class="col-md-4">
                  {i + 1 == paymentData.length ? (
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
            </div></>) : (<div class="col-md-12">
                          <h2 className="titletext">No Payment History to Display</h2>
                        </div>)}
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

export default PaymentHistory;
