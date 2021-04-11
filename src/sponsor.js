//-----------------------------------------------------------------------------------IMPORTS----------------------------------------------------------------------------------------

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
//-----------------------------------------------------------------------------------IMPORTS----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------DATABSE INIT--------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------IMPORTS----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------DATABSE INIT--------------------------------------------------------------------------------------
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
//-----------------------------------------------------------------------------------DATABSE INIT--------------------------------------------------------------------------------------

const Sponsor = () => {
  //------------------------------------------------------------------------------------STATES-----------------------------------------------------------------------------------------
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
  const [router, setRouter] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const [howToAssignChildren, setHowToAssignChildren] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [myChildren, setMyChildren] = useState([]);
  const [letterBody, setLetterBody] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const [writeOrReceive, setWriteOrReceive] = useState(true);
  const [recievedLetters, setRecievedLetters] = useState([]);

  const [preferredMeetingDate, setPreferredMeetingDate] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [amPm, setAmPm] = useState("");
  const [backUpDatesAndTimes, setBackUpDatesAndTimes] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contactUs, setContactUs] = useState();

  //------------------------------------------------------------------------------------STATES-----------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------FUNCTIONS----------------------------------------------------------------------------------------

  // This function fetches all FAQs to be displayed
  const fetchFAQs = () => {
    let tempDataQ = [];
    let tempDataA = [];

    db.collection("FAQs")
      .get()
      .then((querySnapshot) => {
        // FAQs is not defined
        if (querySnapshot.empty) {
          setErrorMessage("No FAQs to show");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all children profiles present in current snapshot of the db
            tempDataA.push({
              answer: doc.data().answer,
              id: doc.data().id,
            });
            tempDataQ.push({
              question: doc.data().question,
              id: doc.data().id,
            });
          });
        }
        console.log(tempDataQ)
        setQuestions(tempDataQ);
        setAnswers(tempDataA);
      });
  };

  // This function fetches all Contact US to be displayed
  const fetchContactUs = () => {
    let tempData = [];
    db.collection("contactUs")
      .get()
      .then((querySnapshot) => {
        // contact us is not defined
        if (querySnapshot.empty) {
          setErrorMessage("No contact us information is available");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all all of ways to conatct hunehar
            tempData = {
              address: doc.data().address,
              email: doc.data().email,
              facebook: doc.data().facebook,
              instagram: doc.data().instagram,
              phoneNumber: doc.data().phoneNumber,
              twitter: doc.data().twitter,
              youtube: doc.data().youtube,
            };
          });
        }
        setContactUs(tempData);
      });
  };

  const createSponsorshipRequest = () => {
    db.collection("sponsorshipApplicants")
      .doc(user.uid)
      .set({
        firstName: firstName,
        lastName: lastName,
        email: email,
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
        applicationStatus: "",
        howToAssignChildren: "",
      });
  };

  const editSponsorProfile = () => {
    let idofDoc = 0;
    let appStatus = "";
    let howTo = "";

    db.collection("registeredSponsors")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("Empty");
          return;
        } else {
          querySnapshot.forEach((doc) => {
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
            email: email,
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
            console.error("Error updating document: ", error);
          });
      });
  };

  const fetchSponsorData = (id) => {
    let refdoc = "";
    refdoc = db.collection("registeredSponsors").doc(id);
    refdoc
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirstName(doc.data().firstName);
          setLastName(doc.data().lastName);
          setEmail(doc.data().email);
          setDateOfBirth(doc.data().dateOfBirth);
          setCnic(doc.data().cnic);
          setPhoneNumber(doc.data().phoneNumber);
          setAddress(doc.data().address);
          setPreferredMediumOfCommunication(
            doc.data().preferredMediumOfCommunication
          );
          setNumberOfSponsoredChildren(doc.data().numberOfSponsoredChildren);
          setPaymentMethod(doc.data().paymentMethod);
          setPaymentSchedule(doc.data().paymentSchedule);
          setApplicationStatus(doc.data().applicationStatus);
          if (doc.data().applicationStatus) {
            setRouter("registered");
          } else {
            setRouter("unregistered");
          }
          setHowToAssignChildren(doc.data().howToAssignChildren);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const fetchLogin = (id) => {
    var docRef = db.collection("userAccounts").doc(id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirstName(doc.data().firstName);
          setLastName(doc.data().lastName);
          setEmail(doc.data().email);
          setDateOfBirth(doc.data().dateOfBirth);
          setApplicationStatus(doc.data().applicationStatus);
          if (applicationStatus) {
            setRouter("registered");
          } else {
            setRouter("unregistered");
          }
          fetchSponsorData(id);
          fetchChildProfiles(doc.data().email);
          checkingPaymentHistory(id);
          fetchFAQs();
          fetchContactUs();
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
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

  const addMeetingRequest = () => {
    db.collection("meeting").doc(user.id).set({
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      meetingDate: preferredMeetingDate,
      hour: hour,
      min: minutes,
      ampm: amPm,
      backupDate: backUpDatesAndTimes,
      purpose: purpose,
      id: user.uid,
    });
    setPreferredMeetingDate("");
    setHour("");
    setMinutes("");
    setAmPm("");
    setBackUpDatesAndTimes("");
    setPurpose("");
  };

  // withdraw child
  const withdrawchild = (i) => {
    console.log("Inside withdraw", i);
    let profileupdate = db.collection("childrenProfiles").doc(i);
    console.log("FUNCTION CALLED");
    return profileupdate
      .update({
        sponsorEmail: "",
        status: "unassigned",
      })
      .then(() => {
        console.log("Document successfully updated!");
        fetchChildProfiles();
      });
  };

  //fetch child profiles for sponsor
  const fetchChildProfiles = (e) => {
    let tempData = [];
    try {
      db.collection("childrenProfiles")
        .where("sponsorEmail", "==", e)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            //console.log("No child profiles exists for sponsor");
            return;
          } else {
            querySnapshot.forEach((doc) => {
              // update state to store data of child
              tempData.push({
                name: doc.data().name,
                dateOfBirth: doc.data().dateOfBirth,
                gender: doc.data().gender,
                currentAddress: doc.data().currentAddress,
                grade: doc.data().grade,
                contactInformation: doc.data().contactInformation,
                guardian1Name: doc.data().guardian1Name,
                guardian1Relation: doc.data().guardian1Relation,
                guardian1Occupation: doc.data().guardian1Occupation,
                guardian1Cnic: doc.data().guardian1Cnic,
                guardian2Name: doc.data().guardian2Name,
                guardian2Relation: doc.data().guardian2Relation,
                familyBackground: doc.data().familyBackground,
                id: doc.data().id,
              });
            });
          }
          setChildData(tempData);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } catch {
      setChildData([]);
      console.log("No Child Assigned");
      return;
    }
  };

  // sponsor checking his payment history
  const checkingPaymentHistory = (i) => {
    let tempData = [];
    db.collection("paymentHistory")
      .where("senderId", "==", i)
      .get()
      .then((querySnapshot) => {
        // No meeting request is in db and it is empty
        if (querySnapshot.empty) {
          console.log("No payment history for this sponsor exists");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all meeting requests
            tempData.push({
              senderName: doc.data().senderName,
              amount: doc.data().amount,
              paymentDate: doc.data().paymentDate,
              senderId: doc.data().senderId,
              id: doc.data().id,
            });
          });
        }
        setPaymentData(tempData);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  //Sponsors sending letters to child

  // const sendLettersToChild = () => {
  //   db.collection("lettersToChild")
  //     .doc(user.uid)
  //     .set({
  //       sponsorId: user.uid,
  //       firstName: firstName,
  //       lastName: lastName,
  //       selectedChild: selectedChild,
  //       letterBody: letterBody,
  //       timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
  //     });
  // };

  // // sponsors checking letters sent by child
  // const getLettersByChild = () => {
  //   db.collection("lettersFromChild")
  //     .where("sponsorId", "==", user.id)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshot
  //         setLetterBody(doc.data().letterBody);
  //         setSelectedChild(doc.data().selectedChild);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // };

  // storing additional data in userAccounts, doc name will be uid of that document which is being generated first first

  const createUserAccount = (id) => {
    db.collection("userAccounts")
      .doc(id.toString())
      .set({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        email: email,
        password: confirmPassword,
        applicationStatus: "",
        timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
      });
  };

  const handleSignUp = () => {
    clearErrors();
    if (signupErrorCheck()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          createUserAccount(userCredential.user.uid);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const handleLogout = () => {
    setRouter("");
    fire.auth().signOut();
    setUser("");
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        fetchLogin(user.uid);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  //------------------------------------------------------------------------------------FUNCTIONS----------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------RENDER-----------------------------------------------------------------------------------------

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
                  paymentData={paymentData}
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
                  withdrawchild={withdrawchild}
                />
              ),

              requestmeeting: (
                <RequestAMeeting
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                  setPreferredMeetingDate={setPreferredMeetingDate}
                  hour={hour}
                  setHour={setHour}
                  minutes={minutes}
                  setMinutes={setMinutes}
                  amPm={amPm}
                  setAmPm={setAmPm}
                  backUpDatesAndTimes={backUpDatesAndTimes}
                  setBackUpDatesAndTimes={setBackUpDatesAndTimes}
                  purpose={purpose}
                  setPurpose={setPurpose}
                  addMeetingRequest={addMeetingRequest}
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
                  contactUs={contactUs}
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
//-------------------------------------------------------------------------------------RENDER-----------------------------------------------------------------------------------------
