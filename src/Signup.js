import React from "react";

const Signup = (props) => {
  const {
    firstname,
    lastname,
    email,
    dateofbirth,
    setEmail,
    password,
    setPassword,
    confirmpassword,
    handleSignUp,
    hasAccount,
    setHasAccount,
    errorMessage,
    setErrorMessage,
    setFirstName,
    setLastName,
    setConfirmPassword,
    setDateOfBirth,
  } = props;

  return (
    <section className="signup">
      <div className="signupContainer">
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
        <label>Password *</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label>Confirm Password *</label>
        <input
          type="password"
          required
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{errorMessage}</p>
        <div className="btnContainer">
          <>
            {(firstname && lastname && dateofbirth && confirmpassword && confirmpassword == password) ? (<button className = "button_green" onClick={handleSignUp}>Create My Account!</button>) : (<button onClick={handleSignUp} className = "button_blue">Create My Account!</button>)}
            {/*CSS: CHANGE BUTTON COLOR WHEN FIELDS AREN'T COMPLETE */}
            <p>
              Have an account?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
            </p>
          </>
        </div>
      </div>
    </section>
  );
};

export default Signup;
