import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const AdminPaymentHistory = (props) => {
  const {
    handlelogout,
    paymentDate,
    amount,
    setRouter,
    applicationStatus,
  } = props;

  return (
    <body>
      <section className="navbar">
        <section className="paymentHistory">
          <div className="paymentHistoryContainer">

          <div class="row">
                <div class="col-md-12">
                  <div class="Button" className="button_green">
                    {" "}
                    Add Payment
                  </div>
                </div>
              </div>

            {/* ONCHANGE */}

            <Form>
              <Form.Row>
                <div class="col">
                  <Form.Label className="label-left">Amount</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={amount}
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
                  ></Form.Control>
                </div>
              </Form.Row>

              <div class="row">
                <div class="col-md-12">
                  <div class="Button" className="button_blue">
                    {" "}
                    Edit Payment
                  </div>
                </div>
              </div>




              
            </Form>
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
            <h2 className="titletext"> ADMIN PAYMENT HISTORY</h2>
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
