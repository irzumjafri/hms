import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";

const AdminAddSponsorProfile = (props) => {
  const {
    setRouter,
    addSponsorProfile,
    handlelogout,
  } = props;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
  ] = useState("");
  const [numberOfSponsoredChildren, setNumberOfSponsoredChildren] = useState(
    ""
  );
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSchedule, setPaymentSchedule] = useState("");

  return (
    <body>
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handlelogout}>Logout</button>
        </nav>
        <section>
          <h2>SPONSOR PROFILES</h2>
          <button
            onClick={() =>
              setRouter('home')
            }
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="adminAddSponsorProfile">
          <div className="adminAddSponsorProfileContainer">
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
              <button onClick={() => setRouter("home")} className="button_red">
                ❌ Discard Profile
              </button>
              <button onClick=
                {() => {
                  setRouter("home");
                  addSponsorProfile({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    dateOfBirth: dateOfBirth,
                    cnic: cnic,
                    phoneNumber: phoneNumber,
                    address: address,
                    preferredMediumOfCommunication: preferredMediumOfCommunication,
                    numberOfSponsoredChildren: numberOfSponsoredChildren,
                    paymentMethod: paymentMethod,
                    paymentSchedule: paymentSchedule,
                    applicationStatus: "Accepted",
                    howToAssignChildren: "auto",
                  });
                }} className="buttongreen">
                
                ✅ Create Profile
              </button>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("admincontactus")}>Contact Us</button>
        <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminAddSponsorProfile;
