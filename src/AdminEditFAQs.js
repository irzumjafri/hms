import React from "react";
import SearchField from "react-search-field";

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
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <section>
          <h2>Edit Frequently Asked Questions (FAQs)</h2>
          <button
          onClick={() => setRouter("home")}
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="adminEditFaqs">
          {questions.map((con, i) => {
            return (
              <div className="adminEditFaqsContainer">
                <label>Question {i + 1}</label>
                <input
                  type="text"
                  autoFocus
                  value={questions[i]}
                  onChange={(e) => questions[i].setQuestions(e.target.value)}
                ></input>
                <input
                  type="text"
                  value={answers[i]}
                  onChange={(e) => answers[i].setAnswers(e.target.value)}
                ></input>
              </div>
            );
          })}
          <div className="btnContainer">
            <button
              // Make new onlick Function onClick={() => setRouter("registered")}
              className="button_red"
            >
              ❌ Discard Changes
            </button>
            <button
              // Make new onclick function onClick={() => {
              //   setRouter("registered");
              //   editSponsorProfile();
              // }}
              className="buttongreen"
            >
              ✅ Save Changes
            </button>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminEditFAQs;
