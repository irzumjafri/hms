import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import { Button, Form } from "react-bootstrap";
import logo from "./HMSlogo.png";

const AdminEditFAQs = (props) => {
  const { questions, answers, handleLogout, setRouter, editFAQs } = props;

  const [editQuestion1, setEditQuestion1] = useState(questions[0]);
  const [editAnswer1, setEditAnswer1] = useState(answers[0]);
  const [editQuestion2, setEditQuestion2] = useState(questions[1]);
  const [editAnswer2, setEditAnswer2] = useState(answers[1]);
  const [editQuestion3, setEditQuestion3] = useState(questions[2]);
  const [editAnswer3, setEditAnswer3] = useState(answers[2]);
  const [editQuestion4, setEditQuestion4] = useState(questions[3]);
  const [editAnswer4, setEditAnswer4] = useState(answers[3]);
  const [editQuestion5, setEditQuestion5] = useState(questions[4]);
  const [editAnswer5, setEditAnswer5] = useState(answers[4]);

  return (
    <body>
      <section className="navbar">
        <section>
          <button onClick={() => setRouter("home")}> HOME PAGE </button>
        </section>
        <section className="faqs">
          <div className="faqsContainer">
            return (
            <Form>
              <div class="col">
                <Form.Label className="label-left">Question 1</Form.Label>
                <Form.Control
                  type="text"
                  value={editQuestion1.question}
                  onChange={(e) => {
                    setEditQuestion1({
                      question: e.target.value,
                      id: questions[0].id,
                    });
                  }}
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={editAnswer1.answer}
                  onChange={(e) =>
                    setEditAnswer1({
                      answer: e.target.value,
                      id: answers[0].id,
                    })
                  }
                ></Form.Control>
                <Form.Label className="label-left">Question 2</Form.Label>
                <Form.Control
                  type="text"
                  value={editQuestion2.question}
                  onChange={(e) => {
                    setEditQuestion2({
                      question: e.target.value,
                      id: questions[1].id,
                    });
                  }}
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={editAnswer2.answer}
                  onChange={(e) =>
                    setEditAnswer2({
                      answer: e.target.value,
                      id: answers[1].id,
                    })
                  }
                ></Form.Control>
                <Form.Label className="label-left">Question 3</Form.Label>
                <Form.Control
                  type="text"
                  value={editQuestion3.question}
                  onChange={(e) => {
                    setEditQuestion3({
                      question: e.target.value,
                      id: questions[2].id,
                    });
                  }}
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={editAnswer3.answer}
                  onChange={(e) =>
                    setEditAnswer3({
                      answer: e.target.value,
                      id: answers[2].id,
                    })
                  }
                ></Form.Control>
                <Form.Label className="label-left">Question 4</Form.Label>
                <Form.Control
                  type="text"
                  value={editQuestion4.question}
                  onChange={(e) => {
                    setEditQuestion4({
                      question: e.target.value,
                      id: questions[3].id,
                    });
                  }}
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={editAnswer4.answer}
                  onChange={(e) =>
                    setEditAnswer4({
                      answer: e.target.value,
                      id: answers[3].id,
                    })
                  }
                ></Form.Control>
                <Form.Label className="label-left">Question 5</Form.Label>
                <Form.Control
                  type="text"
                  value={editQuestion5.question}
                  onChange={(e) => {
                    setEditQuestion5({
                      question: e.target.value,
                      id: questions[4].id,
                    });
                  }}
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={editAnswer5.answer}
                  onChange={(e) =>
                    setEditAnswer5({
                      answer: e.target.value,
                      id: answers[4].id,
                    })
                  }
                ></Form.Control>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div
                    onClick={() =>
                      {editFAQs([{
                        question: editQuestion1,
                        answer: editAnswer1,
                        id: questions[0].id,
                      },{
                        question: editQuestion2,
                        answer: editAnswer2,
                        id: questions[1].id,
                      },{
                        question: editQuestion3,
                        answer: editAnswer3,
                        id: questions[2].id,
                      },{
                        question: editQuestion4,
                        answer: editAnswer4,
                        id: questions[3].id,
                      },{
                        question: editQuestion5,
                        answer: editAnswer5,
                        id: questions[4].id,
                      }]);setRouter('home')}
                    }
                    class="Button"
                    className="button_green"
                  >
                    Save Changes
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    onClick={() => setRouter("home")}
                    class="Button"
                    className="button_redd"
                  >
                    Discard Changes
                  </div>
                </div>
              </div>
            </Form>
            );
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
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">EDIT FREQUENTLY ASKED QUESTIONS</h2>
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

export default AdminEditFAQs;
