import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';
const AdminChildrenProfiles = (props) => {
  const {
    handlelogout,
    childData,
    setRouter,
    totalChildren,
    deleteChildrenProfile,
    callchildeditprofile,
    fetchChildrenProfiles,
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
    `,
  } = props;

  console.log(childData)

  return (
    <body>
      <section className="navbar">
        <section></section>

        <section className="childrenProfiles">
          <div className="childrenProfilesContainer">
            <div class="row">
              <div class="col-md-6">
                <textbox className="label-left"> Add Filter</textbox>
                {/* convert to dropdown */}
              </div>
              <div class="col-md-6">
                <textbox className="label-left">
                  Total Children: {totalChildren}
                </textbox>
              </div>
              <div class="col-md-12">
                <div
                  onClick={() => setRouter("addchildrenprofile")}
                  class="Button"
                  className="button_green"
                >
                  {" "}
                  Add New Children
                </div>
              </div>
            </div>
            {childData.map((con, i) => {
              return (
                <div>
                  <div>
                    <Form>
                      <Form.Row>
                        <div class="col-md-6">
                          <Form.Label className="label-left">Name</Form.Label>
                          <Form.Control
                            type="text"
                            
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
                          <Form.Label className="label-right">Family Background</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={childData[i].familyBackground}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <div class="row">
                        <div class="col-md-6">
                          <div
                            onClick={() => callchildeditprofile(childData[i])}
                            class="Button"
                            className="button_blue"
                          >
                            {" "}
                            Edit this Profile
                          </div>
                        </div>
                        <div class="col-md-6">
                        <StyledPopup trigger={<div class = "Button" className= "button_redd">
                      Delete this Profile</div>} position="center" modal nested>
                    <div>
                     You are about to delete this profile. Do you want to continue?
                     </div>
                     <div class = "row">
                      <div class = "col-md-6">
                      
                     <button
                    
                         className="button_gray"
                       >
                         Cancel
                       </button> 

                       </div>
                       <div class = "col-md-6">
                       <button
                       onClick={() => deleteChildrenProfile(childData[i].id)
                       }
                         
                         className="button_red"
                       >
                       Delete this Profile
                       </button>

                       </div>
                       </div>
                       </StyledPopup>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              );
            })}
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
            <h2 className="titletext">CHILDREN PROFILES</h2>
            <p className="smalltext" onClick={() => fetchChildrenProfiles()}>
              <span>Sync</span>
            </p>
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

export default AdminChildrenProfiles;
