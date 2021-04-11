import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";
import logo from "./HMSlogo.png";
import Button from "react-bootstrap/Button";

const RegisteredSponsorHome = (props) => {
  const { handleLogout, setRouter } = props;
  return (
    <body>
      <section className="navbarhome">
        <section className="sponsorHomepage">
          <div className="sponsorHomepageContainer_left">
            <h1 className="label-left">Menu</h1>
            <div class="row">
              <div class="col-md-6">
                <Button
                  button
                  className="button_green"
                  onClick={() => setRouter("editmyprofile")}
                  variant="primary"
                  size="lg"
                  block
                >
                  Edit My Profile{"  "}
                </Button>
                {"  "}
              </div>
              <div class="col-md-6">
                <Button
                  button
                  className="button_green"
                  onClick={() => setRouter("paymenthistory")}
                  variant="primary"
                  size="lg"
                  block
                >
                  Payment History{"  "}
                </Button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <Button
                  button
                  className="button_green"
                  onClick={() => setRouter("childrenprofiles")}
                  variant="primary"
                  size="lg"
                  block
                >
                  Children Profiles
                </Button>
              </div>
              <div class="col-md-6">
                <Button
                  button
                  className="button_green"
                  onClick={() => setRouter("academicreports")}
                  variant="primary"
                  size="lg"
                  block
                >
                  Academic Reports{" "}
                </Button>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <Button
                  button
                  className="button_green"
                  onClick={() => setRouter("requestmeeting")}
                  variant="primary"
                  size="lg"
                  block
                >
                  Request Meeting{"  "}
                </Button>
              </div>
              <div class="col-md-6">
                <Button
                  button
                  className="button_green"
                  onClick={() => setRouter("letterbox")}
                  variant="primary"
                  size="lg"
                  block
                >
                  Letter Box{"       "}
                </Button>
              </div>
            </div>
          </div>
          <div className="sponsorHomepageContainer_right">
            <h1 className="label-right">Calendar</h1>
            <Calendar className="calender" />

            <h2 className="label-right">
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
                  className="button_redd"
                  variant="primary"
                  size="sm"
                  block
                >
                  Remove Event
                </Button>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbarhomeContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>
          <SearchField placeholder="search..." classNames="search" />
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

export default RegisteredSponsorHome;
