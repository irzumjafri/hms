import React from "react";
import logo from "./HMSlogo.png"
const AdminLogin = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleAdminLogin,
    errorMessage
  } = props;

  return (
    
    <section className="login">
      <img src={logo} className="Applogo" alt="logo" />
      <label className ="WelcomeTextBlack">Welcome to </label>
      <label className ="WelcomeTextBlue">HUNEHAR MANAGEMENT SYSTEM</label>
      <div className="loginContainer">
        
      
        <div className="btnContainer">
            <>
              <label className = "titletext">SIGN IN</label>
              <label>Username</label>
        <input
          className ="input-left"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          className ="input-left"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{errorMessage}</p>
              <button className = "button_blue" onClick={handleAdminLogin} >LOG IN</button>
            </>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
