import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";
import { useState, useEffect } from "react";


const PaymentHistory = (props) => {
  const {
    handleLogout,
    paymentData,
    setRouter,
    applicationStatus
  } = props;

  const [i, setI] = useState(0);


  return (
    <body>
       <section className="navbar">
     
        <section>

        </section>


        <section className="paymentHistory">
        <div className="paymentHistoryContainer">

          return (
            <div><Form>
                <Form.Row>
                <div class = "col">
                <Form.Label className= "label-left">Amount</Form.Label>
                <Form.Control
                type="text"
                required
                value={paymentData[i].amount}
                ></Form.Control>
                </div>
                <div class = "col">
                <Form.Label className= "label-left">Payment Date (DD-MM-YYYY)</Form.Label>
                <Form.Control
                type="text"
                required
                value={paymentData[i].paymentDate}
                ></Form.Control>
                </div>
                </Form.Row>
                </Form>
                </div>
              <div className="btnContainer">
                <div class="row">
                  <div class="col-md-6">
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
                  <div class="col-md-6">
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
              </div>
                
            
          );
        </div>
        </section>

        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
           <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">PAYMENT HISTORY</h2>
        </nav>
        </nav>


        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
            <p className="smalltext" onClick={() => setRouter("faqs")}><span>FAQs</span></p>
          </navbar>
        </section>


        
      </section>
    </body>
  );
};

export default PaymentHistory;
