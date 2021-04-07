import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png"
const RegisterAsSponsor = (props) => {
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
    createSponsorshipRequest,
    setRouter
  } = props;

  return (
    <body>
      <section className="navbar">
        <nav className = "navbarContainer_gray">
         <img src={logo} className="Applogo" alt="logo" />
          <h2 className= "titletext">Hunehar Management System</h2>
          <SearchField className ="search" />
         
          <p className = "smalltext" onClick={handleLogout}><span>Logout</span></p>
        </nav>
        <section className = "navbarContainer">
          <button className = "smalltext"/*make on click function*/> HOME PAGE </button>
        </section>
        <section className="register">
          <div className="registerContainer">
            <h2 className="titletext">REGISTER AS A SPONSOR</h2>
            <label className="label-left" >First Name *</label>
            <label className="label-right">
            <p className="p_i">Last Name *</p></label>
            <input className="input-left"
              type="text"
              autoFocus
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            
            <input
              className="input-right"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label className="label-left">Email *</label>
            <label className="label-right">  <p className="p_ii">Date of Birth (DD-MM-YYYY) *</p></label>
            <input
            className="input-left"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            
            <input
              className="input-right"
              type="text"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></input>
            <label className="label-left">CNIC </label>
            <label className="label-right"><p className="p_iii">Phone Number *</p></label>
            <input
             className="input-left"
              type="text"
              required
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
            ></input>
            
            <input
              className="input-right"
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <label className="label-left">Address *</label>
            <label className="label-right"><p className="p_iv">Preferred Medium of Communication * </p></label>
            <input className="input-left"
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
           
            <input className="input-right"
              type="text"
              required
              value={preferredMediumOfCommunication}
              onChange={(e) =>
                setPreferredMediumOfCommunication(e.target.value)
              } // make it into drop down menu
            ></input>
            <label className="label-left">Number of Sponsored Children *</label>
            <label className="label-right"> <p className="p_iv">Payment Method *</p></label>
            <input className="input-left"
              type="counter"
              required
              value={numberOfSponsoredChildren}
              onChange={(e) => setNumberOfSponsoredChildren(e.target.value)}
            ></input>
            
            <input className="input-right"
              type="text"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)} // make it into drop down menu
            ></input>
            <label className="label-left">Payment Schedule *</label>
            <input className="input-left"
              type="text"
              required
              value={paymentSchedule}
              onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
            ></input>

            <div className="btnContainer">
              <button onClick={() => createSponsorshipRequest()} className="button_green">
                Register Me!
              </button>
            </div>
          </div>
        </section >
        <section className = "bottom_bar">
         <navbar className = "bottombarContainer">
        <p className = "smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
        <p className = "smalltext"  onClick={() => setRouter("faqs")}><span>FAQs</span></p>
        </navbar>
        </section>
      </section>
    </body>
  );
};

export default RegisterAsSponsor;
