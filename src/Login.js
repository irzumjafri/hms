import React from "react";
import logo from "./HMSlogo.png";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    hasAccount,
    setHasAccount,
    errorMessage,
  } = props;

  return (
    <section className="login">
      <img src={logo} className="Applogo" alt="logo" />
      <label className="WelcomeTextBlack">Welcome to </label>
      <label className="WelcomeTextBlue">HUNEHAR MANAGEMENT SYSTEM</label>
      <div className="loginContainer">
        <div className="btnContainer">
          <label className="titletext">SIGN IN</label>
          <label>Email</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className="errorMsg">{errorMessage}</p>
          <button className="button_blue" onClick={handleLogin}>
            LOG IN
          </button>
          <p className="smalltext">
            Forgot Password?{" "}
            <span onClick={() => setHasAccount(!hasAccount)}>Click Here</span>
          </p>
          <div className="line">___________________________________</div>
          <button
            className="button_green"
            onClick={() => setHasAccount(!hasAccount)}
          >
            {" "}
            Create New Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
