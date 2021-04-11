import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";

const AdminEditChildrenProfiles = (props) => {
  const { handlelogout, setRouter, editChildProfile, childData } = props;

  console.log(childData)

  const [childName, setChildName] = useState(childData.name);
  const [childDateOfBirth, setChildDateOfBirth] = useState(childData.dateOfBirth);
  const [childGender, setChildGender] = useState(childData.gender);
  const [childCurrentAddress, setChildCurrentAddress] = useState(childData.currentAddress);
  const [childGrade, setChildGrade] = useState(childData.grade);
  const [childContactInformation, setChildContactInformation] = useState(childData.contactInformation);
  const [childGuardian1Name, setChildGuardian1Name] = useState(childData.guardian1Name);
  const [childGuardian1Relation, setChildGuardian1Relation] = useState(childData.guardian1Relation);
  const [childGuardian1Occupation, setChildGuardian1Occupation] = useState(childData.guardian1Occupation);
  const [childGuardian1Cnic, setChildGuardian1Cnic] = useState(childData.guardian1Cnic);
  const [childGuardian2Name, setChildGuardian2Name] = useState(childData.guardian2Name);
  const [childGuardian2Relation, setChildGuardian2Relation] = useState(childData.guardian2Relation);
  const [childFamilyBackground, setchildFamilyBackground] = useState(childData.familyBackground);

  console.log(childGuardian1Occupation)
  console.log(childGuardian1Cnic)
  return (
    <body>
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handlelogout}>Logout</button>
        </nav>
        <section>
          <h2>CHILDREN PROFILES</h2>
          <button onClick={() => setRouter("home")}> HOME PAGE </button>
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
                  value={childGuardian1Cnic}
                  onChange={(e) => setChildGuardian1Cnic(e.target.value)}
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
                  onClick={() => setRouter("home")}
                  className="button_red"
                >
                  ❌ Discard Changes
                </button>
              </div>
              <div className="btnContainer">
                <button
                  onClick={() => {
                    setRouter("home");
                    editChildProfile({
                      name: childName,
                      dateOfBirth: childDateOfBirth,
                      gender: childGender,
                      currentAddress: childCurrentAddress,
                      grade: childGrade,
                      contactInformation: childContactInformation,
                      guardian1Name: childGuardian1Name,
                      guardian1Relation: childGuardian1Relation,
                      guardian1Occupation: childGuardian1Occupation,
                      guardian1Cnic: childGuardian1Cnic,
                      guardian2Name: childGuardian2Name,
                      guardian2Relation: childGuardian2Relation,
                      familyBackground: childFamilyBackground,
                      id: childData.id,
                      status: childData.status,
                    });
                  }}
                  className="buttongreen"
                >
                  ✅ Save Changes
                </button>
              </div>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("admincontactus")}>Contact Us</button>
        <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminEditChildrenProfiles;
