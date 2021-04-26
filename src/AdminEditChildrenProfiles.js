import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const AdminEditChildrenProfiles = (props) => {
  const { handlelogout, setRouter, editChildProfile, childData,
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
    min-width: max-content;
   
    padding: 10px 10px;
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

  &-content .button_blue
  {
    border: none;
    outline: none;
    width: 50%;
    padding: 10px 0px;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    background: #529cea;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: max-content;
   
    padding: 10px 10px;
  }

  &-content .button_red
  {

    border: none;
    outline: none;
    //padding: 10px 0px;
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
    justify-content: center
    min-width: max-content;
   
    padding: 10px 10px;

  }
  `, } = props;

  console.log(childData)

  const [childName, setChildName] = useState(childData.name);
  const [childDateOfBirth, setChildDateOfBirth] = useState(childData.dateOfBirth);
  const [childGender, setChildGender] = useState(childData.gender);
  const [childCurrentAddress, setChildCurrentAddress] = useState(childData.currentAddress);
  const [childGrade, setChildGrade] = useState(childData.grade);
  const [childContactInformation, setChildContactInformation] = useState(childData.contactInformation);
  const [childGuardian1Name, setChildGuardian1Name] = useState(childData.guardian1Name);
  const [childGuardian1Relation, setChildGuardian1Relation] = useState(childData.guardian1Relation);
  const [childGuardian1Occupation, setChildGuardian1Occupation] = useState(childData.guardian1Occupation);
  const [childGuardian1Cnic, setChildGuardian1Cnic] = useState(childData.guardian1Cnic);
  const [childGuardian2Name, setChildGuardian2Name] = useState(childData.guardian2Name);
  const [childGuardian2Relation, setChildGuardian2Relation] = useState(childData.guardian2Relation);
  const [childFamilyBackground, setchildFamilyBackground] = useState(childData.familyBackground);

  return (
    <body>
       <section className="navbar">
        <section></section>
        <section className="childrenProfiles">
          <div className="childrenProfilesContainer">

          <div>
                  <div>
                    <Form>
                      <Form.Row>
                        <div class="col-md-6">
                          <Form.Label className="label-left">Name</Form.Label>
                          <Form.Control
                             type="text"

                             required
                             value={childName}
                             onChange={(e) => setChildName(e.target.value)}
                          ></Form.Control>
                        </div>
                        <div class="col-md-6">
                          <Form.Label className="label-right">
                            Date of Birth (DD-MM-YYYY)
                          </Form.Label>
                          <Form.Control
                             type="text"
                             required
                             value={childDateOfBirth}
                             onChange={(e) => setChildDateOfBirth(e.target.value)}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <Form.Row>
                        <div class="col-md-6">
                          <Form.Label className="label-left">Gender</Form.Label>
                          <Dropdown
                          className="my-className"
                          options={[
                            { value: "Female", label: "Female" },
                            { value: "Male", label: "Male" },
                            { value: "Other", label: "Other"}
                          ]}
                          required
                          placeholder={childGender}
                          value={childGender}
                          onSelect={(i) => setChildGender(i.value)}
                         />
                          {/* <Form.Control
                            type="text"
                            required
                            value={childGender}
                            onChange={(e) => setChildGender(e.target.value)}
                          ></Form.Control> */}
                        </div>
                        <div class="col-md-6">
                          <Form.Label className="label-right">
                            Current Address
                          </Form.Label>
                          <Form.Control
                             type="text"
                             required
                             value={childCurrentAddress}
                             onChange={(e) => setChildCurrentAddress(e.target.value)}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <Form.Row>
                        <div class="col-md-6">
                          <Form.Label className="label-left">Grade</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={childGrade}
                            onChange={(e) => setChildGrade(e.target.value)}
                          ></Form.Control>
                        </div>
                        <div class="col-md-6">
                          <Form.Label className="label-right">
                            Contact Information
                          </Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={childContactInformation}
                            onChange={(e) => setChildContactInformation(e.target.value)}
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
                            required
                            value={childGuardian1Name}
                            onChange={(e) => setChildGuardian1Name(e.target.value)}
                          ></Form.Control>
                        </div>
                        <div class="col-md-6">
                          <Form.Label className="label-right">
                            Guardian 1’s Relation
                          </Form.Label>
                          <Form.Control
                             type="text"
                             required
                             value={childGuardian1Relation}
                             onChange={(e) => setChildGuardian1Relation(e.target.value)}
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
                            required
                            value={childGuardian1Occupation}
                            onChange={(e) => setChildGuardian1Occupation(e.target.value)}
                          ></Form.Control>
                        </div>
                        <div class="col-md-6">
                          <Form.Label className="label-right">
                            Guardian 1’s CNIC
                          </Form.Label>
                          <Form.Control
                             type="text"
                             required
                             value={childGuardian1Cnic}
                             onChange={(e) => setChildGuardian1Cnic(e.target.value)}
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
                             required
                             value={childGuardian2Name}
                             onChange={(e) => setChildGuardian2Name(e.target.value)}
                          ></Form.Control>
                        </div>
                        <div class="col-md-6">
                          <Form.Label className="label-right">
                            Guardian 2’s Relation
                          </Form.Label>
                          <Form.Control
                           type="text"
                           required
                           value={childGuardian2Relation}
                           onChange={(e) => setChildGuardian2Relation(e.target.value)}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <Form.Row>
                        <div class="col">
                          <Form.Label>Family Background</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={childFamilyBackground}
                            onChange={(e) => setchildFamilyBackground(e.target.value)}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <div class="row">
                        <div class="col-md-6">
                          <div
                             onClick={() => {
                              setRouter("home");
                              editChildProfile({
                                name: childName,
                                dateOfBirth: childDateOfBirth,
                                gender: childGender,
                                currentAddress: childCurrentAddress,
                                grade: childGrade,
                                contactInformation: childContactInformation,
                                guardian1Name: childGuardian1Name,
                                guardian1Relation: childGuardian1Relation,
                                guardian1Occupation: childGuardian1Occupation,
                                guardian1Cnic: childGuardian1Cnic,
                                guardian2Name: childGuardian2Name,
                                guardian2Relation: childGuardian2Relation,
                                familyBackground: childFamilyBackground,
                                id: childData.id,
                                status: childData.status,
                              });
                            }}
                            class="Button"
                            className="button_green"
                          >
                            {" "}
                            Save Changes
                          </div>
                        </div>
                        <div class="col-md-6">
                        <StyledPopup trigger={<div class = "Button" className= "button_redd">
                     Discard Changes</div>} position="center" modal nested>


                     {close => (
      <div >
        <div>
          You are about to discard the changes made. Do you want to continue?
        </div>

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
                        onClick={() => setRouter("home")}
                         
                         className="button_red"
                       >
                        Discard Changes
                       </button>

                       </div>
                       </div>

      </div>
    )}
                       </StyledPopup>
                        </div>
                      </div>

                    </Form>
                  </div>
                </div>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handlelogout}>
            <span>Logout</span>
          </p>
        
          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext"> EDIT CHILDREN PROFILES</h2>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p
              className="smalltext"
              onClick={() => setRouter("admincontactus")}
            >
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("adminfaqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default AdminEditChildrenProfiles;
