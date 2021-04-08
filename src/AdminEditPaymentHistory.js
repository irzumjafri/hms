import React from "react";
import SearchField from "react-search-field";

const AdminEditPaymentHistory = (props) => {
  const {
    handleLogout,
    paymentDate,
    setPaymentDate,
    amount,
    setAmount,
    setRouter,
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
          <h2 /*Make a drop down menu  refer to figma*/>
            EDIT PAYMENT HISTORY
          </h2>
          <button
          // Make the new onclick
          // onClick={() =>
          //   applicationStatus
          //     ? setRouter("registered")
          //     : setRouter("unregistered")
          // }
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="adminEditPaymentHistory">
          <div className="adminEditPaymentContainer" /* Make the map function*/>
            <label>Amount *</label>
            <input
              type="text"
              autoFocus
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <label>Payment Date (DD-MM-YYYY) *</label>
            <input
              type="text"
              required
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
            ></input>
          </div>
          <div className="btnContainer">
            <button /* make on click function*/ className="buttongreen">
              ✅ Save Changes
            </button>
            <button /* make on click function*/ className="button_red">
              ❌ Discard Changes
            </button>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminEditPaymentHistory;
