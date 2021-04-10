import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import {Button, Form} from 'react-bootstrap';

const LetterBox = (props) => {
  const {
    handleLogout,
    myChildren,
    setLetterBody,
    selectedChild,
    recievedLetters,
    writeOrReceive,
    setWriteOrReceive,
    setRouter,
    applicationStatus,
  } = props;

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
              <div class = "col-md-5">
                
            <Form.Label className= "label-left">To *</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
            ></Form.Control>
            </div >

            <div class = "col-md-12">
                
            <Form.Label className= "label-left">Letter *</Form.Label>
            <Form.Control
            className="input-left"
            type="text"
            required
            onChange={(e) => setLetterBody(e.target.value)}
            ></Form.Control>
            </div >
            </Form>
              </div>
                </div>
              ) : (
                <div>
                  <h2>RECIEVING LETTERS</h2>
                  {recievedLetters.map((con, i) => {
                    return (
                      <div className="letterContainer">
                         <Form>
                        <div class = "col-md-6">
                          
                      <Form.Label className= "label-left">From</Form.Label>
                      <Form.Control as = "text-area"
                        value={recievedLetters[i].from}
                      ></Form.Control>
                      </div >
                      <div class = "col-md-6">
                      <Form.Label className= "label-left">Letter</Form.Label>
                      <Form.Control as = "text-area"
                        value={recievedLetters[i].message}
                      ></Form.Control>
                      </div >

                      </Form>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          </div>
          </section>
          <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/>   

          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">LETTER BOX</h2>
        </nav> 

        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
            <p className="smalltext" onClick={() => setRouter("faqs")}><span>FAQs</span></p>
          </navbar>
        
        </section>
      </section>
    </body>
  );
};

export default LetterBox;
