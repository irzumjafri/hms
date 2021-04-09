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
              setRouter('home')
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
        <button onClick={() => setRouter("admincontactus")}>Contact Us</button>
        <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default FAQs;
