import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";

const AdminHome = (props) => {
  const { handleLogout, setRouter, updatesArray } = props;
  return (
    <body>
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <nav>
          <h2>Homepage</h2>
        </nav>
        <div>
          <h1 /*Make the updates array work*/>Updates</h1>
          <h2>{updatesArray}</h2>
        </div>
        <div>
          <h1 /*Make the menu drop down*/>Menu</h1>
          <button onClick={() => setRouter("editsponsorprofile")}>
            Edit My Profile
          </button>
          <button onClick={() => setRouter("sponsorshiprequests")}>
            Sponsorship Requests
          </button>
          <button onClick={() => setRouter("sponsorprofiles")}>
            Sponsor Profiles
          </button>
          <button onClick={() => setRouter("paymenthistory")}>
            Payment History
          </button>
          <button onClick={() => setRouter("meetingrequests")}>
            Meeting Requests
          </button>
          <button onClick={() => setRouter("letterbox")}>Letter Box</button>
          <button onClick={() => setRouter("childrenprofiles")}>
            Children Profiles
          </button>
          <button onClick={() => setRouter("academicrecords")}>
            Academic Records
          </button>
          <button onClick={() => setRouter("editfaqs")}>Edit FAQs</button>
          <button onClick={() => setRouter("editcontactinformation")}>
            Edit Contact Information
          </button>
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

export default AdminHome;
