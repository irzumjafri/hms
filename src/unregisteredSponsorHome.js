import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";

const UnregisteredSponsorHome = ({ handleLogout }) => {
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
          <button>Register as a Sponsor</button>
        </div>
        <div>
          <h1>Calendar</h1>
          <Calendar />
          <h2>Today's Event(s):</h2>
          <p>No Events</p>
          <button>Add Event</button>
          <button>Remove Event</button>
        </div>
        <button>Contact Us</button>
        <button>FAQs</button>
      </section>
    </body>
  );
};

export default UnregisteredSponsorHome;
