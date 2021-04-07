import React from "react";
import SearchField from "react-search-field";

const ContactUs = (props) => {
  const {
    handleLogout,
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
          <h2>CONTACT US</h2>
          <button /*make on click function*/> HOME PAGE </button>
        </section>
        <section className="contactUs">
          <div className="contactUsContainer">
            <div>
              <label>Phone Number </label>
              <textbox>090078601</textbox>
            </div>
            <div>
              <label>Email Address</label>
              <textbox>hunehar@management.system</textbox>
            </div>
            <div>
              <label>Address</label>
              <textbox>irtasam ka ghar</textbox>
            </div>
            <div>
              <label>Facebook</label>
              <textbox>facebook.com/hunehar</textbox>
            </div>
            <div>
              <label>Instagram</label>
              <textbox>instagram.com/hunhar</textbox>
            </div>
            <div>
              <label>Twitter</label>
              <textbox>twitter.com/hunehar</textbox>
            </div>
            <div>
              <label>YouTube</label>
              <textbox>youtube.com/hunehar</textbox>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default ContactUs;
