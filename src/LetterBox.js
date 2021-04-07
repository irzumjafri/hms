import React from "react";
import SearchField from "react-search-field";

const LetterBox = (props) => {
  const {
    handleLogout,
    selectAChild,
    letter,
    setLetter,
    fromChild,
    writeOrReceive,
    setWriteOrReceive,
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
          <button /*make on click function*/> HOME PAGE </button>
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
              {!writeOrReceive ? (
                <div>
                  <div>
                    <label>To *</label>
                    <input
                      className="input-left"
                      type="text"
                      required
                      value={selectAChild}
                      // MAKE SCROLLABLE SELECT A CHILD HEHEHE
                    ></input>
                  </div>
                  <div>
                    <label>Letter *</label>
                    <input
                      className="input-left"
                      type="text"
                      required
                      value={letter}
                      onChange={(e) => setLetter(e.target.value)}
                    ></input>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <label>From</label>
                    <textbox>{fromChild}</textbox>
                  </div>
                  <div>
                    <label>Letter</label>
                    <textbox>{letter}</textbox>
                  </div>
                </div>
              )}
            </>
          </div>
        </section>
        <button /*make on click function*/>Contact Us</button>
        <button /*make on click function*/>FAQs</button>
      </section>
    </body>
  );
};

export default LetterBox;
