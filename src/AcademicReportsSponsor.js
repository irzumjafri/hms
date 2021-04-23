import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import Select from "react-select";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";

const AcademicReportsSponsor = (props) => {
  const {
    handleLogout,
    academicRecords,
    setRouter,
    applicationStatus,
  } = props;

  const [i, setI] = useState(0);

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="academicReportsSponsor">
          <div className="academicReportsSponsorContainer">
            <Form>
              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Child</Form.Label>
                  {/* <Form.Select options={child}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={academicRecords[i].name}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Report Type</Form.Label>
                  {/* <Form.Select options={reportType}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={academicRecords[i].reportType}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Subject 1</Form.Label>
                  {/* <Form.Select options={marks1}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={academicRecords[i].subject1}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Subject 2</Form.Label>
                  {/* <Form.Select options={marks2}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={academicRecords[i].subject2}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Subject 3</Form.Label>
                  {/* <Form.Select options={marks3}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={academicRecords[i].subject3}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Subject 4</Form.Label>
                  {/* <Form.Select options={marks4}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={academicRecords[i].subject4}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Subject 5</Form.Label>
                  {/* <Form.Select options={marks5}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={academicRecords[i].subject5}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Subject 6</Form.Label>
                  {/* <Form.Select options={marks6}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={academicRecords[i].subject6}
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
                    value={academicRecords[i].totalMarks}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Percentage</Form.Label>
                  {/* <Form.Select options={percentage}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={academicRecords[i].percentage}
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
                    value={academicRecords[i].grade}
                  ></Form.Control>
                </div>
              </Form.Row>
            </Form>
            <div>
              <div className="btnContainer">
                <div class= "row">
                <div class= "col-md-6">
                  
              {i ? (<button
                  onClick={() => setI(i-1)}
                  
                  className="button_blue"
                >
                  {" "}
                  Prev Page
                </button>) : (<button
                  
                  className = "button_gray"
                  //MAKE THIS GREYED OUT
                >
                  {" "}
                  Prev Page
                </button>)}
                </div>
                <div class= "col-md-6">

                {i+1==academicRecords.length ? (<button
                  
                  className = "button_gray"
                  //MAKE THIS GREYED OUT
                >
                  Next Page
                </button>) : (<button
                  onClick={() => setI(i+1)}
                  
                  className="button_blue"
                >
                  Next Page
                </button>)}
                 </div>
                </div>
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
            <h2 className="titletext">ACADEMIC REPORTS</h2>
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

export default AcademicReportsSponsor;
