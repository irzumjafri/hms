import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const RequestAMeeting = (props) => {
  const {
    handleLogout,
    preferredMeetingDate,
    setPreferredMeetingDate,
    hour,
    setHour,
    minutes,
    setMinutes,
    amPm,
    setAmPm,
    backUpDatesAndTimes,
    setBackUpDatesAndTimes,
    purpose,
    setPurpose,
    setRouter,
    applicationStatus,
    addMeetingRequest,
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
                    onChange={(e) => setPreferredMeetingDate(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Meeting Time (hh:mm) *
                  </Form.Label>
                  <div class="form-row">
                    <div class="col-md-3">
                      <Form.Control
                        type="text"
                        required
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                      ></Form.Control>
                    </div>
                    <p className="label-right">:</p>
                    <div class="col-md-3">
                      <Form.Control
                        type="text"
                        required
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                      ></Form.Control>
                    </div>
                    <div class="col-md-3">
                      <Form.Control
                        type="text"
                        required
                        value={amPm}
                        onChange={(e) => setAmPm(e.target.value)}
                      ></Form.Control>
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
                  required
                  value={backUpDatesAndTimes}
                  onChange={(e) => setBackUpDatesAndTimes(e.target.value)}
                ></Form.Control>
              </div>
              <div class="col-md-13">
                <Form.Label className="label-left">Purpose *</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                ></Form.Control>
              </div>
            </Form>

            <div className="btnContainer">
              <button
                onClick={() =>
                  {applicationStatus
                    ? setRouter("registered")
                    : setRouter("unregistered");addMeetingRequest()}
                }
                className="button_green"
              >
                Submit Request
              </button>
            </div>
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
            <h2 className="titletext">REQUEST A MEETING</h2>
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

export default RequestAMeeting;
