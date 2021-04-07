import React from "react";
import SearchField from "react-search-field";

const ChildrenProfiles = (props) => {
  const {
    handleLogout,
    childName,
    childDateOfBirth,
    childGender,
    childCurrentAddress,
    childGrade,
    childContactInformation,
    childGuardian1Name,
    childGuardian1Realtion,
    childGuardian1Occupation,
    childGuardian1Cnic,
    childGuardian2Name,
    childGuardian2Realtion,
    childFamilyBackground,
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
          <button /*make on click function*/> HOME PAGE </button>
        </section>
        <section className="childrenProfiles">
          <div className="childrenProfilesContainer">
            <div>
              <section>
                <label>Name</label>
                <textbox>{childName}</textbox>
              </section>
              <section>
                <label>Date of Birth (DD-MM-YYYY)</label>
                <textbox>{childDateOfBirth}</textbox>
              </section>
              <section>
                <label>Gender</label>
                <textbox>{childGender}</textbox>
              </section>
              <section>
                <label>Current Address</label>
                <textbox>{childCurrentAddress}</textbox>
              </section>
              <section>
                <label>Grade</label>
                <textbox>{childGrade}</textbox>
              </section>
              <section>
                <label>Contact Information</label>
                <textbox>{childContactInformation}</textbox>
              </section>
              <section>
                <label>Guardian 1’s Name</label>
                <textbox>{childGuardian1Name}</textbox>
              </section>
              <section>
                <label>Guardian 1’s Relation</label>
                <textbox>{childGuardian1Realtion}</textbox>
              </section>
              <section>
                <label>Guardian 1’s Occupation</label>
                <textbox>{childGuardian1Occupation}</textbox>
              </section>
              <section>
                <label>Guardian 1’s CNIC</label>
                <textbox>{childGuardian1Cnic}</textbox>
              </section>
              <section>
                <label>Guardian 2’s Name</label>
                <textbox>{childGuardian2Name}</textbox>
              </section>
              <section>
                <label>Guardian 2’s Relation</label>
                <textbox>{childGuardian2Realtion}</textbox>
              </section>
              <section>
                <label>Family Background</label>
                <textbox>{childFamilyBackground}</textbox>
              </section>

              <div className="btnContainer">
                <button
                  // MakeonClick Function onClick={() => setRouter("registered")}
                  className="button_red"
                >
                  ❌ Withdraw Sponsorship for This Child
                </button>
              </div>
            </div>
          </div>
        </section>
        <button /*make on click function*/>Contact Us</button>
        <button /*make on click function*/>FAQs</button>
      </section>
    </body>
  );
};

export default ChildrenProfiles;
