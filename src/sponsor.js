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
import EditPassword from "./EditPassword";
import DeleteAccount from "./DeleteAccount";
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
  const [recievedLetters, setRecievedLetters] = useState([]);
  const [preferredMeetingDate, setPreferredMeetingDate] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [amPm, setAmPm] = useState("");
  const [backUpDatesAndTimes, setBackUpDatesAndTimes] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contactUs, setContactUs] = useState();
  const [academicRecords, setacademicRecords] = useState([]);
  const [calendars, setcalendars] = useState([]);

  //------------------------------------------------------------------------------------STATES-----------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------FUNCTIONS----------------------------------------------------------------------------------------

  // this function deletes the user account
  const deleteAccount = () => {
    // check if number of assigned children == 0 only then allow for delete
    if (applicationStatus === "") {
      delAccount();
    }
    if (applicationStatus === "Accepted") {
      // delete all data of sponsor related to children
      deleteSponsorProfile(user.uid);
      // now delete user account and authenctication
      delAccount();
    }
  };

  // delete account helper functions
  const delAccount = () => {
    db.collection("userAccounts")
      .doc(user.uid)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        // now delete the user from authetication as well
        var user = firebase.auth().currentUser;
        user
          .delete()
          .then(function () {
            // User deleted.
            console.log("User deleted from authetication as well");
            setUser("");
          })
          .catch(function (error) {
            // An error happened.
            console.log("Error deleting from authentication", error);
          });
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // delete account helper functions
  const deleteSponsorProfile = (i) => {
    let mail = "";

    db.collection("registeredSponsors")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No sposnor profile against this ID");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            if (doc.data().id === i.toString().replace(/\s/g, "")) {
              mail = doc.data().email;
            }
          });

          db.collection("registeredSponsors")
            .doc(i.toString().replace(/\s/g, ""))
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
              unassignChildren(mail);
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        }
      });
  };

  // delete account helper functions
  const unassignChildren = (mail) => {
    db.collection("childrenProfiles")
      .where("sponsorEmail", "==", mail)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No children were assigned to this sponsor");
          return;
        } else {
          let idToDelete = [];
          querySnapshot.forEach((doc) => {
            // fetch IDs of the profile associated with the email address
            idToDelete.push(doc.data().id);
          });

          // get child profile assocated to the id
          idToDelete.map((idOfChild) => {
            let profileToEdit = db
              .collection("childrenProfiles")
              .doc(idOfChild);

            return profileToEdit
              .update({
                sponsorEmail: "",
                status: "unassigned",
              })
              .then(() => {
                console.log("Document successfully updated!");
              })
              .catch((error) => {
                console.error("Error updating document: ", error);
              });
          });
        }
      });
  };

  // this function handles email verification
  const emailVerification = () => {
    var user = firebase.auth().currentUser;

    user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
        console.log("verfication email has been sent!");
      })
      .catch(function (error) {
        // An error happened.
        console.log("Error occured while sending verification email", error);
      });
  };

  // this function lets user update their associated email address
  const updatePassword = (newPassword) => {
    var user = firebase.auth().currentUser;
    // var newPassword = getASecureRandomPassword();

    user
      .updatePassword(newPassword)
      .then(function () {
        // Update successful. Now need to update password in userAccounts as well

        let profileupdate = db.collection("userAccounts").doc(user.uid); ////////////////////////////////
        return profileupdate
          .update({
            password: newPassword,
          })
          .then(() => {
            console.log("Document successfully updated!");
            setPassword(newPassword);
            {
              applicationStatus
                ? setRouter("registered")
                : setRouter("unregistered");
            }
          });
      })
      .catch(function (error) {
        // An error happened.
        console.log("Error occured while updating password", error);
      });
  };

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
    console.log("FETCHINGSPONSORDATA");
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
          setApplicationStatus();
          setRouter("unregistered");
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  /////////////////// SEE COMMENTS IN HERE //////////////////////////////////
  const fetchLogin = (id) => {
    // let isVerified = user.emailVerified // returns a bool which is true when vertified else it is false
    // we can all the neechay wala kaam when isVerified is true else not let them login

    var docRef = db.collection("userAccounts").doc(id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirstName(doc.data().firstName);
          setLastName(doc.data().lastName);
          setEmail(doc.data().email);
          setPassword(doc.data().password);
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
          fetchLetters(doc.data().email);
          fetchAcademicRecords(doc.data().email);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
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
    db.collection("meeting")
      .add({
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
      })
      .then((value) => {
        // set this id as its own attribte
        let profileToEdit = db.collection("meeting").doc(value.id);
        return profileToEdit
          .update({
            id: value.id,
          })
          .then(() => {
            console.log("Document successfully updated!");
            setPreferredMeetingDate("");
            setHour("");
            setMinutes("");
            setAmPm("");
            setBackUpDatesAndTimes("");
            setPurpose("");
          });
      });
  };

  // withdraw child
  const withdrawchild = (i) => {
    // we have updted the child's profile
    console.log("WITHDRAWING");
    console.log(i.reason);
    let profileupdate = db.collection("childrenProfiles").doc(i);
    return profileupdate
      .update({
        sponsorEmail: "",
        status: "unassigned",
        // reasonForWithdrawal: i.reason
      })
      .then(() => {
        console.log("Document successfully updated!");
        fetchChildProfiles(email);

        // once the child profile is updated, we then need to reflect this in sponsor's profile as well
        let newChildrenNumber = parseInt(numberOfSponsoredChildren) - 1;
        console.log("i am hereeeeee");
        console.log(newChildrenNumber);

        // delete this sponsor's profile
        if (newChildrenNumber === 0) {
          console.log("okay bye");
          db.collection("registeredSponsors")
            .doc(user.uid)
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
              // call fucntion to update states of payemnt histories acc to the updated db
              fetchSponsorData(user.uid); ///////////////////////////////////////////////////////////////////////
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        }
        // Simply assign this new children number
        if (newChildrenNumber >= 1) {
          let profileupdate2 = db
            .collection("registeredSponsors")
            .doc(user.uid); //////////////////////////////
          return profileupdate2
            .update({
              numberOfSponsoredChildren: newChildrenNumber,
            })
            .then(() => {
              console.log("Document successfully updated!");
              fetchSponsorData(user.uid); ///////////////////////////////
            });
        }
      });
  };

  //fetch child profiles for sponsor
  const fetchChildProfiles = (e) => {
    console.log("FETCHINGCHILDREN");
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
      .where("senderEmail", "==", email)
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

  // Sponsors sending letters to child
  const sendLetters = (i) => {
    console.log("FUNCTIONCALLED");
    // once we have the sponsorEmail, we can now create the record easily now
    db.collection("letters")
      .add({
        receiverEmail: i.name, // when sponsor sends email, they sent receiverName to email to show who it is intended for // children donot have emails
        content: i.content,
        senderName: firstName + lastName, // do these need to be passed as arguments as well ???
      })
      .then((value) => {
        // set this id as its own attribte
        let profileToEdit = db.collection("letters").doc(value.id);
        return profileToEdit
          .update({
            id: value.id,
          })
          .then(() => {
            console.log("Document successfully updated!");
          });
      });
  };

  // sponsors checking letters sent by child
  const fetchLetters = (e) => {
    // should they also be able to see their sent letters ???
    let letters = [];
    db.collection("letters")
      .where("receiverEmail", "==", e) // this should be passed as argument e as done previously ???
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No letters to show");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            letters.push({
              receiverEmail: doc.data().receiverEmail,
              content: doc.data().content,
              id: doc.data().id,
              senderName: doc.data().senderName,
            });
          });
        }
        setRecievedLetters(letters);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  // This function uses email of the sponsor to see their assigned children and fetches records academic associted to them
  const fetchAcademicRecords = (e) => {
    // use email to fetch children's names and IDs
    let idsOfChildren = [];
    let namesOfChildren = [];

    db.collection("childrenProfiles")
      .where("sponsorEmail", "==", e)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No child profiles exists for sponsor");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            idsOfChildren.push(doc.data().id);
            namesOfChildren.push(doc.data().name);
          });

          // now we have the names and the ids of the assigned children, we can simply fetch the records associated to this name
          let tempData = [];

          namesOfChildren.forEach((n) => {
            db.collection("academicRecords")
              .where("name", "==", n)
              .get()
              .then((querySnapshot) => {
                // no record exists is not defined
                if (querySnapshot.empty) {
                  console.log("No academic records to show against this name");
                  return;
                } else {
                  querySnapshot.forEach((doc) => {
                    tempData.push({
                      name: doc.data().name,
                      id: doc.data().id,
                      reportType: doc.data().reportType,
                      subject1: doc.data().subject1,
                      subject2: doc.data().subject2,
                      subject3: doc.data().subject3,
                      subject4: doc.data().subject4,
                      subject5: doc.data().subject5,
                      subject6: doc.data().subject6,
                      totalMarks: doc.data().totalMarks,
                      grade: doc.data().grade,
                      percentage: doc.data().percentage,
                    });
                  });
                }
              });
          });
          setacademicRecords(tempData);
        }
      });
  };

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

  // this function fetches all the events stored in the database meant to be displayed for this sponsor and are created by them
  const fetchEvents = () => {
    let tempData = [];
    db.collection("calendar")
      .get()
      .then((querySnapshot) => {
        // no events in the db
        if (querySnapshot.empty) {
          console.log("No events exist in the database yet");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            if (
              doc.data().createdBy === email ||
              doc.data().createdFor === "sponsor"
            ) {
              // update state to store data of all events present in current snapshot of the db
              tempData.push({
                date: doc.data().date,
                id: doc.data().id,
                description: doc.data().description,
                notificationFrom: doc.data().notificationFrom,
                createdFor: doc.data().createdFor, // either "admin" or "sponsor"
                createdBy: doc.data().createdBy,
              });
            }
          });
        }
        setcalendars(tempData);
      });
  };

  // this function allows users to create events to be displayed for themselves only
  const addEvent = (i) => {
    db.collection("calendar")
      .add({
        date: i.date,
        description: i.description,
        notificationFrom: i.notificationFrom,
        createdFor: "sponsor", // hardcoding this because sponsor users can only create events from themselves
        createdBy: email, // sets createdBy to this sponsors email address for fetching purposes
      })
      .then((value) => {
        // set this id as its own attribte
        let profileToEdit = db.collection("calendar").doc(value.id);
        return profileToEdit
          .update({
            id: value.id,
          })
          .then(() => {
            console.log("Document successfully updated!");
            fetchEvents();
          });
      });
  };

  // this function lets admin users delete events
  const deleteEvent = (i) => {
    // we have to check if they i.id belongs to document that is created by this sponsor or not. Only
    let iId = i.id;
    db.collection("calendar")
      .doc(iId.toString().replace(/\s/g, ""))
      .get()
      .then((querySnapshot) => {
        // we extract the createdBy to see if it is this sposnor or not
        let canDelete = "";
        querySnapshot.forEach((doc) => {
          if (doc.data().id === iId) {
            canDelete = doc.data().createdBy;
          }
        });

        // then we check if canDelete is atually this sponsor or not, if yes then proceed with deletin of document
        if (canDelete === email) {
          db.collection("calendar")
            .doc(iId.toString().replace(/\s/g, ""))
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
              /// call fucntion to update states of children profiles acc to the updated db
              fetchEvents();
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error accessing document with this ID: ", error);
      });
  };

  const handleSignUp = () => {
    clearErrors();
    if (signupErrorCheck()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          emailVerification();
          setHasAccount(!hasAccount);
          createUserAccount(userCredential.user.uid);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
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
      .signInWithEmailAndPassword(email, password).
      then((userCredential) => {
        if (!userCredential.emailVerified){
          setErrorMessage("Please Verify Account.")
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };


  const handleLogout = () => {
    setRouter("");
    fire.auth().signOut();
    setUser("");
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user /*&& user.emailVerified*/) {
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
                  childData={childData}
                  handleLogout={handleLogout}
                  setRouter={setRouter}
                  applicationStatus={applicationStatus}
                  recievedLetters={recievedLetters}
                  sendLetters={sendLetters}
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
                  childData={childData}
                  academicRecords={academicRecords}
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
              editpassword: (
                <EditPassword
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                  password={password}
                  updatePassword={updatePassword}
                />
              ),
              deleteaccount: (
                <DeleteAccount
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handleLogout={handleLogout}
                  password={password}
                  deleteAccount={deleteAccount}
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
              setErrorMessage={setErrorMessage}

            />
          )}
        </>
      )}
    </div>
  );
};

export default Sponsor;
//-------------------------------------------------------------------------------------RENDER-----------------------------------------------------------------------------------------
