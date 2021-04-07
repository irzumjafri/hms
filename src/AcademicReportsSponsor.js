import React from "react";
import SearchField from "react-search-field";

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
  } = props;

  return (
    <body>
      <section>
        <nav>
          <h2>Hunehar Management System</h2>
          <SearchField />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <section>
          <h2>ACADEMIC REPORTS</h2>
          <button /*make on click function*/> HOME PAGE </button>
        </section>
        <section className="academicReportsSponsor">
          <div className="academicReportsSponsorContainer">
            <div>
              <section>
                <label>Child</label>
                <textbox /*Make drop down menu */>{child}</textbox>
              </section>
              <section>
                <label>Report Type</label>
                <textbox /*Make drop down menu */>{reportType}</textbox>
              </section>
              <section>
                <label>Subject 1</label>
                <textbox>{marks1}</textbox>
              </section>
              <section>
                <label>Subject 2</label>
                <textbox>{marks2}</textbox>
              </section>
              <section>
                <label>Subject 3</label>
                <textbox>{marks3}</textbox>
              </section>
              <section>
                <label>Subject 4</label>
                <textbox>{marks4}</textbox>
              </section>
              <section>
                <label>Subject 5</label>
                <textbox>{marks5}</textbox>
              </section>
              <section>
                <label>Subject 6</label>
                <textbox>{marks6}</textbox>
              </section>
              <section>
                <label>Total Marks</label>
                <textbox>{totalMarks}</textbox>
              </section>
              <section>
                <label>Percentage</label>
                <textbox>{percentage}</textbox>
              </section>
              <section>
                <label>Grade</label>
                <textbox>{grade}</textbox>
              </section>

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
        <button /*make on click function*/>Contact Us</button>
        <button /*make on click function*/>FAQs</button>
      </section>
    </body>
  );
};

export default AcademicReportsSponsor;
