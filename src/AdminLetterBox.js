import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { useState, useEffect } from "react";

const AdminLetterBox = (props) => {
  const {
    handleLogout,
    childData,
    setRouter,
    letters,
    sendLetter,
    fetchLetters
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
              <button onClick={(e) => setWriteOrReceive(true)}>
                Write a Letter
              </button>
              <button onClick={(e) => setWriteOrReceive(false)}>
                Received Letters
              </button>
            </nav>
            <>
              {writeOrReceive ? (
                <div>
                  <h2>SENDING LETTERS</h2>
                  <div>
                    <Form>
                      <Dropdown
                        className="my-className"
                        options={fetchChildData()}
                        placeholder="Please select a child"
                        value="Please select a child"
                        onSelect={(i) => {
                          setReciever(i);
                        }} // always fires once a selection happens even if there is no change
                      />

                      <div class="col-md-12">
                        <Form.Label className="label-left">Letter *</Form.Label>
                        <Form.Control
                          className="input-left"
                          type="text"
                          required
                          value={letterBody}
                          onChange={(e) => setLetterBody(e.target.value)}
                        ></Form.Control>
                      </div>
                      <button
                        onClick={() => {
                          {setRouter('home');
                          console.log("SENDING LETTER");
                        };sendLetter({fromName: reciever.value,content: letterBody})}}
                        className="button_green"
                      >
                        Submit Request
                      </button>
                    </Form>
                  </div>
                </div>
              ) : (
                <div>
                  <h2>RECIEVING LETTERS</h2>
                  <div className="letterContainer">
                    {letters.map((con, i) => {
                      return (
                        <Form>
                          <div class="col-md-6">
                            <Form.Label className="label-left">From</Form.Label>
                            <textbox>{letters[i].senderName}</textbox>
                          </div>
                          <div class="col-md-6">
                            <Form.Label className="label-left">
                              Letter
                            </Form.Label>
                            <textbox>{letters[i].content}</textbox>
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
                setRouter('home')
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">LETTER BOX</h2>
            <p
              className="smalltext"
              onClick={() =>
                fetchLetters()
              }
            >
              <span>Sync</span>
            </p>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("admincontactus")}>
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
