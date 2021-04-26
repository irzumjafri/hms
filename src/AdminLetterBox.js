import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";

const AdminLetterBox = (props) => {
  const {
    handleLogout,
    sponsorData,
    childData,
    setRouter,
    letters,
    sendLetter,
    fetchLetters,
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
  
    &-content .button_blue
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #529cea;
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

  const [reciever, setReciever] = useState("");
  const [letterBody, setLetterBody] = useState("");
  const [writeOrReceive, setWriteOrReceive] = useState(true);
  const [i, setI] = useState(0);

  const fetchChildData = () => {
    var child = [];
    {
      childData.map((con, i) => {
        if (childData[i].status) {
          child.push({ label: childData[i].name, value: childData[i].name });
        }
      });
    }
    return child;
  };

  return (
    <body>
      <section className="navbar">
        <section className="letterBox">
          <div className="letterBoxContainer">
            <nav></nav>
            <>
              {writeOrReceive ? (
                <div>
                  <div>
                    <div class="row">
                      <button
                        className="button_darkblue"
                        onClick={(e) => setWriteOrReceive(true)}
                      >
                        Write a Letter
                      </button>
                      <button
                        className="button_gray1"
                        onClick={(e) => setWriteOrReceive(false)}
                      >
                        Received Letters
                      </button>
                    </div>
                    <Form>
                      <Form.Label className="label-left">From *</Form.Label>
                      <Dropdown
                        className="my-className"
                        options={fetchChildData()}
                        placeholder="Please select a Child"
                        value="Please select a Child"
                        onSelect={(i) => {
                          setReciever(i);
                        }} // always fires once a selection happens even if there is no change
                      />

                      <Form.Label className="label-left">Letter *</Form.Label>
                      <Form.Control
                        className="input-left"
                        type="text"
                        required
                        value={letterBody}
                        onChange={(e) => setLetterBody(e.target.value)}
                      ></Form.Control>
                    </Form>

                    <StyledPopup
                      trigger={
                        <button className="button_green"> Send Letter</button>
                      }
                      position="center"
                      modal
                    >
                      {(close) => (
                        <div>
                          <div>
                            You are about to send the letter you just composed.
                            Do you want to continue?
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <button
                                className="button_gray"
                                onClick={() => {
                                  console.log("modal closed ");
                                  close();
                                }}
                              >
                                {" "}
                                Cancel
                              </button>
                            </div>
                            <div class="col-md-6">
                              <button
                                className="button_green"
                                onClick={() => {
                                  {
                                    setRouter("home");
                                    console.log("SENDING LETTER");
                                  }
                                  sendLetter({
                                    fromName: reciever.value,
                                    content: letterBody,
                                  });
                                }}
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </StyledPopup>
                  </div>
                </div>
              ) : (
                <div>
                  <div class="row">
                    <button
                      className="button_gray1"
                      onClick={(e) => setWriteOrReceive(true)}
                    >
                      Write a Letter
                    </button>
                    <button
                      className="button_darkblue"
                      onClick={(e) => setWriteOrReceive(false)}
                    >
                      Received Letters
                    </button>
                  </div>
                  {/* <h2>RECIEVING LETTERS</h2> */}
                  <div className="letterContainer">
                    return (
                    {letters.length ? (
                      <>
                        <Form>
                          <div class="col-md-6">
                            <Form.Label className="label-left">From</Form.Label>
                            <Form.Control
                              type="text"
                              value={letters[i].senderName}
                            ></Form.Control>
                          </div>
                          <div class="col">
                            <Form.Label className="label-left">
                              Letter
                            </Form.Label>
                            <Form.Control
                              className="input-left"
                              type="text"
                              value={letters[i].content}
                            ></Form.Control>
                          </div>
                        </Form>
                        <div class="row">
                          <div class="col-md-4">
                            {i ? (
                              <button
                                onClick={() => setI(i - 1)}
                                class="Button"
                                className="button_blue"
                              >
                                {" "}
                                Prev Page
                              </button>
                            ) : (
                              <button className="button_gray">
                                {" "}
                                Prev Page
                              </button>
                            )}
                          </div>
                          <div class="col-md-4">
                            <textbox className="label-down">
                              Page Number {i + 1} / {letters.length}
                            </textbox>
                          </div>
                          <div class="col-md-4">
                            {i + 1 == letters.length ? (
                              <button
                                className="button_gray"
                                //MAKE THIS GREYED OUT
                              >
                                {" "}
                                Next Page
                              </button>
                            ) : (
                              <button
                                onClick={() => setI(i + 1)}
                                class="Button"
                                className="button_blue"
                              >
                                {" "}
                                Next Page
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div class="col-md-12">
                        <h2 className="titletext">No Letters to Display</h2>
                      </div>
                    )}
                    );
                  </div>
                  );
                </div>
              )}
            </>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">LETTER BOX</h2>
            <p className="smalltext1" onClick={() => fetchLetters()}>
              <span>Sync</span>
            </p>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p
              className="smalltext"
              onClick={() => setRouter("admincontactus")}
            >
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("adminfaqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default AdminLetterBox;
