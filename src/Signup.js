import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";

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
`,
  } = props;

  return (
    <section className="signup">
      <div className="signupContainer">
        <label className="titletext">SIGN UP</label>

        <Form>
          <Form.Row>
            <div class="col-md-6">
              <Form.Label className="label-left">First Name *</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                required
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </div>
            <div class="col-md-6">
              <Form.Label className="label-right">Last Name *</Form.Label>
              <Form.Control
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </div>
          </Form.Row>

          <Form.Row>
            <div class="col-md-6">
              <Form.Label className="label-left">Email *</Form.Label>
              <Form.Control
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </div>
            <div class="col-md-6">
              <Form.Label className="label-right">
                Date of Birth (DD-MM-YYYY) *
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={dateofbirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              ></Form.Control>
            </div>
          </Form.Row>

          <Form.Row>
            <div class="col-md-6">
              <Form.Label className="label-left">Password *</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </div>
            <div class="col-md-6">
              <Form.Label className="label-right">
                Confirm Password *
              </Form.Label>
              <Form.Control
                type="password"
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </div>
          </Form.Row>
        </Form>
        <p className="errorMsg">{errorMessage}</p>
        <div className="btnContainer">
          <>
            {firstname &&
            lastname &&
            dateofbirth &&
            confirmpassword &&
            confirmpassword === password ? (
              // <button className="button_green" onClick={handleSignUp}>
              //   Create My Account!</button>

              <button className="button_green" onClick={handleSignUp}>
                {" "}
                Create My Account!{" "}
              </button>
            ) : (
              <StyledPopup
                trigger={
                  <button className="button_gray" onClick={handleSignUp}>
                    Create My Account!
                  </button>
                }
                position="center"
                modal
              >
                <div>
                  All the required fields have not been filled. Press okay to go
                  back and fill in the missing information
                </div>
                <div>
                  <button className="button_green" onClick={handleSignUp}>
                    {" "}
                    OKAY!{" "}
                  </button>
                </div>
              </StyledPopup>
            )}
            {/*CSS: CHANGE BUTTON COLOR WHEN FIELDS AREN'T COMPLETE */}
            <p>
              Have an account?{" "}
              <span
                onClick={() => {
                  setHasAccount(!hasAccount);
                  setErrorMessage("");
                }}
              >
                Sign In
              </span>
            </p>
          </>
        </div>
      </div>
    </section>
  );
};

export default Signup;
