import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

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
            <div className = "col-md-12">
            <StyledPopup trigger = {   <button
                
                className="button_green"
              >
                Submit Request
              </button>} position="center" modal>
                      <div>
                      You are about to submit a request to schedule a meeting. Do you want to continue?
                      </div>
                      <div class = "row">
                        <div class="col-md-6">
                          <button className = "button_gray"> Cancel</button>
                        </div>
                        <div class="col-md-6">
                          <button className = "button_green"  onClick={() =>
                  {applicationStatus
                    ? setRouter("registered")
                    : setRouter("unregistered");addMeetingRequest()}
                }>Submit</button>
                        </div>
                      </div>
                      </StyledPopup>
                      </div>
            
            </div>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <div className="smalltext">
            <Dropdown
              className="my-className"
              options={[
                { value: "changepw", label: "Edit Password" },
                { value: "editprofile", label: "Edit Profile" },
                { value: "deleteacc", label: "Delete Account" },
                { value: "logout", label: "Log Out" },
              ]}
              placeholder="My Account"
              value="My Account"
              onSelect={(i) => {
                if (i.value == "logout") {
                  handleLogout();
                } else if (i.value == "editprofile") {
                  setRouter("editmyprofile");
                } else if (i.value == "changepw") {
                  setRouter("editpassword");
                } else if (i.value == "deleteacc") {
                  setRouter("deleteaccount");
                }
              }} // always fires once a selection happens even if there is no change
            />
          </div>
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
