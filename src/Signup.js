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
    emailError,
    pwdError,
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
        <p className="errorMsg">{emailError}</p>
        <label>Date of Birth (DD-MM-YYYY) *</label>
        <input
          type="text"
          required
          value={dateofbirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        ></input>
        <label>New Password *</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{pwdError}</p>
        <label>Confirm New Password *</label>
        <input
          type="password"
          required
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{pwdError}</p>
        <div className="btnContainer">
          <>
            <button onClick={handleSignUp}>Create My Account!</button>
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
