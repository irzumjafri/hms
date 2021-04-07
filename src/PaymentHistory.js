import React from "react";
import SearchField from "react-search-field";

const PaymentHistory = (props) => {
  const {
    handleLogout,
    paymentDate,
    amount,
    setRouter,
    applicationStatus
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
          <h2>PAYMENT HISTORY</h2>
          <button onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}> HOME PAGE </button>
        </section>
        <section className="paymentHistory">
        {paymentDate.map((con, i) => {
          return (
            <div className="paymentContainer">
                <label>Amount</label>
                <textbox>{amount[i]}</textbox>
                <label>Payment Date (DD-MM-YYYY)</label>
                <textbox>{paymentDate[i]}</textbox>
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

export default PaymentHistory;
