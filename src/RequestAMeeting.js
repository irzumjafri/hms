import React from "react";
import SearchField from "react-search-field";

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
          <h2>REQUEST A MEETING</h2>
          <button /*make on click function*/> HOME PAGE </button>
        </section>
        <section className="requestAMeeting">
          <div className="requestAMeetingContainer">
            <label>Preferred Meeting Date (DD-MM-YYYY) *</label>
            <input
              type="text"
              autoFocus
              required
              value={preferredMeetingDate}
              onChange={(e) => setPreferredMeetingDate(e.target.value)}
            ></input>
            <section>
              <label>Preferred Meeting Time (hh:mm) *</label>
              <input
                type="text"
                required
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              ></input>
              <input
                type="text"
                required
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              ></input>
              <input
                type="text"
                required
                value={amPm}
                // Make drop down menu
              ></input>
            </section>
            <label>Backup Date(s) and Time(s)</label>
            <input
              type="text"
              required
              value={backUpDatesAndTimes}
              onChange={(e) => setBackUpDatesAndTimes(e.target.value)}
            ></input>
            <section>
              <label>Purpose *</label>
              <input
                type="text"
                required
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              ></input>
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
                ✅ Submit Request
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

export default RequestAMeeting;
