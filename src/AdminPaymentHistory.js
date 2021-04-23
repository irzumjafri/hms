import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';

const AdminPaymentHistory = (props) => {
  const {
    handlelogout,
    paymentRecords,
    setRouter,
    calleditpaymenthistory,
    deletePaymentHistory,
    fetchPaymentHistory,
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

  return (
    <body>
      <section className="navbar">
        <section className="paymentHistory">
          <div className="paymentHistoryContainer">
            <div class="row">
            <div class="col-md-12">
                <div
                  onClick={() => setRouter("addpaymenthistory")}
                  class="Button"
                  className="button_green"
                >
                  {" "}
                  Add New Payment History
                </div>
              </div>
            </div>

            {paymentRecords.map((con, i) => {
              return (
                <div>
                  <Form>
                    <Form.Row>
                      <div class="col-md-12">
                        <Form.Label className="label-right">
                          Sender Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          value={paymentRecords[i].senderName}
                        ></Form.Control>
                      </div>
                    </Form.Row>

                    <Form.Row>
                      <div class="col-md-6">
                        <Form.Label className="label-left">Amount</Form.Label>
                        <Form.Control
                          type="text"
                          value={paymentRecords[i].amount}
                        ></Form.Control>
                      </div>
                      <div class="col-md-6">
                        <Form.Label className="label-right">
                          Payment Date (DD-MM-YYYY)
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={paymentRecords[i].paymentDate}
                        ></Form.Control>
                      </div>
                    </Form.Row>

                    <div class="row">
                        <div class="col-md-12">
                        <StyledPopup trigger={<div class = "Button" className= "button_purple">
                      Delete Payment</div>} position="center" modal nested>
                    <div>
                     You are about to delete this payment history. Do you want to continue?
                     </div>
                     <div class = "row">
                      <div class = "col-md-6">
                      
                     <button
                    
                         className="button_gray"
                       >
                         Cancel
                       </button> 

                       </div>
                       <div class = "col-md-6">
                       <button
                     onClick={() => deletePaymentHistory(paymentRecords[i].id)}
                         
                         className="button_red"
                       >
                       Delete Payment
                       </button>

                       </div>
                       </div>
                       </StyledPopup>
                        </div>
                      </div>

                  </Form>
                </div>
              );
            })}
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          {/* <p className="smalltext" onClick={handlelogout}>
            <span>Logout</span>
          </p> */}

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext"> PAYMENT HISTORY </h2>
            <p className="smalltext" onClick={() => fetchPaymentHistory()}>
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
export default AdminPaymentHistory;
