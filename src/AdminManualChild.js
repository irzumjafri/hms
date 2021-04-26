import React from "react";
import { useState, useEffect } from "react";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const AdminManualChild = (props) => {
  const {
    acceptSponsorshipRequest,
    handleLogout,
    setRouter,
    childData,
    numberOfChildrenToAssign,
    childrenAssigned,
    sponsorIdToAssign,
    setChildrenAssigned,
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

  const fetchChildData = () => {
    var child = [];
    {
      childData.map((con, i) => {
        if (childData[i].status == "") {
          child.push({ label: childData[i].name, value: childData[i].id });
        }
      });
    }
    return child;
  };


  return (
    <body>
      <section className="navbar">
        <section></section>

        <section className="paymentHistory">
          <div className="paymentHistoryContainer">
            return (
            {numberOfChildrenToAssign < fetchChildData().length ? (
              <div>
                <Form>
                  <div class="col"></div>
                  <div class="col">
                    {childrenAssigned.map((con, i) => {
                      return (
                        <div class="col">
                          <Dropdown
                            className="my-className"
                            options={fetchChildData()}
                            placeholder="Please select child to assign"
                            value="Please select a child to assign"
                            onSelect={(x) => {
                              {
                                let temp = [];
                                temp = childrenAssigned;
                                temp[i] = x.value;
                                setChildrenAssigned(temp);
                              }
                            }} // always fires once a selection happens even if there is no change
                          />
                        </div>
                      );
                    })}
                  </div>
                </Form>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      onClick={() => {
                        setRouter("home");
                        console.log(childrenAssigned);
                        acceptSponsorshipRequest(
                          sponsorIdToAssign,
                          "manual",
                          childrenAssigned
                        );
                      }}
                      class="Button"
                      className="button_green"
                    >
                      Assign Children
                    </div>
                  </div>
                  <div class="col-md-6">
                    <StyledPopup
                      trigger={
                        <div class="Button" className="button_redd">
                          Discard Changes
                        </div>
                      }
                      position="center"
                      modal
                      nested
                    >
                      {(close) => (
                        <div>
                          <div>
                            You are about to discard the changes made. Do you
                            want to continue?
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
                                onClick={() => setRouter("home")}
                                className="button_red"
                              >
                                Discard Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </StyledPopup>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-md-12">
                <h2 className="titletext">Not Enough Children to Assign</h2>
              </div>
            )}
            );
          </div>
        </section>

        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <div className="smalltext">
            <p className="smalltext" onClick={handleLogout}>
              <span>Logout</span>
            </p>
          </div>
          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">ADD EVENT</h2>
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

export default AdminManualChild;
