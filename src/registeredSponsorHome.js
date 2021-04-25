import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const RegisteredSponsorHome = (props) => {
  const {
    handleLogout,
    setRouter,
    setDate,
    date,
    dateSetter,
    calendars,
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
      min-width: max-content;
      padding: 10px 10px;
     
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

  const displayNotif = (i, j) => {
    i = i.split("-");
    j = j.split("-");

    let d = date.split("-");
    console.log(i);
    console.log(j);
    console.log(d);

    if (
      parseInt(d[0]) < parseInt(j[0]) &&
      parseInt(d[1]) <= parseInt(j[1]) &&
      parseInt(d[2]) <= parseInt(j[2])
    ) {
      if (
        parseInt(d[0]) >= parseInt(i[0]) &&
        parseInt(d[1]) == parseInt(i[1]) &&
        parseInt(d[2]) == parseInt(i[2])
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

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
                  onClick={() => setRouter("childrenprofiles")}
                  
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
                  
                  block
                >
                  Letter Box{"       "}
                </Button>
              </div>
            </div>
          </div>
          <div className="sponsorHomepageContainer_right">
            <h1 className="label-right">Calendar</h1>
            <Calendar
              className="calender"
              onClickDay={(value, event) => dateSetter(value)}
            />

            <h2 className="label-right">
              <p className="p_i">Today's Event(s):</p>
            </h2>
            <p className="label-right">
              {calendars.map((con, i) => {
                return (
                  <div>
                    {date == calendars[i].date ? (
                      <p className="p_ii">
                        {calendars[i].title}:{calendars[i].description}
                      </p>
                    ) : (
                      <p className="p_ii"></p>
                    )}
                  </div>
                );
              })}
            </p>
            <h2 className="label-right">
              <p className="p_i">Coming Soon Event(s):</p>
            </h2>
            <p className="label-right">
              {calendars.map((con, i) => {
                return (
                  <div>
                    {displayNotif(
                      calendars[i].notificationFrom,
                      calendars[i].date
                    ) ? (
                      <p className="p_ii">
                        {calendars[i].title}:{calendars[i].description}
                      </p>
                    ) : (
                      <p className="p_ii"></p>
                    )}
                  </div>
                );
              })}
            </p>

            <div class="row">
              <div class="col-md-6">
                <Button
                  button
                  className="button_blue"
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setRouter("addevent");
                  }}
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
                  onClick={() => {
                    setRouter("deleteevent");
                  }}
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
          {/* <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p> */}
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

export default RegisteredSponsorHome;
