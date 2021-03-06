import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const AdminAddPayment = (props) => {
  const {
    setRouter,
    addPaymentHistory,
    sponsorData,
    handlelogout,
  } = props;

  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [i, setI] = useState(0);


  const fetchSponsorData = () => {
    var sponsor = [];
    {
      sponsorData.map((con, i) => {
          sponsor.push({ label: (sponsorData[i].firstName + " " + sponsorData[i].lastName), value: i});
      });
    }
    return sponsor;
  };

  return (
    <body>
    <section className="navbar">
      <section className="editMyProfileSponsor">
        <div className="editMyProfileSponsorContainer">


        <div>
                  <Form>
                    <Form.Row>
                      <div class="col-md-6">
                        <Form.Label className="label-left">
                          Sender Name *
                        </Form.Label>
                        <Dropdown
                        className="my-className"
                        options={fetchSponsorData()}
                        placeholder= {sponsorData[i].firstName + " " + sponsorData[i].lastName}
                        value= {sponsorData[i].firstName + " " + sponsorData[i].lastName}
                        onSelect={(i) => {
                          setI(i.value);
                        }} // always fires once a selection happens even if there is no change
                      />
                      </div>
                      <div class="col-md-6">
                        <Form.Label className="label-right">
                          Sender Email *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          value={sponsorData[i].email}
                        ></Form.Control>
                      </div>
                    </Form.Row>

                    <Form.Row>
                      <div class="col-md-6">
                        <Form.Label className="label-left">Amount *</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        ></Form.Control>
                      </div>
                      <div class="col-md-6">
                        <Form.Label className="label-right">
                          Payment Date (DD-MM-YYYY) *
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
                        <div
                         onClick=
                         {() => {
                           setRouter("paymenthistory");
                           addPaymentHistory({
                             senderName: (sponsorData[i].firstName + " " + sponsorData[i].lastName),
                             senderEmail: sponsorData[i].email,
                             amount: amount,
                             paymentDate: paymentDate
                           });
                         }} 
                          class="Button"
                          className="button_green"
                        >
                          {" "}
                          Add Entry
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          onClick={() => {
                            setRouter("paymenthistory");
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
         

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext"> ADD PAYMENT ENTRY</h2>
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

export default AdminAddPayment;
