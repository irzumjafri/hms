import React from "react";
import SearchField from "react-search-field";

const AdminEditSponsorProfile = (props) => {
  const { sponsorProfile, setRouter, editSponsorProfile, handlelogout } = props;

  var firstName=sponsorProfile.firstName;
  var lastName=sponsorProfile.lastName; 
  var emailAddress=sponsorProfile.emailAddress;
  var dateOfBirth=sponsorProfile.dateOfBirth;
  var cnic=sponsorProfile.cnic;
  var phoneNumber=sponsorProfile.phoneNumber;
  var address=sponsorProfile.address;
  var preferredMediumOfCommunication=sponsorProfile.preferredMediumOfCommunication;
  var numberOfSponsoredChildren=sponsorProfile.numberOfSponsoredChildren;
  var paymentMethod=sponsorProfile.paymentMethod;
  var paymentSchedule=sponsorProfile.paymentSchedule;
  var id=sponsorProfile.id;
  var applicationStatus=sponsorProfile.applicationStatus;
  var howToAssignChildren=sponsorProfile.howToAssignChildren;

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
          <button onClick={() => setRouter("home")}> HOME PAGE </button>
        </section>
        <section className="adminEditSponsorProfile">
          <div className="adminEditSponsorProfileContainer">
            <label>First Name *</label>
            <input
              type="text"
              autoFocus
              required
              value={firstName}
              onChange={(e) => (firstName = e.target.value)}
            ></input>
            <label>Last Name *</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => (lastName = e.target.value)}
            ></input>
            <label>Email *</label>
            <input
              type="text"
              required
              value={emailAddress}
              onChange={(e) => (emailAddress = e.target.value)}
            ></input>
            <label>Date of Birth (DD-MM-YYYY) *</label>
            <input
              type="text"
              required
              value={dateOfBirth}
              onChange={(e) => (dateOfBirth = e.target.value)}
            ></input>
            <label>CNIC </label>
            <input
              type="text"
              required
              value={cnic}
              onChange={(e) => (cnic = e.target.value)}
            ></input>
            <label>Phone Number *</label>
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => (phoneNumber = e.target.value)}
            ></input>
            <label>Address *</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => (address = e.target.value)}
            ></input>
            <label>Preferred Medium of Communication *</label>
            <input
              type="text"
              required
              value={preferredMediumOfCommunication}
              onChange={(e) =>
                (preferredMediumOfCommunication = e.target.value)
              } // make it into drop down menu
            ></input>
            <label>Number of Sponsored Children *</label>
            <input
              type="text"
              required
              value={numberOfSponsoredChildren}
              onChange={(e) => (numberOfSponsoredChildren = e.target.value)}
            ></input>
            <label>Payment Method *</label>
            <input
              type="text"
              required
              value={paymentMethod}
              onChange={(e) => (paymentMethod = e.target.value)} // make it into drop down menu
            ></input>
            <label>Payment Schedule *</label>
            <input
              type="text"
              required
              value={paymentSchedule}
              onChange={(e) => (paymentSchedule = e.target.value)} // make it into drop down menu
            ></input>

            <div className="btnContainer">
              <button
                onClick={() => {
                  setRouter("sponsorprofiles");
                }}
                className="button_red"
              >
                ❌ Discard Changes
              </button>
              <button
                onClick={() => {
                  setRouter("sponsorprofiles");
                  editSponsorProfile({'firstName':firstName,'lastName':lastName,'emailAddress':emailAddress,'dateOfBirth':dateOfBirth,'cnic':cnic,'phoneNumber':phoneNumber,'address':address,'preferredMediumOfCommunication':preferredMediumOfCommunication,'numberOfSponsoredChildren':numberOfSponsoredChildren,'paymentMethod':paymentMethod,'paymentSchedule':paymentSchedule,'applicationStatus':applicationStatus,'howToAssignChildren':howToAssignChildren,'id':id});
                }}
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

export default AdminEditSponsorProfile;
