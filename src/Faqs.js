import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";

const AdminFAQs = (props) => {
  const {
    questions,
    answers,
    handleLogout,
    setRouter,
    applicationStatus,
  } = props;

  return (
    <body>
      <section className="navbar">
      <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">CHILDREN PROFILES</h2>
        </nav>
        <section>
          <button onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}> HOME PAGE </button>
        </section>

        
        <section className="faqs">
          {questions.map((con, i) => {
            return (
              <div className="faqsContainer">

              <Form>

              <div class = "col">
            <Form.Label className= "label-left">{questions[i]}</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={answers[i]}
            ></Form.Control>
            </div>
            </Form>
          
              </div>
            );
          })}
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
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

export default AdminFAQs;
