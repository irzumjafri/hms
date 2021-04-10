import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";


const AdminEditFAQs = (props) => {
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
   
      <section>
        <button onClick={() => setRouter("home")}> HOME PAGE </button>
      </section>
      <section className="faqs">
      <div className="faqsContainer">
          {questions.map((con, i) => {
            return (

            <Form>
            <div class = "col">
            <Form.Label className= "label-left">Question {i + 1}</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={questions[i]}
              onChange={(e) => questions[i].setQuestions(e.target.value)}
            ></Form.Control>
            <Form.Control
               type="text"
               value={answers[i]}
               onChange={(e) => answers[i].setAnswers(e.target.value)}
            ></Form.Control>

            </div>
            
            </Form>
            );
          })}

            <div class="row">
                <div class="col-md-6">
                  <div
                  // make onclick
                    class="Button"
                    className="button_green"
                  >
                    Save Changes
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    onClick={() => setRouter("registered")}
                    class="Button"
                    className="button_redd"
                  >
                    Discard Changes
                  </div>
                </div>
              </div>

          </div>
          </section>
          <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => setRouter("home")}><span>HOME PAGE</span></p>
          <h2 className="titletext">EDIT FREQUENTLY ASKED QUESTIONS</h2>
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

export default AdminEditFAQs;
