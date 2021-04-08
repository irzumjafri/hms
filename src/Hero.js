import React from "react";
import SearchField from "react-search-field";

const AdminEditFAQs = (props) => {
  const {
    questions,
    answers,
    handleLogout,
    setRouter,
    applicationStatus,
  } = props;

  return (
    <body>
<<<<<<< Updated upstream
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <section>
          <h2>Edit Frequently Asked Questions (FAQs)</h2>
          <button
          // Make relevant changes
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
        <section className="adminEditFaqs">
          {questions.map((con, i) => {
            return (
              <div className="adminEditFaqsContainer">
                <label>Question {i + 1}</label>
                <input
                  type="text"
                  autoFocus
                  value={questions[i]}
                  onChange={(e) => questions[i].setQuestions(e.target.value)}
                ></input>
                <input
                  type="text"
                  value={answers[i]}
                  onChange={(e) => answers[i].setAnswers(e.target.value)}
                ></input>
              </div>
            );
          })}
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
=======
      <section className="navbar">
        <nav className = "navbarContainer_gray">
         <img src={logo} className="Applogo" alt="logo" />
          <h2 className= "titletext">Hunehar Management System</h2>
          <SearchField className ="search" />
         
          <p className = "smalltext" onClick={handleLogout}><span>Logout</span></p>
        </nav>
        <section className = "navbarContainer">
          <button className = "smalltext"onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}> HOME PAGE </button>
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
            <label className="label-right"> <p className="p_v">Payment Method *</p></label>
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
            <label className="label-left"> Payment Schedule *</label>
            <label className="label-right">  <p className="p_iv"></p></label>
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
>>>>>>> Stashed changes
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminEditFAQs;
