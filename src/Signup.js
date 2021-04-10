import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import {Button, Form} from 'react-bootstrap';

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


        <Form>
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">First Name *</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Last Name *</Form.Label>
            <Form.Control
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">Email *</Form.Label>
            <Form.Control
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
            </Form.Control>
            </div>
            <div  class = "col-md-6">
            <Form.Label className= "label-right">Date of Birth (DD-MM-YYYY) *</Form.Label>
            <Form.Control
              type="text"
              required
              value={dateofbirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            >
              </Form.Control>
            </div >
            </Form.Row>

            <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">Password *</Form.Label>
            <Form.Control
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </Form.Control>
            </div>
            <div class = "col-md-6">
            <Form.Label className= "label-right">Confirm Password *</Form.Label>
            <Form.Control
              type="password"
              required
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            >
              </Form.Control>
            </div >
            </Form.Row >

         </Form>
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
