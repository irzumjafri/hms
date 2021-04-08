import React from "react";
import SearchField from "react-search-field";

const FAQs = (props) => {
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
          <h2>Frequently Asked Questions (FAQs)</h2>
          <button
            onClick={() =>
              applicationStatus
                ? setRouter("registered")
                : setRouter("unregistered")
            }
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="faqs">
          {questions.map((con, i) => {
            return (
              <div className="faqsContainer">
                <label>Question {i + 1}</label>
                <text>{questions[i]}</text>
                <text>{answers[i]}</text>
              </div>
            );
          })}
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default FAQs;
