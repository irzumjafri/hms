import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "./HMSlogo.png";
import Button from "react-bootstrap/Button";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
const UnregisteredSponsorHome = (props) => {
  const { handleLogout, setRouter } = props;

  return (
    <body>
      <section className="navbarhome">
        <section className="unregistered">
          <div className="unregisteredContainer_left">
            <h1 className="label-left">Menu</h1>

            <Button
              button
              className="button_green"
              onClick={() => setRouter("registering")}
              variant="primary"
              size="lg"
              block
            >
              Register as a Sponsor
            </Button>
          </div>
          <div className="unregisteredContainer_right">
            <h1 className="label-right">Calendar</h1>

            <Calendar className="calender" />

            {/* <h2 className="label-right">
              <p className="p_i">Today's Event(s):</p>
            </h2>
            <p className="label-right">
              <p className="p_ii">No Events</p>
            </p>

            <div class="row">
              <div class="col-md-6">
                <Button
                  button
                  className="button_blue"
                  variant="primary"
                  size="sm"
                  block
                >
                  Add Event
                </Button>
              </div>
              <div class="col-md-6">
                <Button
                  button
                  className="button_red"
                  variant="primary"
                  size="sm"
                  block
                >
                  Remove Event
                </Button>
              </div>
            </div> */}
          </div>
        </section>

        <nav className="navbarhomeContainer_gray">
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

          <nav className="navbarhomeContainer">
            <h2 className="titletext">Homepage</h2>
          </nav>
        </nav>
        <section className="bottombarhome">
          <div className="bottombarhomeContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}>
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("faqs")}>
              <span>FAQs</span>
            </p>
          </div>
        </section>
      </section>
    </body>
  );
};

export default UnregisteredSponsorHome;
