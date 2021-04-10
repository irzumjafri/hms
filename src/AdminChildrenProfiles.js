import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
const AdminChildrenProfiles = (props) => {
  const {
    handleLogout,
    childData,
    setRouter,
    applicationStatus,
    totalChildren,
  } = props;

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
                  // ADD onclick
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
                            value={childData.currentAddress}
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
                            value={childData[i].guardian1Realtion}
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
                            value={childData[i].guardian2Realtion}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <Form.Row>
                        <div class="col">
                          <Form.Label>Family Background</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            required
                            value={childData[i].familyBackground}
                          ></Form.Control>
                        </div>
                      </Form.Row>

                      <div class="row">
                        <div class="col-md-6">
                          <div
                            // make onclick
                            class="Button"
                            className="button_blue"
                          >
                            {" "}
                            Edit this Profile
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                            // make onclick
                            class="Button"
                            className="button_redd"
                          >
                            {" "}
                            Delete this Profile
                          </div>
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
          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>
          <SearchField placeholder="search..." classNames="search" />
          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">CHILDREN PROFILES</h2>
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
