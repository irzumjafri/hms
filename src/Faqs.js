import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
const AdminFAQs = (props) => {
  const {
    questions,
    answers,
    handleLogout,
    setRouter,
    applicationStatus,
  } = props;
 
  console.log(questions)
  console.log(answers)


  return (
    <body>
      <section className="navbar">
     
        <section>
        </section>

        
        <section className="faqs">
        <div className="faqsContainer">

          {questions.map((con, i) => {
            return (

              

              <Form>

              <div class = "col">
            <Form.Label className= "label-left">{questions[i].question}</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={answers[i].answer}
            ></Form.Control>
            </div>
            </Form>
          
              
            );
          })}
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
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
       
          
          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">FREQUENTLY ASKED QUESTIONS</h2>
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

export default AdminFAQs;
