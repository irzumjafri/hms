import React from "react";
import SearchField from "react-search-field";

const PaymentHistory = (props) => {
  const {
    handleLogout,
    amount1,
    paymentDate1,
    amount2,
    paymentDate2,
    amount3,
    paymentDate3,
    amount4,
    paymentDate4,
    amount5,
    paymentDate5,
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
          <button /*make on click function*/> HOME PAGE </button>
        </section>
        <section className="paymentHistory">
          <div className="paymentHistoryContainer">
            <div>
              <label>Amount (PKR) </label>
              <textbox>{amount1}</textbox>
              <label>Payment Date (DD-MM-YYYY)</label>
              <textbox>{paymentDate1}</textbox>
            </div>
            <div>
              <label>Amount (PKR) </label>
              <textbox>{amount2}</textbox>
              <label>Payment Date (DD-MM-YYYY)</label>
              <textbox>{paymentDate2}</textbox>
            </div>
            <div>
              <label>Amount (PKR) </label>
              <textbox>{amount3}</textbox>
              <label>Payment Date (DD-MM-YYYY)</label>
              <textbox>{paymentDate3}</textbox>
            </div>
            <div>
              <label>Amount (PKR) </label>
              <textbox>{amount4}</textbox>
              <label>Payment Date (DD-MM-YYYY)</label>
              <textbox>{paymentDate4}</textbox>
            </div>
            <div>
              <label>Amount (PKR) </label>
              <textbox>{amount5}</textbox>
              <label>Payment Date (DD-MM-YYYY)</label>
              <textbox>{paymentDate5}</textbox>
            </div>
          </div>
        </section>
        <button /*make on click function*/>Contact Us</button>
        <button /*make on click function*/>FAQs</button>
      </section>
    </body>
  );
};

export default PaymentHistory;
