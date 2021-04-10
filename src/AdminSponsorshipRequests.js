import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import AdminEditSponsorProfile from "./AdminEditSponsorProfile";
const SponsorshipRequests = (props) => {
  const {
    handlelogout,
    sponsorshipApplicationData,
    setRouter,
    rejectSponsorshipRequest,
    acceptSponsorshipRequest,
  } = props;

  return (
    <body>
      <section className="navbar">
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <SearchField className="search" />

          <p className="smalltext" onClick={handlelogout}>
            <span>Logout</span>
          </p>
        </nav>
        <section className="navbarContainer">
          <button className="smalltext" onClick={() => setRouter("home")}>
            HOME PAGE
          </button>
        </section>
        <section className="sponsorshipRequests">
          {sponsorshipApplicationData.map((con, i) => {
            return (
              <div className="adminSponsorProfilesContainer">
                <div>
                  <section>
                    <label>First Name</label>
                    <textbox>{sponsorshipApplicationData[i].firstName}</textbox>
                  </section>
                  <section>
                    <label>Last Name</label>
                    <textbox>{sponsorshipApplicationData[i].lastName}</textbox>
                  </section>
                  <section>
                    <label>Email</label>
                    <textbox>{sponsorshipApplicationData[i].email}</textbox>
                  </section>
                  <section>
                    <label>Date of Birth (DD-MM-YYYY)</label>
                    <textbox>
                      {sponsorshipApplicationData[i].dateOfBirth}
                    </textbox>
                  </section>
                  <section>
                    <label>CNIC</label>
                    <textbox>{sponsorshipApplicationData[i].cnic}</textbox>
                  </section>
                  <section>
                    <label>Phone Number</label>
                    <textbox>
                      {sponsorshipApplicationData[i].phoneNumber}
                    </textbox>
                  </section>
                  <section>
                    <label>Address</label>
                    <textbox>{sponsorshipApplicationData.address}</textbox>
                  </section>
                  <section>
                    <label>Preferred Medium of Communication</label>
                    <textbox>
                      {
                        sponsorshipApplicationData[i]
                          .preferredMediumOfCommunication
                      }
                    </textbox>
                  </section>
                  <section>
                    <label>Number of Sponsored Children</label>
                    <textbox>
                      {sponsorshipApplicationData[i].numberofSponsoredChildren}
                    </textbox>
                  </section>
                  <section>
                    <label>Payment Method</label>
                    <textbox>
                      {sponsorshipApplicationData[i].paymentMethod}
                    </textbox>
                  </section>
                  <section>
                    <label>Payment Schedule</label>
                    <textbox>
                      {sponsorshipApplicationData[i].paymentSchedule}
                    </textbox>
                  </section>
                  <section>
                    <label>Status</label>
                    <textbox>{sponsorshipApplicationData[i].status}</textbox>
                  </section>
                  <div className="btnContainer">
                    <button
                      onClick={() =>{
                        setRouter('home');
                        acceptSponsorshipRequest(
                          sponsorshipApplicationData[i].id,"manual"
                        )
                      
          }}
                      className="buttongreen"
                    >
                      ✅ Approve
                    </button>
                  </div>
                  <div className="btnContainer">
                    <button
                      onClick={() => {
                        setRouter("home");
                        rejectSponsorshipRequest(sponsorshipApplicationData[i].id);
                      }}
                      className="button_red"
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="bottom_bar">
          <navbar className="bottombarContainer">
            <button onClick={() => setRouter("admincontactus")}>
              Contact Us
            </button>
            <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default SponsorshipRequests;
