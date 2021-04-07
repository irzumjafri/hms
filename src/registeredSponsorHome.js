import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";

const RegisteredSponsorHome = (props) => {
  const {
    handleLogout,
    setRouter
  } = props
  return (
    <body>
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField/>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <nav>
          <h2>Homepage</h2>
        </nav>
        <div>
          <h1>Menu</h1>
          <button onClick={() => setRouter("editmyprofile")}>Edit My Profile</button>
          <button>Payment History</button>
          <button>Children Profiles</button>
          <button>Academic Reports</button>
          <button>Request a Meeting</button>
          <button>Letter Box</button>
        </div>
        <div>
          <h1>Calendar</h1>
          <Calendar />
          <h2>Today's Event(s):</h2>
          <p>No Events</p>
          <button>Add Event</button>
          <button>Remove Event</button>
        </div>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default RegisteredSponsorHome;
