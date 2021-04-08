import React from "react";
import SearchField from "react-search-field";

const AdminSponsorProfiles = (props) => {
  const {
    handleLogout,
    sponsorData,
    setRouter,
    applicationStatus,
    totalSponsors,
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
          <h2>SPONSOR PROFILES</h2>
          <button
          // Make new onclick Function
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
        <section className="adminSponsorProfiles">
          {sponsorData.map((con, i) => {
            return (
              <div className="adminSponsorProfilesContainer">
                <section>
                  <button /*Make this drop down*/> Add Filter </button>
                  <textbox>Total Active Sponsors: {totalSponsors}</textbox>
                  <button className="buttongreen"> Add New Sponsor </button>
                </section>
                <div>
                  <section>
                    <label>First Name</label>
                    <textbox>{sponsorData[i].firstName}</textbox>
                  </section>
                  <section>
                    <label>Last Name</label>
                    <textbox>{sponsorData[i].lastName}</textbox>
                  </section>
                  <section>
                    <label>Email</label>
                    <textbox>{sponsorData[i].email}</textbox>
                  </section>
                  <section>
                    <label>Date of Birth (DD-MM-YYYY)</label>
                    <textbox>{sponsorData[i].dateOfBirth}</textbox>
                  </section>
                  <section>
                    <label>CNIC</label>
                    <textbox>{sponsorData[i].cnic}</textbox>
                  </section>
                  <section>
                    <label>Phone Number</label>
                    <textbox>{sponsorData[i].phoneNumber}</textbox>
                  </section>
                  <section>
                    <label>Address</label>
                    <textbox>{sponsorData.address}</textbox>
                  </section>
                  <section>
                    <label>Preferred Medium of Communication</label>
                    <textbox>
                      {sponsorData[i].preferredMediumOfCommunication}
                    </textbox>
                  </section>
                  <section>
                    <label>Number of Sponsored Children</label>
                    <textbox>
                      {sponsorData[i].numberofSponsoredChildren}
                    </textbox>
                  </section>
                  <section>
                    <label>Payment Method</label>
                    <textbox>{sponsorData[i].paymentMethod}</textbox>
                  </section>
                  <section>
                    <label>Payment Schedule</label>
                    <textbox>{sponsorData[i].paymentSchedule}</textbox>
                  </section>
                  <section>
                    <label>Status</label>
                    <textbox>{sponsorData[i].status}</textbox>
                  </section>

                  <div className="btnContainer">
                    <button
                      // MakeonClick Function onClick={() => setRouter("registered")}
                      className="button_red"
                    >
                      ❌ Delete this Profile
                    </button>
                  </div>
                  <div className="btnContainer">
                    <button
                      // MakeonClick Function onClick={() => setRouter("registered")}
                      className="buttonblue"
                    >
                      Edit this Profile
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminSponsorProfiles;
