import React from "react";
import SearchField from "react-search-field";

const AdminAcademicReports = (props) => {
  const {
    handleLogout,
    child,
    reportType,
    marks1,
    setMarks1,
    marks2,
    setMarks2,
    marks3,
    setMarks3,
    marks4,
    setMarks4,
    marks5,
    setMarks5,
    marks6,
    setMarks6,
    totalMarks,
    setTotalMarks,
    percentage,
    setPercentage,
    grade,
    setGrade,
    setRouter,
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
          <button onClick={() => setRouter("home")}> HOME PAGE </button>
        </section>
        <section className="adminAcademicReports">
          <div className="adminAcademicReportsContainer">
            <div>
              <section>
                <button /*Make on click function */>Upload Report</button>
              </section>
              <section>
                <label>Child *</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={child}
                  // make drop down menu
                ></input>
              </section>
              <h3>OR</h3>
              <section>
                <label>Search</label>
                <SearchField />
              </section>
              <section>
                <label>Report Type</label>
                <input
                  type="text"
                  required
                  value={reportType}
                  // Make drop down menu
                ></input>
              </section>
              <section>
                <label>Subject 1</label>
                <input
                  type="text"
                  required
                  value={marks1}
                  onChange={(e) => setMarks1(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Subject 2</label>
                <input
                  type="text"
                  required
                  value={marks2}
                  onChange={(e) => setMarks2(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Subject 3</label>
                <input
                  type="text"
                  required
                  value={marks3}
                  onChange={(e) => setMarks3(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Subject 4</label>
                <input
                  type="text"
                  required
                  value={marks4}
                  onChange={(e) => setMarks4(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Subject 5</label>
                <input
                  type="text"
                  required
                  value={marks5}
                  onChange={(e) => setMarks5(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Subject 6</label>
                <input
                  type="text"
                  required
                  value={marks6}
                  onChange={(e) => setMarks6(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Total Marks</label>
                <input
                  type="text"
                  required
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Percentage</label>
                <input
                  type="text"
                  required
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                ></input>
              </section>
              <section>
                <label>Grade</label>
                <input
                  type="text"
                  required
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                ></input>
              </section>

              <div className="btnContainer">
                <button
                  // MakeonClick Function onClick={() => setRouter("registered")}
                  className="button_red"
                >
                  ❌ Discard Changes
                </button>
              </div>
              <div className="btnContainer">
                <button
                  // MakeonClick Function onClick={() => setRouter("registered")}
                  className="buttongreen"
                >
                  ✅ Save Changes
                </button>
              </div>
            </div>
          </div>
        </section>
        <button onClick={() => setRouter("admincontactus")}>Contact Us</button>
        <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
      </section>
    </body>
  );
};

export default AdminAcademicReports;
