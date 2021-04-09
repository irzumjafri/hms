import React from "react";
import SearchField from "react-search-field";

const AdminEditContactUs = (props) => {
  const {
    handleLogout,
    setRouter,
    contactPhoneNumber,
    setContactPhoneNumber,
    contactEmail,
    setContactEmail,
    contactAddress,
    setContactAddress,
    contactFacebook,
    setContactFacebook,
    contactInstagram,
    setContactInstagram,
    contactTwitter,
    setContactTwitter,
    contactYoutube,
    setContactYoutube,
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
          <h2>EDIT CONTACT US</h2>
          <button
          onClick={() => setRouter("home")}
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="adminEditContactUs">
          <div className="adminEditContactUsContainer">
            <div>
              <label>Phone Number </label>
              <input
                type="text"
                autoFocus
                required
                value={contactPhoneNumber}
                onChange={(e) => setContactPhoneNumber(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Email Address</label>
              <input
                type="text"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                required
                value={contactAddress}
                onChange={(e) => setContactAddress(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Facebook</label>
              <input
                type="text"
                required
                value={contactFacebook}
                onChange={(e) => setContactFacebook(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Instagram</label>
              <input
                type="text"
                required
                value={contactInstagram}
                onChange={(e) => setContactInstagram(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Twitter</label>
              <input
                type="text"
                required
                value={contactTwitter}
                onChange={(e) => setContactTwitter(e.target.value)}
              ></input>
            </div>
            <div>
              <label>YouTube</label>
              <input
                type="text"
                required
                value={contactYoutube}
                onChange={(e) => setContactYoutube(e.target.value)}
              ></input>
            </div>
            <div className="btnContainer">
              <button
                // Make new onlick Function onClick={() => setRouter("registered")}
                className="button_red"
              >
                ❌ Discard Changes
              </button>
              <button
                // Make new onclick function onClick={() => {
                //   setRouter("registered");
                //   editSponsorProfile();
                // }}
                className="buttongreen"
              >
                ✅ Save Changes
              </button>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminEditContactUs;
