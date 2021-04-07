import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
const SponsorshipRequests = (props) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    handleLogout,
    cnic,
    phoneNumber,
    address,
    preferredMediumOfCommunication,
    numberOfSponsoredChildren,
    paymentMethod,
    paymentSchedule,
    createSponsorshipRequest,
    setRouter,
  } = props;

  return (
    <body>
      <section className="navbar">
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <SearchField className="search" />

          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>
        </nav>
        <section className="navbarContainer">
          <button
            className="smalltext"
            // Make changes to the onclick function
            // onClick={() =>
            //   applicationStatus
            //     ? setRouter("registered")
            //     : setRouter("unregistered")
            // }
          >
            {" "}
            HOME PAGE{" "}
          </button>
        </section>
        <section className="sponsorshipRequests">
          <div className="sponsorshipRequestsContainer">
            <h2 className="titletext">SPONSORSHIP REQUESTS</h2>
            <label className="label-left">First Name</label>
            <label className="label-right">
              <p className="p_i">Last Name</p>
            </label>
            <textbox className="input-left">{firstName}</textbox>
            <textbox className="input-right">{lastName}</textbox>
            <label className="label-left">Email</label>
            <label className="label-right">
              {" "}
              <p className="p_ii">Date of Birth (DD-MM-YYYY)</p>
            </label>
            <textbox className="input-left">{email}</textbox>

            <textbox className="input-right">{dateOfBirth}</textbox>
            <label className="label-left">CNIC </label>
            <label className="label-right">
              <p className="p_iii">Phone Number</p>
            </label>
            <textbox className="input-left">{cnic}</textbox>

            <textbox className="input-right">{phoneNumber}</textbox>
            <label className="label-left">Address</label>
            <label className="label-right">
              <p className="p_iv">Preferred Medium of Communication</p>
            </label>
            <textbox className="input-left">{address}</textbox>

            <textbox className="input-right">
              {preferredMediumOfCommunication}
            </textbox>
            <label className="label-left">Number of Sponsored Children</label>
            <label className="label-right">
              {" "}
              <p className="p_iv">Payment Method</p>
            </label>
            <textbox className="input-left">
              {numberOfSponsoredChildren}
            </textbox>

            <textbox className="input-right">{paymentMethod}</textbox>
            <label className="label-left">Payment Schedule</label>
            <textbox className="input-left">{paymentSchedule}</textbox>

            <div className="btnContainer">
              <button
                // Make new onclick function onClick={() => createSponsorshipRequest()}
                className="buttongreen"
              >
                ✅ Approve
              </button>
            </div>
            <div className="btnContainer">
              <button
                // MakeonClick Function onClick={() => setRouter("registered")}
                className="button_red"
              >
                ❌ Reject
              </button>
            </div>
          </div>
        </section>
        <section className="bottom_bar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}>
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("faqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default SponsorshipRequests;
