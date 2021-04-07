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
    setFirstName,
    setLastName,
    setConfirmPassword,
    setDateOfBirth,
  } = props;

  return (
    <section className="signup">
      <div className="signupContainer">
        <label className="titletext">SIGN UP</label>
        <label className="label-left">First Name *</label>
        <p className="label-right">
          <p className="p_i">Last Name *</p>
        </p>
        <input
          className="input-left"
          type="text"
          autoFocus
          required
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <input
          className="input-right"
          type="text"
          required
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        ></input>

        <label className="label-left">Email *</label>
        <p className="label-right">
          {" "}
          <p className="p_ii">Date of Birth (DD-MM-YYYY) *</p>
        </p>
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
          value={dateofbirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        ></input>
        <label className="label-left">Password *</label>
        <label className="label-right">
          <p className="p_iii">Confirm Password *</p>
        </label>
        <input
          className="input-left"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input
          className="input-right"
          type="password"
          required
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{errorMessage}</p>
        <div className="btnContainer">
          <>
            {firstname &&
            lastname &&
            dateofbirth &&
            confirmpassword &&
            confirmpassword === password ? (
              <button className="button_green" onClick={handleSignUp}>
                Create My Account!
              </button>
            ) : (
              <button onClick={handleSignUp} className="button_gray">
                Create My Account!
              </button>
            )}
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
