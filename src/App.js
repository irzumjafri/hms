import React, { useState, useEffect } from "react";
import fire from "./fire";
// import db from "./fire";  // importing database variable here
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import Hero from "./Hero";
import RegisteredSponsorHome from "./registeredSponsorHome";
import UnregisteredSponsorHome from "./unregisteredSponsorHome";
import RegisterAsSponsor from "./registerAsSponsor";
import firebase from "firebase";
import EditMyProfileSponsor from "./editMyProfileSponsor";
import ContactUs from "./ContactUs";
import FAQs from "./Faqs";
import PaymentHistory from "./PaymentHistory";
import ChildrenProfiles from "./ChildrenProfiles";
import LetterBox from "./LetterBox";
import RequestAMeeting from "./RequestAMeeting";
import AcademicReportsSponsor from "./academicReportsSponsor";

// setting up the database here
const db = firebase.firestore();
// setting this settign to avoid warnings
db.settings({ timestampsInSnapshots: true });

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
  ] = useState("");
  const [numberOfSponsoredChildren, setNumberOfSponsoredChildren] = useState(
    ""
  );
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSchedule, setPaymentSchedule] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [router, setRouter] = useState("registered"); //change it to null value when updating from database
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
    "shabbir",
    "altaf",
    "bashir",
    "naseem",
  ]);
  const [letterBody, setLetterBody] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const [writeOrReceive, setWriteOrReceive] = useState(true);
  const [recievedLetters, setRecievedLetters] = useState([
    { from: "irtasam", message: "Ki haal chaal ai?" },
    { from: "irtasam", message: "paisay bhijwao, creately lena hai" },
    { from: "irtasam", message: "credit card bhi donate kardo" },
  ]);

  // Function that creates profile of sponsor which gets created in sponsorshipApplicants as an applicant
  const createSponsorshipRequest = () => {
    db.collection("sponsorshipApplicants")
      .doc(user.uid)
      .set({
        // sponsor profile data, visible to sponsors
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        dateOfBirth: dateOfBirth,
        cnic: cnic,
        phoneNumber: phoneNumber,
        address: address,
        preferredMediumOfCommunication: preferredMediumOfCommunication,
        numberOfSponsoredChildren: numberOfSponsoredChildren,
        paymentMethod: paymentMethod,
        paymentSchedule: paymentSchedule,
        timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),

        // fields to be used by admin, only visible to admins
        applicationStatus: "Pending", // admin can update this to accept or reject
        howToAssignChildren: "Pending", // admin can update this to "auto-assign" or "assign-manually"
      });
  };

  //  Edit My Profile (Sponsor). Function that allows sponsor to update their credentials
  const editSponsorProfile = () => {
    let profileToEdit = db.collection("registeredSponsors").doc(user.uid); // or search through name?

    return profileToEdit.update({
      firstName: firstName,
      lastName: lastName,
      emailAddress: email,
      dateOfBirth: dateOfBirth,
      cnic: cnic,
      phoneNumber: phoneNumber,
      address: address,
      preferredMediumOfCommunication: preferredMediumOfCommunication,
      numberOfSponsoredChildren: numberOfSponsoredChildren,
      paymentMethod: paymentMethod,
      paymentSchedule: paymentSchedule,

      // cannot be updated by the sponsor so we don't even show them in the front end
      applicationStatus: applicationStatus,
      howToAssignChildren: howToAssignChildren,
    });
  };

  const childcount = 0001
  // Function that creates profile of the child
  const createChildProfile = () => {
    const childUniqueId = firstName + lastName
    db.collection("childProfile")
      .doc(childUniqueId)  //      unique ID for child???
      .set({ 
        // child profile data
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        gender : gender,
        address: address,
        guardian1Name : guardian1Name,
        guardian1Relation : guardian1Relation,
        guardian1Cnic : guardian1Cnic,
        guardian1Occupation : guardian1Occupation,
        guardian2Name :guardian2Name,
        guardian2Relation : guardian2Relation,
        guardian2Cnic : guardian2Cnic,
        guardian2Occupation : guardian2Occupation,
        familyBackground : familyBackground,
        contactInformation : contactInformation,
        grade : grade,
        timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
      });
      childcount = childcount + 1 //increasing child count
  };


  // how to get child doc ID ??????????????????
  const editChildProfile = () => {
    let profileToEdit = db.collection("childProfile").doc(childUniqueId); // or search through name?

    return profileToEdit.update({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender : gender,
      address: address,
      guardian1Name : guardian1Name,
      guardian1Relation : guardian1Relation,
      guardian1Cnic : guardian1Cnic,
      guardian1Occupation : guardian1Occupation,
      guardian2Name :guardian2Name,
      guardian2Relation : guardian2Relation,
      guardian2Cnic : guardian2Cnic,
      guardian2Occupation : guardian2Occupation,
      familyBackground : familyBackground,
      contactInformation : contactInformation,
      grade : grade,
      timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
    });
  };

  const paymentHistory = () => {
    db.collection("childProfile")
    .doc(user.uid)  //      
    .set({ 
    sponsorName : sponsorName,
    paymentDate : paymentDate,
    childName : childName,
    paymentAmount : paymentAmount,
    paymentType : paymentType,
    });
  };










  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setErrorMessage("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const signupErrorCheck = () => {
    if (!firstName) {
      setErrorMessage("First name not entered.");
      return 0;
    } else if (!lastName) {
      setErrorMessage("Last name not entered.");
      return 0;
    } else if (!dateOfBirth) {
      setErrorMessage("Date of birth not entered.");
      return 0;
    } else if (!confirmPassword || confirmPassword !== password) {
      setErrorMessage("Passwords don't match.");
      return 0;
    } else {
      return 1;
    }
  };

  // storing additional data in userAccounts, doc name will be uid of that document which is being generated first first
  const createUserAccount = () => {
    db.collection("userAccounts")
      .doc(user.uid)
      .set({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        email: email,
        password: confirmPassword,
        timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
      });
  };

  const handleSignUp = () => {
    clearErrors();
    if (signupErrorCheck()) {
      fire.auth().createUserWithEmailAndPassword(email, password);
      createUserAccount();
    }
  };

  const handleLogout = () => {
    setRouter("unregistered"); //change it to null value when updating from database
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        console.log(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        //USE FOR TESTING SCREENS
        //CODE STARTS
        // <Hero />
        //USE FOR TESTING APP
        //CODE STARTS
        <>
          {
            {
              registered: (
                <RegisteredSponsorHome
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                />
              ),
              unregistered: (
                <UnregisteredSponsorHome
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                />
              ),
              registering: (
                <RegisterAsSponsor
                  applicationStatus={applicationStatus}
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
                  preferredMediumOfCommunication={
                    preferredMediumOfCommunication
                  }
                  setPreferredMediumOfCommunication={
                    setPreferredMediumOfCommunication
                  }
                  numberOfSponsoredChildren={numberOfSponsoredChildren}
                  setNumberOfSponsoredChildren={setNumberOfSponsoredChildren}
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  paymentSchedule={paymentSchedule}
                  setPaymentSchedule={setPaymentSchedule}
                  createSponsorshipRequest={createSponsorshipRequest}
                  setRouter={setRouter}
                />
              ),
              editmyprofile: (
                <EditMyProfileSponsor
                  applicationStatus={applicationStatus}
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
                  preferredMediumOfCommunication={
                    preferredMediumOfCommunication
                  }
                  setPreferredMediumOfCommunication={
                    setPreferredMediumOfCommunication
                  }
                  numberOfSponsoredChildren={numberOfSponsoredChildren}
                  setNumberOfSponsoredChildren={setNumberOfSponsoredChildren}
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  paymentSchedule={paymentSchedule}
                  setPaymentSchedule={setPaymentSchedule}
                  setRouter={setRouter}
                  editSponsorProfile={editSponsorProfile}
                />
              ),
              paymenthistory: (
                <PaymentHistory
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  paymentDate={paymentDate}
                  amount={amount}
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                />
              ),
              letterbox: (
                <LetterBox
                  myChildren={myChildren}
                  handleLogout={handleLogout}
                  setLetterBody={setLetterBody}
                  selectedChild={selectedChild}
                  recievedLetters={recievedLetters}
                  writeOrReceive={writeOrReceive}
                  setWriteOrReceive={setWriteOrReceive}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                />
              ),
              childrenprofiles: (
                <ChildrenProfiles
                  handleLogout={handleLogout}
                  childData={childData}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                />
              ),
              childrenprofiles: (
                <ChildrenProfiles
                  handleLogout={handleLogout}
                  childData={childData}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                />
              ),
              requestmeeting: (<RequestAMeeting handleLogout={handleLogout} setRouter={setRouter} applicationStatus={applicationStatus}/>),
              academicreports: (<AcademicReportsSponsor handleLogout={handleLogout} setRouter={setRouter} applicationStatus={applicationStatus}/>),
              contactus: (
                <ContactUs
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                />
              ),
              faqs: (
                <FAQs
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
        //CODE ENDS
        //CODE ENDS
        <>
          {hasAccount ? (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          ) : (
            <Signup
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmpassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              dateofbirth={dateOfBirth}
              setDateOfBirth={setDateOfBirth}
              firstname={firstName}
              setFirstName={setFirstName}
              lastname={lastName}
              setLastName={setLastName}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              errorMessage={errorMessage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
