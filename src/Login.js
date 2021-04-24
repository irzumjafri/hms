import React from "react";
import logo from "./HMSlogo.png"

import { Button, Form } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';


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
    setErrorMessage,
    StyledPopup = Styled(Popup)`
    // use your custom style for ".popup-overlay"
    &-overlay {
      background: rgba(0, 0, 0, 0.5);
    }
    // use your custom style for ".popup-content"
    &-content {
      align-items: center;
      justify-content: center;
      margin: auto;
      background: white;
      width: 40%;
      padding: 5px;
      border-radius: 10px;
      font-size: 18px;
      padding: 2%;
    }
    
    &-content .button_green
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #33773d;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    `
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
              <button className = "button_blue" onClick={handleLogin} >LOG IN</button>
              <p className = "smalltext">
                Forgot Password?    
                <StyledPopup trigger={<span>
                  Click Here</span>} position="center" modal nested>
                  <Form>
                      <Form.Label>Enter Your Email</Form.Label>
                      <Form.Control
                        type="text"
                        // required
                        // value={childData[i].familyBackground}
                        // onChange={(e) => setInstitution(e.target.value)}
                      ></Form.Control>
                      </Form>
                      <StyledPopup trigger={<button  className="button_green">
                      Get Verification Code</button>} modal nested> 
                      
                      <Form>
                      <Form.Label>Enter Verification Code Received on Email</Form.Label>
                      <Form.Control
                        type="text"
                        // required
                        // value={childData[i].familyBackground}
                        // onChange={(e) => setInstitution(e.target.value)}
                      ></Form.Control>
                      </Form>
                      <StyledPopup trigger={<button  className="button_green">
                      Submit</button>} modal> 


                      <Form>
                      <Form.Label>New Password*</Form.Label>
                      <Form.Control
                        type="password"
                        // required
                        // value={childData[i].familyBackground}
                        // onChange={(e) => setInstitution(e.target.value)}
                      ></Form.Control>

                      <Form.Label>Confirm New Password*</Form.Label>
                      <Form.Control
                        type="password"
                        // required
                        // value={childData[i].familyBackground}
                        // onChange={(e) => setInstitution(e.target.value)}
                      ></Form.Control>


                      </Form>
                      <button  className="button_green">
                     Change Password</button>
                      
                      
                      </StyledPopup>

                      
                      </StyledPopup>
                    </StyledPopup>
              </p>
              <div className = "line">___________________________________</div>
              <button className = "button_green" onClick={() => {setHasAccount(!hasAccount);setErrorMessage("")}}> Create New Account</button>
            </>
        </div>
      </div>
    </section>
  );
};

export default Login;
