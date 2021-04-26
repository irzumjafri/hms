import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const AdminHome = (props) => {
  const {
    handlelogout,
    setRouter,
    notifications,
    date,
    dateSetter,
    calendars,
    fetchNotifications,
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
            <div>
              <h1 className="label-left" /*Make the updates array work*/>
                Updates
              </h1>
              
              <button className="button_blue"
                    onClick={() => fetchNotifications()}>Refresh</button>
              {notifications.map((con, i) => {
                    return (
                      <p>{notifications[i].notificationContent}</p>
                    );
                  })}
                  
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
                    Edit My Profile{"         "}
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
                    Sponsorship Requests{"    "}
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
                    Sponsor Profiles{"        "}
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
                    Meeting Requests{"        "}
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
                    Letter Box{"              "}
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
                    Children Profiles{"       "}
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
                    Academic Records{"        "}
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
                    Edit FAQs{"               "}
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
            <Calendar
              className="calender"
              onClickDay={(value, event) => dateSetter(value)}
            />

            <h2 className="label-right">
              <p className="p_i">Today's Event(s):</p>
            </h2>
            <p className="label-right-low">
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
                    setRouter("adminaddevent");
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
                    setRouter("admindeleteevent");
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
          <p className="smalltext" onClick={() => handlelogout()}>
            <span>Logout</span>
          </p>

          <nav className="navbarhomeContainer">
            <h2 className="titletext">Homepage</h2>
          </nav>
        </nav>

        <section className="bottombarhome">
          <div className="bottombarhomeContainer">
            <p
              className="smalltext"
              onClick={() => setRouter("admincontactus")}
            >
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("adminfaqs")}>
              <span>FAQs</span>
            </p>
          </div>
        </section>
      </section>
    </body>
  );
};

export default AdminHome;
