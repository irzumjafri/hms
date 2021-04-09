import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import {Button, Form} from 'react-bootstrap';
const ChildrenProfiles = (props) => {
  const {
    handleLogout,
    childData,
    setRouter,
    applicationStatus
  } = props;

  return (
    <body>
    <section className="navbar">
      <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">CHILDREN PROFILES</h2>
        </nav>
        <section>
          <button onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}> HOME PAGE </button>
        </section>

        <section className="childrenProfiles">
        {childData.map((con, i) => {
          return (
            <div className="childrenProfilesContainer">
              <Form>
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].name}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Date of Birth (DD-MM-YYYY)</Form.Label>
            <Form.Control
              type="text"
              required
              value={childData[i].name}
            ></Form.Control>
              </div>
              </Form.Row>
              
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Gender</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].gender}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Current Address</Form.Label>
            <Form.Control
              type="text"
              value={childData.currentAddress}
            ></Form.Control>
              </div>
              </Form.Row>
             
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Grade</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].grade}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Contact Information</Form.Label>
            <Form.Control
              type="text"
              required
              value={childData[i].contactInformation}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Guardian 1’s Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].guardian1Name}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Guardian 1’s Relation</Form.Label>
            <Form.Control
              type="text"
              required
              value={childData[i].guardian1Realtion}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Guardian 1’s Occupation</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].guardian1Occupation}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Guardian 1’s CNIC</Form.Label>
            <Form.Control
              type="text"
              required
              value={childData[i].guardian1Cnic}
            ></Form.Control>
              </div>
              </Form.Row>


              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Guardian 2’s Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].guardian2Name}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Guardian 2’s Relation</Form.Label>
            <Form.Control
              type="text"
              required
              value={childData[i].guardian2Realtion}
            ></Form.Control>
              </div>
              </Form.Row>


              
              <Form.Row >
              <div class = "col">
            <Form.Label>Family Background</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={childData[i].familyBackground}
            ></Form.Control>
            </div >

              </Form.Row>


              <div className="btnContainer">
                <button
                  // MakeonClick Function onClick={() => setRouter("registered")}
                  className="button_redd"
                >
                  Withdraw Sponsorship for This Child
                </button>
              </div>
            </Form>
          </div>
          
          );
        })}
          
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
            <p className="smalltext" onClick={() => setRouter("faqs")}><span>FAQs</span></p>
          </navbar>
        </section>
        </section>
    </body>
  );
};

export default ChildrenProfiles;
