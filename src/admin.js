//-----------------------------------------------------------------------------------IMPORTS----------------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------IMPORTS----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------DATABSE INIT--------------------------------------------------------------------------------------
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true, isPersistenceEnabled: false });

//-----------------------------------------------------------------------------------DATABASE INIT-------------------------------------------------------------------------------------

const Admin = () => {
  //------------------------------------------------------------------------------------STATES-----------------------------------------------------------------------------------------
  const [loggedIn, setLoggedIn] = useState(true);
  const [id, setId] = useState("");
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
  const [sponsorshipApplicationData, setSponsorshipApplicationData] = useState(
    []
  );
  const [sponsorData, setSponsorData] = useState([]);
  const [numberOfSponsoredChildren, setNumberOfSponsoredChildren] = useState(
    ""
  );
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSchedule, setPaymentSchedule] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [router, setRouter] = useState("home");
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
  //------------------------------------------------------------------------------------STATES-----------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------FUNCTIONS----------------------------------------------------------------------------------------

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setErrorMessage("");
  };

  const handleAdminLogin = () => {
    clearErrors();
    db.collection("adminLogin")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setErrorMessage("Unauthorized access");
          setLoggedIn(false);
          return;
        } else {
          querySnapshot.forEach((doc) => {
            if (password === doc.data().password) {
              setLoggedIn(true);
              fetchSponsorshipApplications();
              fetchSponsorData();
              fetchAdminProfile();
            } else {
              clearInputs();
              setLoggedIn(false);
              setErrorMessage("Incorrect password");
            }
          });
        }
      });
  };

  const handleAdminLogout = () => {
    setLoggedIn(false);
    setRouter("home");
  };

  // this function reads and sets all of the logged in admin's data for their profile
  const fetchAdminProfile = () => {
    // console.log(email);

    db.collection("adminProfiles")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // console.log("Email not associated with this account");
          return;
        } else {
          // set all the fields
          querySnapshot.forEach((doc) => {
            setFirstName(doc.data().firstName);
            setLastName(doc.data().lastName);
            setAddress(doc.data().address);
            setCnic(doc.data().cnic);
            setDateOfBirth(doc.data().dateOfBirth);
            setEmail(doc.data().email);
            setId(doc.data().id);
            setPhoneNumber(doc.data().phoneNumber);
            setInstitution(doc.data().institution);
            setDepartment(doc.data().department);
          });
        }
      });
  };

  const editAdminProfile = () => {
    let idofDoc = 0;
    db.collection("adminProfiles")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("Empty");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            idofDoc = doc.data().id;
          });
        }
        let profileToEdit = db
          .collection("adminProfiles")
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
            department: department,
            institution: institution,
            id: idofDoc,
          })
          .then(() => {
            console.log("Document successfully updated!");

            // update email in adminLogin as well
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      });
  };

  var tempApplications = [];
  const fetchSponsorshipApplications = () => {
    db.collection("sponsorshipApplicants")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setErrorMessage("No sponsorship requests to display");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            tempApplications.push({
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              email: doc.data().email,
              dateOfBirth: doc.data().dateOfBirth,
              cnic: doc.data().cnic,
              phoneNumber: doc.data().phoneNumber,
              address: doc.data().address,
              preferredMediumOfCommunication: doc.data()
                .preferredMediumOfCommunication,
              numberOfSponsoredChildren: doc.data().numberOfSponsoredChildren,
              paymentMethod: doc.data().paymentMethod,
              paymentSchedule: doc.data().paymentSchedule,
              timeStamp: doc.data().timeStamp,
              id: doc.data().id,
              applicationStatus: doc.data().applicationStatus,
              howToAssignChildren: doc.data().howToAssignChildren,
              toDisplay: doc.data().toDisplay,
            });
          });
        }
        setSponsorshipApplicationData(tempApplications);
      });
  };

  // this function allows admin users to accept the application with id = i and sets HowToAssign children according to
  // the popup. It will either be "Auto-assign" or "Assign Manually"
  const acceptSponsorshipRequest = (i, howTo) => {
    console.log("in accept"); ////////////////////////////////////
    let first = "";
    let last = "";
    let email = "";
    let dob = "";
    let nic = "";
    let phone = "";
    let addr = "";
    let pmc = "";
    let noc = "";
    let pm = "";
    let ps = "";
    let ts = "";
    let identity = "";
    const apS = "Accepted";
    let td = "false";

    db.collection("sponsorshipApplicants")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setErrorMessage("No sponsorship requests to display");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            if (doc.data().id === i) {
              first = doc.data().firstName;
              last = doc.data().lastName;
              email = doc.data().email;
              dob = doc.data().dateOfBirth;
              nic = doc.data().cnic;
              phone = doc.data().phoneNumber;
              addr = doc.data().address;
              pmc = doc.data().preferredMediumOfCommunication;
              noc = doc.data().numberOfSponsoredChildren;
              pm = doc.data().paymentMethod;
              ps = doc.data().paymentSchedule;
              ts = doc.data().timeStamp;
              identity = doc.data().id;
            }
          });
        }

        // delete profile from applications
        db.collection("sponsorshipApplicants")
          .doc(identity.toString().replace(/\s/g, ""))
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");

            // and add the profile to registered sponsors with updated status and assigned howTO
            db.collection("registeredSponsors").doc(identity).set({
              firstName: first,
              lastName: last,
              email: email,
              dateOfBirth: dob,
              cnic: nic,
              phoneNumber: phone,
              address: addr,
              preferredMediumOfCommunication: pmc,
              numberOfSponsoredChildren: noc,
              paymentMethod: pm,
              paymentSchedule: ps,
              timeStamp: ts,
              id: identity,
              applicationStatus: apS,
              howToAssignChildren: howTo,
            });
            fetchSponsorshipApplications();
            fetchSponsorData();

            // assign children to sponsors as well acc to how to
          });
      })

      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // This function allows admin to simply reject a sponsorship request with id = i
  const rejectSponsorshipRequest = (i) => {
    db.collection("sponsorshipApplicants")
      .doc(i.toString().replace(/\s/g, ""))
      .delete()
      .then(() => {
        console.log("Document successfully deleted!", i);
        fetchSponsorshipApplications();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // This fucntion fetches all the sponsor profiles to be displayed
  var tempData = [];
  const fetchSponsorData = () => {
    db.collection("registeredSponsors")
      .get()
      .then((querySnapshot) => {
        // Registered sponsors' db is empty
        if (querySnapshot.empty) {
          setErrorMessage("No registered sponsors exist in the database yet");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all sponsors present in current snapshot of the db
            tempData.push({
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              email: doc.data().email,
              dateOfBirth: doc.data().dateOfBirth,
              cnic: doc.data().cnic,
              phoneNumber: doc.data().phoneNumber,
              address: doc.data().address,
              preferredMediumOfCommunication: doc.data()
                .preferredMediumOfCommunication,
              numberOfSponsoredChildren: doc.data().numberOfSponsoredChildren,
              paymentMethod: doc.data().paymentMethod,
              paymentSchedule: doc.data().paymentSchedule,
              status: doc.data().status,
              howToAssignChildren: doc.data().howToAssignChildren,
              id: doc.data().id,
            });
          });
        }
        setSponsorData(tempData);
      });
  };

  // On sponsor profile page, this function allows admin to add another sponsor from sponsor side
  const addSponsorProfile = (i) => {};

  const editSponsorProfile = (i, howTo, appStatus) => {
    let profileToEdit = db.collection("registeredSponsors").doc(i.id);
    return profileToEdit
      .update({
        firstName: i.firstName,
        lastName: i.lastName,
        email: i.email,
        dateOfBirth: i.dateOfBirth,
        cnic: i.cnic,
        phoneNumber: i.phoneNumber,
        address: i.address,
        preferredMediumOfCommunication: i.preferredMediumOfCommunication,
        numberOfSponsoredChildren: i.numberOfSponsoredChildren,
        paymentMethod: i.paymentMethod,
        paymentSchedule: i.paymentSchedule,
        applicationStatus: i.appStatus,
        howToAssignChildren: i.howToAssignChildren,
        id: i.id,
      })
      .then(() => {
        console.log("Document successfully updated!");
        fetchSponsorData();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  const deleteSponsorProfile = (i) => {
    console.log(i.toString().replace(/\s/g, ""));

    db.collection("registeredSponsors")
      .doc(i.toString().replace(/\s/g, ""))
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        fetchSponsorData();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const fetchPaymentHistory = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL PAYMENT DETAILS JUST LIKE IN SPONSOR MAKE A LISTTT.
  };

  const fetchMeetingRequests = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL MEETING REQUESTS JUST LIKE IN SPONSOR MAKE A LISTTT.
  };

  const fetchSentLetters = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL MEETING REQUESTS JUST LIKE IN SPONSOR MAKE A LISTTT.
  };

  const fetchReceivedLetters = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL MEETING REQUESTS JUST LIKE IN SPONSOR MAKE A LISTTT.
  };

  const fetchChildrenProfiles = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL MEETING REQUESTS JUST LIKE IN SPONSOR MAKE A LISTTT
  };

  const fetchAcademicRecords = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL MEETING REQUESTS JUST LIKE IN SPONSOR MAKE A LISTTT
  };

  //-----------------------------------------------------------------------------------FUNCTIONS-----------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------RENDER-----------------------------------------------------------------------------------------

  return (
    <div className="App">
      {loggedIn ? (
        <>
          {
            {
              home: (
                <AdminHome
                  setRouter={setRouter}
                  handlelogout={handleAdminLogout}
                />
              ),
              editmyprofile: (
                <AdminEditMyProfile
                  setRouter={setRouter}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  dateOfBirth={dateOfBirth}
                  setEmail={setEmail}
                  handlelogout={handleAdminLogout}
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
                  editAdminProfile={editAdminProfile}
                />
              ),
              sponsorshiprequests: (
                <AdminSponsorshipRequests
                  setRouter={setRouter}
                  sponsorshipApplicationData={sponsorshipApplicationData}
                  handlelogout={handleAdminLogout}
                  rejectSponsorshipRequest={rejectSponsorshipRequest}
                  acceptSponsorshipRequest={acceptSponsorshipRequest}
                />
              ),
              sponsorprofiles: (
                <AdminSponsorProfiles
                  handlelogout={handleAdminLogout}
                  sponsorData={sponsorData}
                  setRouter={setRouter}
                  deleteSponsorProfile={deleteSponsorProfile}
                  editSponsorProfile={editSponsorProfile}
                />
              ),
              paymenthistory: (
                <AdminPaymentHistory
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                />
              ),
              meetingrequests: (
                <AdminMeetingRequests
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                />
              ),
              // letterbox: (<AdminLetterBox/>),
              childrenprofiles: (
                <AdminChildrenProfiles
                  childData={childData}
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                />
              ),
              academicrecords: (
                <AdminAcademicReports
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                />
              ),
              editfaqs: (
                <AdminEditFAQs
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                  questions={questions}
                  answers={answers}
                />
              ),
              editcontactinformation: (
                <AdminEditContactUs
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                />
              ),
              admincontactus: (
                <AdminContactUs
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handlelogout={handleAdminLogout}
                />
              ),
              adminfaqs: (
                <AdminFAQs
                  applicationStatus={applicationStatus}
                  setRouter={setRouter}
                  handlelogout={handleAdminLogout}
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
//-------------------------------------------------------------------------------------RENDER-----------------------------------------------------------------------------------------

export default Admin;
