import React from "react";
import SearchField from "react-search-field";

const AdminMeetingRequests = (props) => {
  const {
    handleLogout,
    preferredMeetingDate,
    hour,
    minutes,
    amPm,
    backUpDatesAndTimes,
    purpose,
  } = props;

  return (
    <body>
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <section>
          <h2>MEETING REQUESTS</h2>
          <button /*make on click function*/> HOME PAGE </button>
        </section>
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
        <button>Contact Us</button>
        <button>FAQs</button>
      </section>
    </body>
  );
};

export default AdminMeetingRequests;
