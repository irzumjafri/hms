import React, { useState, useEffect, useRef } from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Styled from "styled-components";
import { FocusTrap } from "focus-trap-react";
const ChildrenProfiles = (props) => {

const{
 // myreason,
    
    handleLogout,
    childData,
    setRouter,
    applicationStatus,
    withdrawchild,
    setFirstName,
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

    &-content .button_gray
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #d3d3d3;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-content .button_red
    {

      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #ff0033;
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
  const focusTrap = require('focus-trap'); // CJS
// UMD: `focusTrap` is defined as a global on `window`


  const [i, setI] = useState(0);
  const [reason, setReason] = useState("");
  const myreason = useRef("");
  let globalreason = "";
  const onChange = (event) => {
    //event.preventDefault();
    myreason.current.concat(event.target.value);

  }

  const myreasonHandler = (e)=>
  {
    myreason.current.concat(e.target.value)
  }

// const focu = () =>
// {

//   myreason.current.focu()
// }


  console.log(childData);
  return (
    <body>
      <section className="navbar">
        <section></section>

        <section className="childrenProfiles">
          <div className="childrenProfilesContainer">
            return (
            <div>
              <Form>
                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">Name</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      required
                      value={childData[i].name}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Date of Birth (DD-MM-YYYY)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={childData[i].dateOfBirth}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">Gender</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      required
                      value={childData[i].gender}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Current Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={childData[i].currentAddress}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">Grade</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      required
                      value={childData[i].grade}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Contact Information
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={childData[i].contactInformation}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Guardian 1’s Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      required
                      value={childData[i].guardian1Name}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Guardian 1’s Relation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={childData[i].guardian1Relation}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Guardian 1’s Occupation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      required
                      value={childData[i].guardian1Occupation}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Guardian 1’s CNIC
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={childData[i].guardian1Cnic}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col-md-6">
                    <Form.Label className="label-left">
                      Guardian 2’s Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      required
                      value={childData[i].guardian2Name}
                    ></Form.Control>
                  </div>
                  <div class="col-md-6">
                    <Form.Label className="label-right">
                      Guardian 2’s Relation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={childData[i].guardian2Relation}
                    ></Form.Control>
                  </div>
                </Form.Row>

                <Form.Row>
                  <div class="col">
                    <Form.Label className="label-right">
                      Family Background
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={childData[i].familyBackground}
                      readonly
                    ></Form.Control>
                  </div>
                </Form.Row>
              </Form>

              <div className="btnContainer">
                
                <StyledPopup
                  trigger={
                    <button className="button_redd">
                      Withdraw Sponsorship for This Child
                    </button>
                  }
                  position="center"
                  modal
                  nested
                >
                  {close => (
                          <div >
                  <div>
                    You are about to withdraw sponsorship for this child. Do you
                    want to continue?
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        className="button_gray"
                        onClick={() => {
                          console.log('modal closed ');
                          close();
                        }}
                      >
                        {" "}
                        Cancel{" "}
                      </button>
                    </div>

                    <div class="col-md-6">
                      <StyledPopup id="modal" class="modal hide fade in" data-keyboard="false" data-backdrop="static"
                        trigger={
                          <button
                           
                          className="button_red"> Withdraw </button>
                        }
                        modal
                        
                      >
                                      
                        <Form>
                          <Form.Label>
                            Would you like to share why do you want to withdraw
                            sponsorship for this child?
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={myreason.current}
                            // onChange={(e) => setS1(e.target.value)}
                            ref = {myreason}
                            onChange= {(e) => myreasonHandler }
                            
                          ></Form.Control>
                        </Form>
                        
       

                       <div class = "row">
                      <div class = "col-md-6">
                      
                     <button
                        onClick={() => {
                          console.log('modal closed ');
                          close();
                        }}
                         className="button_gray"
                       >
                         Cancel
                       </button> 

                       </div>
                       <div class = "col-md-6">
                       <button
                              className="button_red"
                              onClick={() => {
                                withdrawchild({id:childData[i].id,reason:""});
                                {setReason(myreason.current)};
                              Send{" "}
                    </div>
                      
                     
                </StyledPopup>
              </div>
              <div className="btnContainer">
                <div class="row">
                  <div class="col-md-6">
                    {i ? (
                      <button
                        onClick={() => setI(i - 1)}
                        class="Button"
                        className="button_blue"
                      >
                        {" "}
                        Prev Page
                      </button>
                    ) : (
                      <button
                        class="Button"
                        className="button_gray"
                        //MAKE THIS GREYED OUT
                      >
                        {" "}
                        Prev Page
                      </button>
                    )}
                  </div>
                  <div class="col-md-6">
                    {i + 1 == childData.length ? (
                      <button
                        className="button_gray"

                        //MAKE THIS GREYED OUT
                      >
                        {" "}
                        Next Page
                      </button>
                    ) : (
                      <button
                        onClick={() => setI(i + 1)}
                        class="Button"
                        className="button_blue"
                      >
                        {" "}
                        Next Page
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            );
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <div className="smalltext">
            <Dropdown
              className="my-className"
              options={[
                { value: "changepw", label: "Edit Password" },
                { value: "editprofile", label: "Edit Profile" },
                { value: "deleteacc", label: "Delete Account" },
                { value: "logout", label: "Log Out" },
              ]}
              placeholder="My Account"
              value="My Account"
              onSelect={(i) => {
                if (i.value == "logout") {
                  handleLogout();
                } else if (i.value == "editprofile") {
                  setRouter("editmyprofile");
                } else if (i.value == "changepw") {
                  setRouter("editpassword");
                } else if (i.value == "deleteacc") {
                  setRouter("deleteaccount");
                }
              }} // always fires once a selection happens even if there is no change
            />
          </div>

          <nav className="navbarContainer">
            <p
              className="smalltext"
              onClick={() =>
                applicationStatus
                  ? setRouter("registered")
                  : setRouter("unregistered")
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">CHILDREN PROFILES</h2>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}>
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("faqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default ChildrenProfiles;
