import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import Select from "react-select";
import logo from "./HMSlogo.png";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Styled from "styled-components";

const AdminAcademicReports = (props) => {
  const {
    handleLogout,
    childData,
    academicRecords,
    setRouter,
    addAcademicRecord,
    editAcademicRecords,
    fetchAcademicRecords,
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

  const [childName, setChildName] = useState("");
  const [reportType, setReportType] = useState("");
  const [id, setId] = useState("");
  const [n, setN] = useState("");
  const [rT, setRT] = useState("");
  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const [s3, setS3] = useState(0);
  const [s4, setS4] = useState(0);
  const [s5, setS5] = useState(0);
  const [s6, setS6] = useState(0);
  const [grd, setGrd] = useState("");
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  const fetchChildData = () => {
    var child = [];
    {
      childData.map((con, i) => {
          child.push({ label: childData[i].name, value: childData[i].name });
      });
    }

    return child;
  };

  const fetchChildReport = (n, t) => {
    var x = -1;
    academicRecords.map((con, i) => {
      if (n == academicRecords[i].name && t == academicRecords[i].reportType) {
        x = i;
      }
    });
    return x;
  };

  const setValues = (i) => {
    if (i == -1) {
      setId("");
      setN("");
      setRT("");
      setS1();
      setS2();
      setS3();
      setS4();
      setS5();
      setS6();
      setGrd("");
      setEditing(false);
    } else {
      setId(academicRecords[i].id);
      setN(academicRecords[i].name);
      setRT(academicRecords[i].reportType);
      setS1(parseInt(academicRecords[i].subject1));
      setS2(parseInt(academicRecords[i].subject2));
      setS3(parseInt(academicRecords[i].subject3));
      setS4(parseInt(academicRecords[i].subject4));
      setS5(parseInt(academicRecords[i].subject5));
      setS6(parseInt(academicRecords[i].subject6));
      setGrd(academicRecords[i].grade);
      setEditing(true);
    }
  };

  const reportOptions = [
    { label: "fall", value: "fall" },
    { label: "spring", value: "spring" },
  ];

  console.log(editing);

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="academicReportsSponsor">
          <div className="academicReportsSponsorContainer">
            {/* <div class="col-md-12">
                <div
                  onClick={() => setRouter("addpaymenthistory")}
                  class="Button"
                  className="button_green"
                >
                  {" "}
                  Add New Academic Record
                </div>
              </div> */}
            <Form>
              <Form.Row>
                <div class="col-md-6">
                  <Dropdown
                    className="my-className"
                    options={fetchChildData()}
                    placeholder="Please select a child"
                    value="Please select a child"
                    onSelect={(i) => {
                      {
                        setChildName(i.value);
                        setValues(fetchChildReport(i.value, reportType));
                      }
                    }} // always fires once a selection happens even if there is no change
                  />
                </div>
                <div class="col-md-6">
                  <Dropdown
                    className="my-className"
                    options={reportOptions}
                    placeholder="Please Select Report Type"
                    value="Please Select Report Type"
                    onSelect={(i) => {
                      {
                        setReportType(i.value);
                        setValues(fetchChildReport(childName, i.value));
                      }
                    }} // always fires once a selection happens even if there is no change
                  />
                </div>
              </Form.Row>
              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">English </Form.Label>
                  {/* <Form.Select options={marks1}/> */}
                  <Form.Control
                    type="text"
                    wha
                    autoFocus
                    required
                    value={s1}
                    onChange={(e) => setS1(parseInt(e.target.value))}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Oral </Form.Label>
                  {/* <Form.Select options={marks2}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s2}
                    onChange={(e) => setS2(parseInt(e.target.value))}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Urdu </Form.Label>
                  {/* <Form.Select options={marks3}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={s3}
                    onChange={(e) => setS3(parseInt(e.target.value))}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Oral</Form.Label>
                  {/* <Form.Select options={marks4}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s4}
                    onChange={(e) => setS4(parseInt(e.target.value))}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Math</Form.Label>
                  {/* <Form.Select options={marks5}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={s5}
                    onChange={(e) => setS5(parseInt(e.target.value))}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    General Knowledge
                  </Form.Label>
                  {/* <Form.Select options={marks6}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s6}
                    onChange={(e) => setS6(parseInt(e.target.value))}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Total Marks</Form.Label>
                  {/* <Form.Select options={totalMarks}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={s1 + s2 + s3 + s4 + s5 + s6}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Percentage</Form.Label>
                  {/* <Form.Select options={percentage}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={((s1 + s2 + s3 + s4 + s5 + s6) / 600) * 100}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-right">Grade</Form.Label>
                  {/* <Form.Select options={grade}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={grd}
                    onChange={(e) => setGrd(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>
            </Form>

            {/* <div class="row">
                        <div class="col-md-6">
                          <div className= "button_blue"
                            
                          >
                            {" "}
                            Edit this Profile
                          </div>
                        </div>

                        <div class="col-md-6">
                          <StyledPopup
                            trigger={
                              <div class="Button" className="button_redd">
                                Delete this Profile
                              </div>
                            }
                            position="center"

                            modal
                            nested
                          >
                            {(close) => (
                              <div>
                                <div>
                                  You are about to delete this record. Do you
                                  want to continue?
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <button
                                      onClick={() => {
                                        console.log("modal closed ");
                                        close();
                                      }}
                                      className="button_gray"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                  <div class="col-md-6">
                                    <button
                                      
                                      className="button_red"
                                    >
                                      Delete this Profile
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </StyledPopup>

            </div> */}
            <div class="row"><p classname='label-left'>{error}</p></div>
            <div class="row">
              <div className="col-md-6">
                {childName && reportType ? (
                  <button
                    onClick={() => {
                      {
                        editing
                          ? editAcademicRecords({
                              name: childName,
                              id: id,
                              reportType: reportType,
                              subject1: s1,
                              subject2: s2,
                              subject3: s3,
                              subject4: s4,
                              subject5: s5,
                              subject6: s6,
                              totalMarks: s1 + s2 + s3 + s4 + s5 + s6,
                              grade: grd,
                              percentage:
                                ((s1 + s2 + s3 + s4 + s5 + s6) / 600) * 100,
                            })
                          : addAcademicRecord({
                              name: childName,
                              reportType: reportType,
                              subject1: s1,
                              subject2: s2,
                              subject3: s3,
                              subject4: s4,
                              subject5: s5,
                              subject6: s6,
                              totalMarks: s1 + s2 + s3 + s4 + s5 + s6,
                              grade: grd,
                              percentage:
                                ((s1 + s2 + s3 + s4 + s5 + s6) / 600) * 100,
                            });
                      }
                      setError("")
                      setRouter("home");
                    }}
                    class="Button"
                    className="button_green"
                  >
                    {"                       "}
                    Save Changes
                  </button>
                ) : (
                  <button class="Button" className="button_grey" onClick = {() => {setError("Child Name or Report Type missing from entry.")}} >
                    {"                       "}
                    Save Changes
                  </button>
                )}
              </div>
              <div className="col-md-6">
                <StyledPopup
                  trigger={
                    <div class="Button" className="button_redd">
                      Discard Changes
                    </div>
                  }
                  position="center"
                  modal
                  nested
                >
                  {(close) => (
                    <div>
                      <div>
                        You are about to discard the changes made. Do you want
                        to continue?
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <button
                            onClick={() => {
                              console.log("modal closed ");
                              close();
                            }}
                            className="button_gray"
                          >
                            Cancel
                          </button>
                        </div>
                        <div class="col-md-6">
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
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}>
            <span>Logout</span>
          </p>

          <nav className="navbarContainer">
            <p className="smalltext" onClick={() => setRouter("home")}>
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">ACADEMIC REPORTS</h2>
            <p className="smalltext1" onClick={() => fetchAcademicRecords()}>
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

export default AdminAcademicReports;
