import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";
import logo from "./HMSlogo.png";
import Button from "react-bootstrap/Button";
const AdminHome = (props) => {
  const { handlelogout, setRouter, updatesArray } = props;
  return (
    <body>
      <section className="navbarhome">
        <section className="sponsorHomepage">
          <div className="sponsorHomepageContainer_left">
            <div>
              <h1 className="label-left" /*Make the updates array work*/>
                Updates
              </h1>
              <h2>{updatesArray}</h2>
            </div>

            <div>
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
                    Edit My Profile
                  </Button>
                  {"  "}
                </div>
                <div class="col-md-6">
                  <Button
                    button
                    className="button_green"
                    onClick={() => setRouter("sponsorshiprequests")}
                    variant="primary"
                    size="lg"
                    block
                  >
                    Sponsorship Requests
                  </Button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <Button
                    button
                    className="button_green"
                    onClick={() => setRouter("sponsorprofiles")}
                    variant="primary"
                    size="lg"
                    block
                  >
                    Sponsor Profiles
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
                    Payment History
                  </Button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <Button
                    button
                    className="button_green"
                    onClick={() => setRouter("meetingrequests")}
                    variant="primary"
                    size="lg"
                    block
                  >
                    Meeting Requests
                  </Button>
                  {"  "}
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
                    Letter Box
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
                  {"  "}
                </div>
                <div class="col-md-6">
                  <Button
                    button
                    className="button_green"
                    onClick={() => setRouter("academicrecords")}
                    variant="primary"
                    size="lg"
                    block
                  >
                    Academic Records
                  </Button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <Button
                    button
                    className="button_green"
                    onClick={() => setRouter("editfaqs")}
                    variant="primary"
                    size="lg"
                    block
                  >
                    Edit FAQs
                  </Button>
                  {"  "}
                </div>
                <div class="col-md-6">
                  <Button
                    button
                    className="button_green"
                    onClick={() => setRouter("editcontactinformation")}
                    variant="primary"
                    size="lg"
                    block
                  >
                    Edit Contact Information
                  </Button>
                </div>
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
          <p className="smalltext" onClick={() => handlelogout()}>
            <span>Logout</span>
          </p>
          <SearchField placeholder="search..." classNames="search" />
          <nav className="navbarhomeContainer">
            <h2 className="titletext">Homepage</h2>
          </nav>
        </nav>

        <section className="bottombar">
          <navbarhome className="bottombarContainer">
            <p
              className="smalltext"
              onClick={() => setRouter("admincontactus")}
            >
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("adminfaqs")}>
              <span>FAQs</span>
            </p>
          </navbarhome>
        </section>
      </section>
    </body>
  );
};

export default AdminHome;
