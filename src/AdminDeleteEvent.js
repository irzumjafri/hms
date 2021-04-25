import React from "react";
import { useState, useEffect } from "react";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const AdminDeleteEvent = (props) => {
  const {
    handleLogout,
    date,
    setRouter,
    deleteEvent,
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

  const [e, setE] = useState("");

  const fetchCalendarData = () => {
    var calendar = [];
    {
      calendars.map((con, i) => {
        if (date == calendars[i].date) {
          calendar.push({ label: calendars[i].title, value: calendars[i].id });
        }
      });
    }

    return calendar;
  };

  return (
    <body>
      <section className="navbar">
        <section></section>

        <section className="paymentHistory">
          <div className="paymentHistoryContainer">
            return (
            <div>
              <Form>
                <div class="col">
                  <textbox className="label-left">
                    Deleting Events for {date}
                  </textbox>
                </div>
                <div class="col-md-12">
                  <Dropdown
                    className="my-className"
                    options={fetchCalendarData()}
                    placeholder="Please select an event to remove"
                    value="Please select an event to remove"
                    onSelect={(i) => {
                      {
                        setE(i.value)
                        console.log(i);
                      }
                    }} // always fires once a selection happens even if there is no change
                  />
                </div>
              </Form>
              <div class="row">
                <div class="col-md-12">
                  <StyledPopup
                    trigger={
                      <div class="Button" className="button_redd">
                        Delete Event
                      </div>
                    }
                    position="center"
                    modal
                    nested
                  >
                    {(close) => (
                      <div>
                        <div>
                          You are about to delete the selected Event. Do you want
                          to continue?
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <button
                              onClick={() => {
                                console.log("modal closed ");
                                close();
                              }}
                              className="button_gray"
                            >
                              Cancel
                            </button>
                          </div>
                          <div class="col-md-6">
                            <button
                              onClick={() => {setRouter("home");deleteEvent(e)}}
                              className="button_red"
                            >
                              Delete Event
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </StyledPopup>
                </div>
              </div>
            </div>
            );
          </div>
        </section>

        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <div className="smalltext">
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          </div>
          <nav className="navbarContainer">
            <p
              className="smalltext"
              onClick={() =>
                setRouter("home")
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">DELETE EVENT</h2>
          </nav>
        </nav>

        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}>
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("faqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default AdminDeleteEvent;
