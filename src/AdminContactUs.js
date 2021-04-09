import React from "react";
import SearchField from "react-search-field";

const AdminContactUs = (props) => {
  const {
    handleLogout,
    setRouter,
    contactPhoneNumber,
    contactEmail,
    contactAddress,
    contactFacebook,
    contactInstagram,
    contactTwitter,
    contactYoutube,
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
          <button
            onClick={() =>
              setRouter('home')
            }
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="contactUs">
          <div className="contactUsContainer">
            <div>
              <label>Phone Number </label>
              <textbox>{contactPhoneNumber}</textbox>
            </div>
            <div>
              <label>Email Address</label>
              <textbox>{contactEmail}</textbox>
            </div>
            <div>
              <label>Address</label>
              <textbox>{contactAddress}</textbox>
            </div>
            <div>
              <label>Facebook</label>
              <textbox>{contactFacebook}</textbox>
            </div>
            <div>
              <label>Instagram</label>
              <textbox>{contactInstagram}</textbox>
            </div>
            <div>
              <label>Twitter</label>
              <textbox>{contactTwitter}</textbox>
            </div>
            <div>
              <label>YouTube</label>
              <textbox>{contactYoutube}</textbox>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("admincontactus")}>Contact Us</button>
        <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminContactUs;
