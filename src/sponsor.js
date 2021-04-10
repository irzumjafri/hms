import React, { useState, useEffect } from "react";
import fire from "./fire";
// import db from "./fire";  // importing database variable here
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
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
import AcademicReportsSponsor from "./AcademicReportsSponsor";

// setting up the database here
const db = firebase.firestore();
// setting this settign to avoid warnings
db.settings({ timestampsInSnapshots: true });

const Sponsor = () => {
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
  const [router, setRouter] = useState("unregistered"); //change it to null value when updating from database
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
        id: user.uid,

        // fields to be used by admin, only visible to admins
        applicationStatus: "Pending", // admin can update this to accept or reject
        howToAssignChildren: "Pending", // admin can update this to "auto-assign" or "assign-manually"
      });
  };

  //creates sponsor profile after being approvd by admin
  const createSponsorProfile = () => {
    db.collection("sponsorshipApplicants")
      .where("applicationStatus", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          var dataTransferredToCollection = db
            .collection("registeredSponsors")
            .doc(doc.data().barcode)
            .set(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  // Admin users can edit their profile information using this function
  const editSponsorProfile = () => {
    let idofDoc = 0;
    let appStatus = "";
    let howTo = "";

    db.collection("registeredSponsors")
      .where("emailAddress", "==", email)
      .get()
      .then((querySnapshot) => {
        // no email match found hence an attempt at unauthorized access to prevent
        if (querySnapshot.empty) {
          console.log("Empty");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // extract and store id to reference the doc to be edited
            idofDoc = doc.data().id;
            appStatus = doc.data().applicationStatus;
            howTo = doc.data().howToAssignChildren;
          });
        }

        let profileToEdit = db
          .collection("registeredSponsors")
          .doc(idofDoc.toString());
        return profileToEdit
          .update({
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
            applicationStatus: appStatus,
            howToAssignChildren: howTo,
            id: idofDoc,
          })
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      });
  };

  // fetching one document
  // var docRef_fetchSponsorData = db.collection("sponsors").doc(user.uid);
  // docRef
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("Error getting document:", error);
  //   });

  //fetching one document // to show data on edit my profile page for sponsors
  var docRef_fetchSponsorData = db
    .collection("registeredSponsors")
    .doc(user.uid);
  docRef_fetchSponsorData
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());  // how to show this data on frontend???
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

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


//sponsor checking his payment history
  const checkingPaymentHistory = () => {
    db.collection("paymentHistory")
    .where("id", "==", user.id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshot


        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  //Sponsors sending letters to child
    const sendLettersToChild = () => {
      db.collection("lettersToChild")
      .doc(user.uid)
      .set({
        sponsorId : user.uid,
        //sponsorName : sponsorName,
        //childName : childName,
        //message : message,
        timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
      });
    };

//   // sponsors checking letters sent by child
//   const getLettersByChild = () => {
//     db.collection("lettersFromChild")
//     .where("sponsorId", "==", user.id)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshot
//         console.log(doc.id, " => ", doc.data());
//       });
//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
//   }



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
              requestmeeting: (
                <RequestAMeeting
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                />
              ),
              academicreports: (
                <AcademicReportsSponsor
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                  child={myChildren}
                />
              ),
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

export default Sponsor;
