import React from "react";
import SearchField from "react-search-field";

const AdminChildrenProfiles = (props) => {
  const {
    handleLogout,
    childData,
    setRouter,
    applicationStatus,
    totalChildren,
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
          <h2>CHILDREN PROFILES</h2>
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
        <section className="adminChildrenProfiles">
          {childData.map((con, i) => {
            return (
              <div className="adminChildrenProfilesContainer">
                <section>
                  <button /*Make this drop down*/> Add Filter </button>
                  <textbox>Total Children: {totalChildren}</textbox>
                  <button className="buttongreen"> Add New Child </button>
                </section>
                <div>
                  <section>
                    <label>Name</label>
                    <textbox>{childData[i].name}</textbox>
                  </section>
                  <section>
                    <label>Date of Birth (DD-MM-YYYY)</label>
                    <textbox>{childData[i].dateOfBirth}</textbox>
                  </section>
                  <section>
                    <label>Gender</label>
                    <textbox>{childData[i].gender}</textbox>
                  </section>
                  <section>
                    <label>Current Address</label>
                    <textbox>{childData.currentAddress}</textbox>
                  </section>
                  <section>
                    <label>Grade</label>
                    <textbox>{childData[i].grade}</textbox>
                  </section>
                  <section>
                    <label>Contact Information</label>
                    <textbox>{childData[i].contactInformation}</textbox>
                  </section>
                  <section>
                    <label>Guardian 1’s Name</label>
                    <textbox>{childData[i].guardian1Name}</textbox>
                  </section>
                  <section>
                    <label>Guardian 1’s Relation</label>
                    <textbox>{childData[i].guardian1Realtion}</textbox>
                  </section>
                  <section>
                    <label>Guardian 1’s Occupation</label>
                    <textbox>{childData[i].guardian1Occupation}</textbox>
                  </section>
                  <section>
                    <label>Guardian 1’s CNIC</label>
                    <textbox>{childData[i].guardian1Cnic}</textbox>
                  </section>
                  <section>
                    <label>Guardian 2’s Name</label>
                    <textbox>{childData[i].guardian2Name}</textbox>
                  </section>
                  <section>
                    <label>Guardian 2’s Relation</label>
                    <textbox>{childData[i].guardian2Realtion}</textbox>
                  </section>
                  <section>
                    <label>Family Background</label>
                    <textbox>{childData[i].familyBackground}</textbox>
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

export default AdminChildrenProfiles;
