import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import Select from "react-select";
import logo from "./HMSlogo.png";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { Button, Form } from "react-bootstrap";

const AdminAcademicReports = (props) => {
  const {
    handleLogout,
    childData,
    academicRecords,
    setRouter,
    addAcademicRecord,
    editAcademicRecord,
    fetchAcademicRecords
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

  const reportOptions = [
    { label: "fall", value: "fall" },
    { label: "spring", value: "spring" },
  ];

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="academicReportsSponsor">
          <div className="academicReportsSponsorContainer">
            <Form>
              <Form.Row>
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
                <Dropdown
                  className="my-className"
                  options={reportOptions}
                  placeholder="Please select Report Type"
                  value="Please select Report Type"
                  onSelect={(i) => {
                    {
                      setReportType(i.value);
                      setValues(fetchChildReport(childName, i.value));
                    }
                  }} // always fires once a selection happens even if there is no change
                />
              </Form.Row>
              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Subject 1</Form.Label>
                  {/* <Form.Select options={marks1}/> */}
                  <Form.Control
                    type="text"
                    wha
                    autoFocus
                    required
                    value={s1}
                    onChange={(e) => setS1(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Subject 2</Form.Label>
                  {/* <Form.Select options={marks2}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s2}
                    onChange={(e) => setS2(e.target.value)}
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
                    value={s3}
                    onChange={(e) => setS3(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Subject 4</Form.Label>
                  {/* <Form.Select options={marks4}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s4}
                    onChange={(e) => setS4(e.target.value)}
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
                    value={s5}
                    onChange={(e) => setS5(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Subject 6</Form.Label>
                  {/* <Form.Select options={marks6}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={s6}
                    onChange={(e) => setS6(e.target.value)}
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
                    onChange={(e) => setTM(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Percentage</Form.Label>
                  {/* <Form.Select options={percentage}/> */}
                  <Form.Control
                    type="text"
                    required
                    value={perc}
                    onChange={(e) => setPerc(e.target.value)}
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
            <div>
              <div className="btnContainer">
                <button
                  onClick={() => {
                    setRouter("home");
                  }}
                  class="Button"
                  className="button_blue"
                >
                  {" "}
                  Discard Changes
                </button>
              </div>

              <div className="btnContainer">
                <button
                  onClick={() => {
                    editing
                      ? addAcademicRecord({
                          name: n,
                          id: id,
                          reportType: rT,
                          subject1: s1,
                          subject2: s2,
                          subject3: s3,
                          subject4: s4,
                          subject5: s5,
                          subject6: s6,
                          totalMarks: tM,
                          grade: grd,
                          percentage: perc,
                        })
                      : editAcademicRecord({
                          name: n,
                          id: id,
                          reportType: rT,
                          subject1: s1,
                          subject2: s2,
                          subject3: s3,
                          subject4: s4,
                          subject5: s5,
                          subject6: s6,
                          totalMarks: tM,
                          grade: grd,
                          percentage: perc,
                        });
                  }}
                  class="Button"
                  className="button_blue"
                >
                  {" "}
                  Save Changes
                </button>
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
          <SearchField placeholder="search..." classNames="search" />

          <nav className="navbarContainer">
            <p
              className="smalltext"
              onClick={() =>
                setRouter('home')
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">ACADEMIC REPORTS</h2>
            <p
              className="smalltext"
              onClick={() =>
                fetchAcademicRecords()}
            >
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
