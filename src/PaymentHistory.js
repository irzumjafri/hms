import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";

const PaymentHistory = (props) => {
  const {
    handleLogout,
    paymentData,
    setRouter,
    applicationStatus
  } = props;

  return (
    <body>
       <section className="navbar">
     
        <section>

        </section>


        <section className="paymentHistory">
        <div className="paymentHistoryContainer">
        {paymentData.map((con, i) => {
          return (
                <Form>
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
            
          );
        })}
        </div>
        </section>

        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
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
