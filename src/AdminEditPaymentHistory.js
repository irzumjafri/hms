import React from "react";
import SearchField from "react-search-field";
import { Button, Form } from "react-bootstrap";
import logo from "./HMSlogo.png";
import { useState, useEffect } from "react";


const AdminEditPaymentHistory = (props) => {
  const {
    handlelogout,
    paymentData,
    setRouter,
    editPaymentHistory
  } = props;

  console.log(paymentData, 'editing admin')
  const [amount, setAmount] = useState(paymentData.amount);
  const [paymentDate, setPaymentDate] = useState(paymentData.paymentDate);

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <Form>
              <Form.Row>
                <div class="col">
                  <Form.Label className="label-left">Amount</Form.Label>
                  <Form.Control
                    ype="text"
                    autoFocus
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col">
                  <Form.Label className="label-left">
                    Payment Date (DD-MM-YYYY)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>
              <div class="row">
                <div class="col-md-6">
                  <div onClick={() => setRouter("home")} class="Button" className="button_green">
                    Save Changes
                  </div>
                </div>
                <div class="col-md-6">
                  <div  onClick={() => setRouter("paymenthistory")} class="Button" className="button_redd">
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
          <p className="smalltext" onClick={handlelogout()}>
            <span>Logout</span>
          </p>
        
          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">EDIT PAYMENT HISTORY</h2>
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

export default AdminEditPaymentHistory;
