import React from "react";
import SearchField from "react-search-field";

const EditMyProfileSponsor = (props) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    setEmail,
    handleLogout,
    setFirstName,
    setLastName,
    setDateOfBirth,
    cnic,
    setCnic,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
    numberOfSponsoredChildren,
    setNumberOfSponsoredChildren,
    paymentMethod,
    setPaymentMethod,
    paymentSchedule,
    setPaymentSchedule,
    setRouter,
    editSponsorProfile,
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
          <h2>EDIT MY PROFILE</h2>
          <button onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}> HOME PAGE </button>
        </section>
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <label>First Name *</label>
            <input
              type="text"
              autoFocus
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label>Last Name *</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label>Email *</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Date of Birth (DD-MM-YYYY) *</label>
            <input
              type="text"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></input>
            <label>CNIC </label>
            <input
              type="text"
              required
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
            ></input>
            <label>Phone Number *</label>
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <label>Address *</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <label>Preferred Medium of Communication *</label>
            <input
              type="text"
              required
              value={preferredMediumOfCommunication}
              onChange={(e) =>
                setPreferredMediumOfCommunication(e.target.value)
              } // make it into drop down menu
            ></input>
            <label>Number of Sponsored Children *</label>
            <input
              type="text"
              required
              value={numberOfSponsoredChildren}
              onChange={(e) => setNumberOfSponsoredChildren(e.target.value)}
            ></input>
            <label>Payment Method *</label>
            <input
              type="text"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)} // make it into drop down menu
            ></input>
            <label>Payment Schedule *</label>
            <input
              type="text"
              required
              value={paymentSchedule}
              onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
            ></input>

            <div className="btnContainer">
              <button onClick={() => {setRouter("registered");editSponsorProfile();}} className="button_green">
                ✅ Save Changes
              </button>
              <button onClick={() => setRouter("registered")} className="button_red">
                ❌ Discard Changes
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

export default EditMyProfileSponsor;
