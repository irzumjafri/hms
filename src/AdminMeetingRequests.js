import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const AdminMeetingRequests = (props) => {
  const {
    handleLogout,
    preferredMeetingDate,
    hour,
    minutes,
    amPm,
    backUpDatesAndTimes,
    purpose,
    setRouter,
  } = props;

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="requestAMeeting">
          <div className="requestAMeetingContainer">
            <Form>
              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">
                    Meeting Date (DD-MM-YYYY) *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={preferredMeetingDate}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Meeting Time (hh:mm)
                  </Form.Label>
                  <div class="form-row">
                    <div class="col-md-3">
                      <Form.Control type="text" value={hour}></Form.Control>
                    </div>
                    <p className="label-right">:</p>
                    <div class="col-md-3">
                      <Form.Control type="text" value={minutes}></Form.Control>
                    </div>
                    <div class="col-md-3">
                      <Form.Control type="text" value={amPm}></Form.Control>
                    </div>
                  </div>
                </div>
              </Form.Row>

              <div class="col-md-13">
                <Form.Label className="label-left">
                  Backup Date(s) and Time(s)
                </Form.Label>
                <Form.Control
                  type="text"
                  value={backUpDatesAndTimes}
                ></Form.Control>
              </div>
              <div class="col-md-13">
                <Form.Label className="label-left">Purpose</Form.Label>
                <Form.Control type="text" value={purpose}></Form.Control>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="Button" className="button_green">
                    {" "}
                    Acknowledge
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>
          <SearchField placeholder="search..." classNames="search" />

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">MEETING REQUESTS</h2>
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

export default AdminMeetingRequests;
