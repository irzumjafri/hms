import React, { useState, useEffect } from "react";
import firebase from "firebase";
import fire from "./fire";
import "./App.css";
import AdminHome from "./AdminHome";
import AdminEditMyProfile from "./AdminEditMyProfile";
import AdminChildrenProfiles from "./AdminChildrenProfiles";
import AdminSponsorProfiles from "./AdminSponsorProfiles";
import AdminEditContactUs from "./AdminEditContactUs";
import AdminEditFAQs from "./AdminEditFAQs";
import AdminPaymentHistory from "./AdminPaymentHistory";
import AdminMeetingRequests from "./AdminMeetingRequests";
import AdminAcademicReports from "./AdminAcademicReports";
import AdminContactUs from "./AdminContactUs";
import AdminFAQs from "./AdminFaqs";
import AdminSponsorshipRequests from "./AdminSponsorshipRequests";
import AdminLogin from "./AdminLogin";

// setting up the database here
const db = firebase.firestore();
// setting this settign to avoid warnings
db.settings({ timestampsInSnapshots: true });

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [institution, setInstitution] = useState("");
  const [
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
  ] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [sponsorData, setSponsorData] = useState([
    {
      firstName: "irzum",
      lastName: "jafri",
      email: "irzumbm@gmail.com",
      dateOfBirth: "LUMSU",
      cnic: "A++++",
      phoneNumber: "090078601",
      address: "myself",
      preferredMediumOfCommunication: "daddy",
      numberOfSponsoredChildren: "123-123",
      paymentMethod: "myself",
      paymentSchedule: "daddy",
      status: "pathanKhandaan",
    },
    {
      firstName: "irzumirzum",
      lastName: "jafri",
      email: "irzumbm@gmail.com",
      dateOfBirth: "LUMSU",
      cnic: "A++++",
      phoneNumber: "090078601",
      address: "myself",
      preferredMediumOfCommunication: "daddy",
      numberOfSponsoredChildren: "123-123",
      paymentMethod: "myself",
      paymentSchedule: "daddy",
      status: "pathanKhandaan",
    },
  ]);
  const [numberOfSponsoredChildren, setNumberOfSponsoredChildren] = useState(
    ""
  );
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSchedule, setPaymentSchedule] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [router, setRouter] = useState("home"); //change it to null value when updating from database
  const [applicationStatus, setApplicationStatus] = useState(true);
  const [howToAssignChildren, setHowToAssignChildren] = useState("");
  const [questions, setQuestions] = useState([
    "are you okay",
    "are you ok",
    "are you oka",
    "are you k",
  ]);
  const [answers, setAnswers] = useState(["no", "yes", "no", "yes"]);
  const [paymentDate, setPaymentDate] = useState([
    "01-01-0001",
    "02-01-0001",
    "03-01-0001",
    "04-01-0001",
  ]);
  const [amount, setAmount] = useState(["1000", "2000", "3000", "4000"]);
  const [childData, setChildData] = useState([
    {
      name: "irzum",
      dateOfBirth: "01-01-0001",
      gender: "male",
      currentAddress: "LUMSU",
      grade: "A++++",
      contactInformation: "090078601",
      guardian1Name: "myself",
      guardian1Relation: "daddy",
      guardian1Cnic: "123-123",
      guardian2Name: "myself",
      guardian2Relation: "daddy",
      familyBackground: "pathanKhandaan",
    },
    {
      name: "irzumbmW",
      dateOfBirth: "01-01-0001",
      gender: "male",
      currentAddress: "LUMSU",
      grade: "A++++",
      contactInformation: "090078601",
      guardian1Name: "myself",
      guardian1Relation: "daddy",
      guardian1Cnic: "123-123",
      guardian2Name: "myself",
      guardian2Relation: "daddy",
      familyBackground: "pathanKhandaan",
    },
  ]);
  const [myChildren, setMyChildren] = useState([
    { value: 1, label: "shabbir" },
    { value: 2, label: "altaf" },
    { value: 3, label: "bashir" },
    { value: 4, label: "naseem" },
  ]);
  const [letterBody, setLetterBody] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const [writeOrReceive, setWriteOrReceive] = useState(true);
  const [recievedLetters, setRecievedLetters] = useState([
    { from: "irtasam", message: "Ki haal chaal ai?" },
    { from: "irtasam", message: "paisay bhijwao, creately lena hai" },
    { from: "irtasam", message: "credit card bhi donate kardo" },
  ]);

  // This funtion is done to authenticate admin login. Returns true if login match successful otherwise false
  const handleAdminLogin = () => {
    console.log("broooooooooooooooo");

    // const dbData = db
    //   .collection("adminProfiles")
    //   .where("email", "==", email)
    //   .get();

    // if (dbData.data().password === password) {
    //   console.log("true");
    //   setLoggedIn(true);
    // } else {
    //   console.log("false");
    //   setLoggedIn(false);
    //   setErrorMessage("Unauthorzied Access");
    // }

    db.collection("adminProfiles")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // no email match found hence an attempt at unauthorized access to prevent
          setErrorMessage("Unauthorized Access");
          setLoggedIn(false);
          return;
        } else {
          querySnapshot.forEach((doc) => {
            console.log("Here", doc.data().password);
            console.log("Hi", doc.data().email);

            if (password === doc.data().password) {
              console.log("In true");
              // allow login
              setLoggedIn(true);
            } else {
              console.log("In false");
              // password did not match so don't allow for login
              setLoggedIn(false);
            }
          });
        }
      });
  };

  // This function allows Admin Users to Logout
  const handleLogout = () => {
    setRouter("home"); //change it to null value when updating from database
    fire.auth().signOut();
  };

  // Admin users can edit their profile information using this function
  const editMyProfile = (email) => {
    db.collection("adminProfiles")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.update({
          firstName: firstName,
          lastName: lastName,
          emailAddress: email,
          dateOfBirth: dateOfBirth,
          cnic: cnic,
          phoneNumber: phoneNumber,
          address: address,
          department: department,
          institution: institution,
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  //  Edit My Profile (Sponsor). Function that allows sponsor to update their credentials
  // const editSponsorProfile = () => {
  //   let profileToEdit = db.collection("registeredSponsors").doc(user.uid); // or search through name?

  //   return profileToEdit.update({
  //     firstName: firstName,
  //     lastName: lastName,
  //     emailAddress: email,
  //     dateOfBirth: dateOfBirth,
  //     cnic: cnic,
  //     phoneNumber: phoneNumber,
  //     address: address,
  //     preferredMediumOfCommunication: preferredMediumOfCommunication,
  //     numberOfSponsoredChildren: numberOfSponsoredChildren,
  //     paymentMethod: paymentMethod,
  //     paymentSchedule: paymentSchedule,

  //     // cannot be updated by the sponsor so we don't even show them in the front end
  //     applicationStatus: applicationStatus,
  //     howToAssignChildren: howToAssignChildren,
  //   });
  // };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setErrorMessage("");
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          {
            {
              home: (
                <AdminHome setRouter={setRouter} handleLogout={handleLogout} />
              ),
              editmyprofile: (
                <AdminEditMyProfile
                  setRouter={setRouter}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  dateOfBirth={dateOfBirth}
                  setEmail={setEmail}
                  handleLogout={handleLogout}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setDateOfBirth={setDateOfBirth}
                  cnic={cnic}
                  setCnic={setCnic}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  address={address}
                  setAddress={setAddress}
                  department={department}
                  setDepartment={setDepartment}
                  institution={institution}
                  setInstitution={setInstitution}
                />
              ),
              sponsorshiprequests: (
                <AdminSponsorshipRequests setRouter={setRouter} />
              ),
              sponsorprofiles: (
                <AdminSponsorProfiles
                  sponsorData={sponsorData}
                  setRouter={setRouter}
                />
              ),
              paymenthistory: (
                <AdminPaymentHistory
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                />
              ),
              meetingrequests: (
                <AdminMeetingRequests
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                />
              ),
              // letterbox: (<AdminLetterBox/>),
              childrenprofiles: (
                <AdminChildrenProfiles
                  childData={childData}
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                />
              ),
              academicrecords: (
                <AdminAcademicReports
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                />
              ),
              editfaqs: (
                <AdminEditFAQs
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                  questions={questions}
                  answers={answers}
                />
              ),
              editcontactinformation: (
                <AdminEditContactUs
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                />
              ),
              admincontactus: (
                <AdminContactUs
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                />
              ),
              adminfaqs: (
                <AdminFAQs
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                  questions={questions}
                  answers={answers}
                />
              ),
            }[router]
          }
        </>
      ) : (
        <>
          <AdminLogin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleAdminLogin={handleAdminLogin}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </>
      )}
    </div>
  );
};

export default Admin;
