import React from "react";
import SearchField from "react-search-field";

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
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <section>
          <h2>LETTER BOX</h2>
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
                    <label>To *</label>
                    <button>DropDown Select a child</button>
                  </div>
                  <div>
                    <label>Letter *</label>
                    <input
                      className="input-left"
                      type="text"
                      required
                      onChange={(e) => setLetterBody(e.target.value)}
                    ></input>
                  </div>
                </div>
              ) : (
                <div>
                  <h2>RECIEVING LETTERS</h2>
                  {recievedLetters.map((con, i) => {
                    return (
                      <div className="letterContainer">
                        <div>
                          <label>From</label>
                          <textbox>{recievedLetters[i].from}</textbox>
                        </div>
                        <div>
                          <label>Letter</label>
                          <textbox>{recievedLetters[i].message}</textbox>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default LetterBox;
