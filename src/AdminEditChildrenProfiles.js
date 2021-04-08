import React from "react";
import SearchField from "react-search-field";

const AdminEditChildrenProfiles = (props) => {
  const {
    handleLogout,
    setRouter,
    childName,
    setChildName,
    childDateOfBirth,
    setChildDateOfBirth,
    childGender,
    setChildGender,
    childCurrentAddress,
    setChildCurrentAddress,
    childGrade,
    setChildGrade,
    childContactInformation,
    setChildContactInformation,
    childGuardian1Name,
    setChildGuardian1Name,
    childGuardian1Relation,
    setChildGuardian1Relation,
    childGuardian1Occupation,
    setChildGuardian1Occupation,
    childGuardian1CNIC,
    setChildGuardian1CNIC,
    childGuardian2Name,
    setChildGuardian2Name,
    childGuardian2Relation,
    setChildGuardian2Relation,
    childFamilyBackground,
    setchildFamilyBackground,
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
          <div className="adminChildrenProfilesContainer">
            <div>
              <section>
                <label>Name *</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Date of Birth (DD-MM-YYYY) *</label>
                <input
                  type="text"
                  required
                  value={childDateOfBirth}
                  onChange={(e) => setChildDateOfBirth(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Gender *</label>
                <input
                  type="text"
                  required
                  value={childGender}
                  onChange={(e) => setChildGender(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Current Address *</label>
                <input
                  type="text"
                  required
                  value={childCurrentAddress}
                  onChange={(e) => setChildCurrentAddress(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Grade *</label>
                <input
                  type="text"
                  required
                  value={childGrade}
                  onChange={(e) => setChildGrade(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Contact Information *</label>
                <input
                  type="text"
                  required
                  value={childContactInformation}
                  onChange={(e) => setChildContactInformation(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Guardian 1’s Name *</label>
                <input
                  type="text"
                  required
                  value={childGuardian1Name}
                  onChange={(e) => setChildGuardian1Name(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Guardian 1’s Relation *</label>
                <input
                  type="text"
                  required
                  value={childGuardian1Relation}
                  onChange={(e) => setChildGuardian1Relation(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Guardian 1’s Occupation *</label>
                <input
                  type="text"
                  required
                  value={childGuardian1Occupation}
                  onChange={(e) => setChildGuardian1Occupation(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Guardian 1’s CNIC *</label>
                <input
                  type="text"
                  required
                  value={childGuardian1CNIC}
                  onChange={(e) => setChildGuardian1CNIC(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Guardian 2’s Name *</label>
                <input
                  type="text"
                  required
                  value={childGuardian2Name}
                  onChange={(e) => setChildGuardian2Name(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Guardian 2’s Relation *</label>
                <input
                  type="text"
                  required
                  value={childGuardian2Relation}
                  onChange={(e) => setChildGuardian2Relation(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Family Background *</label>
                <input
                  type="text"
                  required
                  value={childFamilyBackground}
                  onChange={(e) => setchildFamilyBackground(e.target.value)}
                ></input>
              </section>

              <div className="btnContainer">
                <button
                  // MakeonClick Function onClick={() => setRouter("registered")}
                  className="button_red"
                >
                  ❌ Discard Changes
                </button>
              </div>
              <div className="btnContainer">
                <button
                  // MakeonClick Function onClick={() => setRouter("registered")}
                  className="buttongreen"
                >
                  ✅ Save Changes
                </button>
              </div>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("contactus")}>Contact Us</button>
        <button onClick={() => setRouter("faqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminEditChildrenProfiles;