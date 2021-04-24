import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import Select from "react-select";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";


const AcademicReportsSponsor = (props) => {
  const {
    handleLogout,
    academicRecords,
    setRouter,
    applicationStatus,
    childData
  } = props;

  const [childName, setChildName] = useState("");
  const [reportType, setReportType] = useState("");
  const [id, setId] = useState("");
  const [n, setN] = useState("");
  const [rT, setRT] = useState("");
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [s4, setS4] = useState("");
  const [s5, setS5] = useState("");
  const [s6, setS6] = useState("");
  const [tM, setTM] = useState("");
  const [perc, setPerc] = useState("");
  const [grd, setGrd] = useState("");
  const [editing, setEditing] = useState(false);

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


  const reportOptions = [
    { label: "fall", value: "fall" },
    { label: "spring", value: "spring" },
  ];

  const setValues = (i) => {
    if (i == -1) {
      setId("");
      setN("");
      setRT("");
      setS1("");
      setS2("");
      setS3("");
      setS4("");
      setS5("");
      setS6("");
      setTM("");
      setPerc("");
      setGrd("");
      setEditing(false);
    } else {
      setId(academicRecords[i].id);
      setN(academicRecords[i].name);
      setRT(academicRecords[i].reportType);
      setS1(academicRecords[i].subject1);
      setS2(academicRecords[i].subject2);
      setS3(academicRecords[i].subject3);
      setS4(academicRecords[i].subject4);
      setS5(academicRecords[i].subject5);
      setS6(academicRecords[i].subject6);
      setTM(academicRecords[i].totalMarks);
      setPerc(academicRecords[i].percentage);
      setGrd(academicRecords[i].grade);
      setEditing(true);
    }
  };

  const [i, setI] = useState(0);

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="academicReportsSponsor">
          <div className="academicReportsSponsorContainer">
            <Form>
              <Form.Row>
              <div class = "col-md-6">
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
                <div class = "col-md-6">
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
                  <Form.Label className="label-left">English</Form.Label>
                  {/* <Form.Select options={marks1}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={s1}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Oral</Form.Label>
                  {/* <Form.Select options={marks2}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s2}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Urdu</Form.Label>
                  {/* <Form.Select options={marks3}/> */}
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={s3}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Oral</Form.Label>
                  {/* <Form.Select options={marks4}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s4}
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
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">General Knowledge</Form.Label>
                  {/* <Form.Select options={marks6}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s6}
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
                    value={tM}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Percentage</Form.Label>
                  {/* <Form.Select options={percentage}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={perc}
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
                  ></Form.Control>
                </div>
              </Form.Row>
            </Form>
            
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
            <h2 className="titletext">ACADEMIC REPORTS</h2>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p
              className="smalltext"
              onClick={() => setRouter("contactus")}
            >
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

export default AcademicReportsSponsor;
