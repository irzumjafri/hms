import React from "react";
import SearchField from "react-search-field";
import Select from 'react-select';
import logo from "./HMSlogo.png";
import {Button, Form} from 'react-bootstrap';

const AcademicReportsSponsor = (props) => {
  const {
    handleLogout,
    child,
    reportType,
    marks1,
    marks2,
    marks3,
    marks4,
    marks5,
    marks6,
    totalMarks,
    percentage,
    grade,
    setRouter,
    applicationStatus
  } = props;

  return (
    <body>
     <section className="navbar">
      
        <section>

        </section>
        <section className="academicReportsSponsor">
          <div className="academicReportsSponsorContainer">
          <Form>
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Child</Form.Label>
            {/* <Form.Select options={child}/> */}
            <Form.Control
              type="text"
              autoFocus
              required
              value={child}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Report Type</Form.Label>
            {/* <Form.Select options={reportType}/> */}
            <Form.Control
              type="text"
              required
              value={reportType}
            ></Form.Control>
              </div>
              </Form.Row>



              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Subject 1</Form.Label>
            {/* <Form.Select options={marks1}/> */}
            <Form.Control
              type="text"
              autoFocus
              required
              value={marks1}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Subject 2</Form.Label>
            {/* <Form.Select options={marks2}/> */}
            <Form.Control
              type="text"
              required
              value={marks2}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Subject 3</Form.Label>
            {/* <Form.Select options={marks3}/> */}
            <Form.Control
              type="text"
              autoFocus
              required
              value={marks3}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Subject 4</Form.Label>
            {/* <Form.Select options={marks4}/> */}
            <Form.Control
              type="text"
              required
              value={marks4}
            ></Form.Control>
              </div>
              </Form.Row>


              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Subject 5</Form.Label>
            {/* <Form.Select options={marks5}/> */}
            <Form.Control
              type="text"
              autoFocus
              required
              value={marks5}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Subject 6</Form.Label>
            {/* <Form.Select options={marks6}/> */}
            <Form.Control
              type="text"
              required
              value={marks6}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">Total Marks</Form.Label>
            {/* <Form.Select options={totalMarks}/> */}
            <Form.Control
              type="text"
              autoFocus
              required
              value={marks5}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Percentage</Form.Label>
            {/* <Form.Select options={percentage}/> */}
            <Form.Control
              type="text"
              required
              value={marks6}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-right">Grade</Form.Label>
            {/* <Form.Select options={grade}/> */}
            <Form.Control
              type="text"
              required
              value={grade}
            ></Form.Control>
              </div>
              </Form.Row>

              </Form>
            <div>

              <div className="btnContainer">
                <button
                  // MakeonClick
                  className="button_green"
                >
                  View Report
                </button>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
          <h2 className="titletext">ACADEMIC REPORTS</h2>
        </nav>
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

export default AcademicReportsSponsor;
