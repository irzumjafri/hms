import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const AdminMeetingRequests = (props) => {
  const {
    handleLogout,
    meetingRecords,
    setRouter,
    acknoweldgeMeetingRequest,
    fetchMeetingRequests
  } = props;

  console.log(meetingRecords);

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="requestAMeeting">
          <div className="requestAMeetingContainer">
            {meetingRecords.map((con, i) => {
              return (
                <div>
                  <Form>
                    <Form.Row>
                      <div class="col-md-6">
                        <Form.Label className="label-left">
                          Meeting Date (DD-MM-YYYY) *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={meetingRecords[i].meetingDate}
                        ></Form.Control>
                      </div>
                      <div class="col-md-6">
                        <Form.Label className="label-right">
                          Meeting Time (hh:mm)
                        </Form.Label>
                        <div class="form-row">
                          <div class="col-md-3">
                            <Form.Control
                              type="text"
                              value={meetingRecords[i].hour}
                            ></Form.Control>
                          </div>
                          <p className="label-right">:</p>
                          <div class="col-md-3">
                            <Form.Control
                              type="text"
                              value={meetingRecords[i].min}
                            ></Form.Control>
                          </div>
                          <div class="col-md-3">
                            <Form.Control
                              type="text"
                              value={meetingRecords[i].ampm}
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
                        value={meetingRecords[i].backupDate}
                      ></Form.Control>
                    </div>
                    <div class="col-md-13">
                      <Form.Label className="label-left">Purpose</Form.Label>
                      <Form.Control
                        type="text"
                        value={meetingRecords[i].purpose}
                      ></Form.Control>
                    </div>
                  </Form>
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        className="button_green"
                        onClick={() =>
                          acknoweldgeMeetingRequest(meetingRecords[i].id)
                        }
                      >
                        Acknowledge
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>
          

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">MEETING REQUESTS</h2>
            <p className="smalltext1" onClick={() => fetchMeetingRequests()}>
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

export default AdminMeetingRequests;
