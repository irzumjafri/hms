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
            <label>Preferred Meeting Date (DD-MM-YYYY)</label>
            {/* Refer to sigma to make a drop down menu for selecting the request */}
            <textbox>{preferredMeetingDate}</textbox>
            <section>
              <label>Preferred Meeting Time</label>
              <textbox>
                {hour} : {minutes} {amPm}
              </textbox>
            </section>
            <section>
              <label>Backup Date(s) and Time(s)</label>
              <textbox>{backUpDatesAndTimes}</textbox>
            </section>
            <section>
              <label>Purpose</label>
              <textbox>{purpose}</textbox>
            </section>
            <div className="btnContainer">
              <button
                // Make the onclick function
                // onClick={() => {
                //   setRouter("registered");
                //   editSponsorProfile();
                // }}
                className="buttongreen"
              >
                ✅ Acknowledge
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
