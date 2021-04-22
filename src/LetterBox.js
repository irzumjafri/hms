import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';

const LetterBox = (props) => {
  const {
    handleLogout,
    childData,
    setRouter,
    applicationStatus,
    recievedLetters,
    sendLetters,
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

  const [reciever, setReciever] = useState("");
  const [letterBody, setLetterBody] = useState("");
  const [writeOrReceive, setWriteOrReceive] = useState(true);

  const fetchChildData = () => {
    var child = [];
    {
      childData.map((con, i) => {
        child.push({ label: childData[i].name, value: childData[i].name });
      });
    }

    return child;
  };

  return (
    <body>
      <section className="navbar">
        <section className="letterBox">
          <div className="letterBoxContainer">
            <nav>
              {/* <div class ="row">
              <button className = "button_darkblue" onClick={(e) => setWriteOrReceive(true)}>
                Write a Letter
              </button>
              <button className = "button_gray" onClick={(e) => setWriteOrReceive(false)}>
                Received Letters
              </button>
              </div> */}
            </nav>
            <>
              {writeOrReceive ? (
                <div>
                  {/* <h2>SENDING LETTERS</h2> */}
                  <div>
                  <div class ="row">
              <button className = "button_darkblue" onClick={(e) => setWriteOrReceive(true)}>
                Write a Letter
              </button>
              <button className = "button_gray" onClick={(e) => setWriteOrReceive(false)}>
                Received Letters
              </button>
              </div>
                    <Form>
                      <Dropdown
                        className="my-className"
                        options={fetchChildData()}
                        placeholder="Please select a child"
                        value="Please select a child"
                        onSelect={(i) => {
                          setReciever(i.value);
                        }} // always fires once a selection happens even if there is no change
                      />

                      <div class="col">
                        <Form.Label className="label-left">Letter *</Form.Label>
                        <Form.Control
                        className = "input-left"
                          type="text"
                          required
                          value={letterBody}
                          onChange={(e) => setLetterBody(e.target.value)}
                        ></Form.Control>
                      </div>
                      <StyledPopup trigger = { <button className= "button_green"> Submit Request</button>} position="center" modal>
                      <div>
                      You are about to send the letter you just composed/uploaded. Do you want to continue?
                      </div>
                      <div class = "row">
                        <div class="col-md-6">
                          <button className = "button_gray"> Cancel</button>
                        </div>
                        <div class="col-md-6">
                          <button className = "button_green"  onClick={() => {
                          {applicationStatus
                            ? setRouter("registered")
                            : setRouter("unregistered");
                          console.log("SENDING LETTER");
                        };sendLetters({name: reciever,content: letterBody})}}>Send</button>
                        </div>


                      </div>
                      </StyledPopup>
                    </Form>
                  </div>
                </div>
              ) : (
                <div>
                  {/* <h2>RECIEVING LETTERS</h2> */}
                  <div className="letterContainer">
                  <div class ="row">
              <button className = "button_gray" onClick={(e) => setWriteOrReceive(true)}>
                Write a Letter
              </button>
              <button className = "button_darkblue" onClick={(e) => setWriteOrReceive(false)}>
                Received Letters
              </button>
              </div>
                    {recievedLetters.map((con, i) => {
                      return (
                        <Form>
                          <div class="col-md-6">
                            <Form.Label className="label-left">From</Form.Label>
                            <Form.Control
                            type = "text"
                            value={recievedLetters[i].senderName}
                            >
                              
                              </Form.Control>
                          </div>
                          <div class="col">
                            <Form.Label className="label-left">
                              Letter
                            </Form.Label>
                            <Form.Control
                            type = "text"
                            value={recievedLetters[i].content}
                            >
                              </Form.Control>
                        
                          </div>
                        </Form>
                      );
                    })}
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
          <SearchField placeholder="search..." classNames="search" />

          <nav className="navbarContainer">
            <p
              className="smalltext"
              onClick={() =>
                applicationStatus
                  ? setRouter("registered")
                  : setRouter("unregistered")
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">LETTER BOX</h2>
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

export default LetterBox;
