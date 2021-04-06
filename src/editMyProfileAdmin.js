import React from "react";
import SearchField from "react-search-field";

const EditMyProfileAdmin = (props) => {
  const {
    firstname,
    lastname,
    email,
    dateofbirth,
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
    department,
    setDepartment,
    institution,
    setInstitution,
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
          <h2>EDIT MY PROFILE</h2>
          <button /*make on click function*/> HOME PAGE </button>
        </section>
        <section className="editMyProfileAdmin">
          <div className="editMyProfileAdminContainer">
            <label>First Name *</label>
            <input
              type="text"
              autoFocus
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label>Last Name *</label>
            <input
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label>Email *</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Date of Birth (DD-MM-YYYY) *</label>
            <input
              type="text"
              required
              value={dateofbirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></input>
            <label>CNIC *</label>
            <input
              type="text"
              required
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
            ></input>
            <label>Phone Number *</label>
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
            <label>Address *</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <label>Department *</label>
            <input
              type="text"
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            ></input>
            <label>Institution *</label>
            <input
              type="text"
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            ></input>

            <div className="btnContainer">
              <button /* make on click function*/ className="button_green">
                ✅ Save Changes
              </button>
              <button /* make on click function*/ className="button_red">
                ❌ Discard Changes
              </button>
            </div>
          </div>
        </section>
        <button>Contact Us</button>
        <button>FAQs</button>
      </section>
    </body>
  );
};

export default EditMyProfileAdmin;
