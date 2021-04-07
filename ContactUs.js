import React from "react";
import SearchField from "react-search-field";

const ContactUs = (props) => {
  const {
    handleLogout,
    huneharPhoneNumber,
    huneharAddress,
    huneharEmail,
    facebook,
    instagram,
    twitter,
    youtube,
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
              <textbox>{huneharPhoneNumber}</textbox>
            </div>
            <div>
              <label>Email Address</label>
              <textbox>{huneharEmail}</textbox>
            </div>
            <div>
              <label>Address</label>
              <textbox>{huneharAddress}</textbox>
            </div>
            <div>
              <label>Facebook</label>
              <textbox>{facebook}</textbox>
            </div>
            <div>
              <label>Instagram</label>
              <textbox>{instagram}</textbox>
            </div>
            <div>
              <label>Twitter</label>
              <textbox>{twitter}</textbox>
            </div>
            <div>
              <label>YouTube</label>
              <textbox>{youtube}</textbox>
            </div>
          </div>
        </section>
        <button /*make on click function*/>Contact Us</button>
        <button /*make on click function*/>FAQs</button>
      </section>
    </body>
  );
};

export default ContactUs;
