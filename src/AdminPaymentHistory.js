import React from "react";
import SearchField from "react-search-field";

const AdminPaymentHistory = (props) => {
  const {
    handleLogout,
    paymentDate,
    amount,
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
          <h2 /*Make a drop down menu  refer to figma*/>PAYMENT HISTORY</h2>
          <button onClick={() => setRouter("home")}>HOME PAGE</button>
        </section>
        <section className="adminPaymentHistory">
          <div className="adminPaymentContainer" /* Make the map function*/>
            <label>Amount</label>
            <textbox>{amount}</textbox>
            <label>Payment Date (DD-MM-YYYY)</label>
            <textbox>{paymentDate}</textbox>
          </div>
          <div className="btnContainer">
            <button
              // Make the onclick function
              // onClick={() => {
              //   setRouter("registered");
              //   editSponsorProfile();
              // }}
              className="buttongreen"
            >
              Add / Edit Transactions
            </button>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminPaymentHistory;
