import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const AdminPaymentHistory = (props) => {
  const {
    handlelogout,
    paymentRecords,
    setRouter,
    calleditpaymenthistory,
    deletePaymentHistory
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
                        <div class="col-md-6">
                          <div
                            class="Button"
                            className="button_blue"
                            onClick={() => calleditpaymenthistory(paymentRecords[i])}
                          >
                            {" "}Edit Payment
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                           onClick={() => deletePaymentHistory(paymentRecords[i].id)}
                            class="Button"
                            className="button_purple"
                          >
                            {" "}
                            Delete Payment
                          </div>
                        </div>
                      </div>
                    {/* <div class="row">
                    <div class="col-auto">
                        <div
                          onClick={() => setRouter('home')}
                          class="Button"
                          className="button_blue"
                        >{" "}Edit Payment
                        </div>
                        <div class="col-auto">
                        <div
                          onClick={() => setRouter('home')}
                          class="Button"
                          className= "button_blue"
                        >{" "} Delete Payment
                        </div>
                        </div>
                      </div>
                    </div> */}
                  </Form>
                </div>
              );
            })}
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
            <h2 className="titletext"> PAYMENT HISTORY </h2>
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
