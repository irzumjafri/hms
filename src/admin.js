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
  const [sponsorshipApplicatonData, setSponsorshipApplicatonData] = useState(
    []
  );
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

  // Admin accounts will be ceated with user.id as dcument name and each profile will also have id = user.ud to them
  // for linking purposes

  // This funtion is done to authenticate admin login. Returns true if login match successful otherwise false
  const handleAdminLogin = () => {
    db.collection("adminLogin")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        // no email match found hence an attempt at unauthorized access to prevent
        if (querySnapshot.empty) {
          setErrorMessage("Unauthorized access");
          setLoggedIn(false);
          return;
        } else {
          querySnapshot.forEach((doc) => {
            if (password === doc.data().password) {
              // allow login
              setLoggedIn(true);
            } else {
              // password did not match so don't allow for login
              setLoggedIn(false);
              setErrorMessage("Incorrect password");
            }
          });
        }
      });
  };

  // This function allows Admin Users to Logout
  const handleAdminLogout = () => {
    setLoggedIn(false);
    setRouter("home"); //change it to null value when updating from database
  };

  // Admin users can edit their profile information using this function
  const editAdminProfile = () => {
    let idofDoc = 0;

    db.collection("adminProfiles")
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
          });
        }

        let profileToEdit = db
          .collection("adminProfiles")
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
            department: department,
            institution: institution,
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

  ///////////////////////////////////////////////////////////////////////////// needs to be tested
  // This function gets all of sponsors' data from db and set it to be displayed
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
            setSponsorData([
              ...sponsorData,
              {
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
              },
            ]);
          });
        }
      });
  };


  //admin saving payment history for each sponsor
    // where does admin enters the name of sponsor for whom he wants to save his payment history
  //var fName = window.prompt("Sponsor First Name: ")
  //var lNname = window.prompt("Sponsor Last Name: ")
    // var fName = "Ali"
  // var lNname = "ahmed"

  // const addingPaymentHistory = () => {
  //   let sponsorDocId = ""
  //   db.collection("registeredSponsors")
  //   .where("firstName", "==", fName)
  //   .where("lastName","==",lNname)
  //   .get()
  //   .then((querySnapshot) => {
  //     // no email match found hence an attempt at unauthorized access to prevent
  //     if (querySnapshot.empty) {
  //       console.log("Empty");
  //       return;
  //     } else {
  //       querySnapshot.forEach((doc) => {
  //         // extract and store id to reference the doc to be edited
  //         sponsorDocId = doc.data().id;
  //       });
  //     }
  //     db.collection("paymentHistory")
  //     .doc(sponsorDocId) //  fetch this ID for sponsor
  //     .set({
  //     firstName: firstName,
  //     lastName : lastName,
  //     paymentDate: paymentDate,
  //     childName: childName,
  //     paymentAmount: paymentAmount,
  //     paymentType: paymentType,
  //   });
  //   });
  // };

  // const childId = 1000;
  // // Function that creates profile of the child
  // const createChildProfile = () => {
  //   const childUniqueId = childId
  //   db.collection("childProfile")
  //     .doc(childUniqueId)  //      unique ID for child???
  //     .set({
  //       // child profile data
  //       firstName: firstName,
  //       lastName: lastName,
  //       dateOfBirth: dateOfBirth,
  //       gender : gender,
  //       address: address,
  //       guardian1Name : guardian1Name,
  //       guardian1Relation : guardian1Relation,
  //       guardian1Cnic : guardian1Cnic,
  //       guardian1Occupation : guardian1Occupation,
  //       guardian2Name :guardian2Name,
  //       guardian2Relation : guardian2Relation,
  //       guardian2Cnic : guardian2Cnic,
  //       guardian2Occupation : guardian2Occupation,
  //       familyBackground : familyBackground,
  //       contactInformation : contactInformation,
  //       grade : grade,
  //       timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
  //       id : chil
  //     });
  //     //childcount = childcount + 1 //increasing child count
  // };

   // // how to get child doc ID ??????????????????
  // const editChildProfile = () => {
  //   let profileToEdit = db.collection("childProfile").doc(childUniqueId); // or search through name?

  //   return profileToEdit.update({
  //     firstName: firstName,
  //     lastName: lastName,
  //     dateOfBirth: dateOfBirth,
  //     gender : gender,
  //     address: address,
  //     guardian1Name : guardian1Name,
  //     guardian1Relation : guardian1Relation,
  //     guardian1Cnic : guardian1Cnic,
  //     guardian1Occupation : guardian1Occupation,
  //     guardian2Name :guardian2Name,
  //     guardian2Relation : guardian2Relation,
  //     guardian2Cnic : guardian2Cnic,
  //     guardian2Occupation : guardian2Occupation,
  //     familyBackground : familyBackground,
  //     contactInformation : contactInformation,
  //     grade : grade,
  //     timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
  //   });
  // };


  // This function gets all of sponsors' data from db and set it to be displayed
  const fetchSponsorshipApplications = () => {
    db.collection("sponsorshipApplicants")
      .get()
      .then((querySnapshot) => {
        // Registered sponsors' db is empty
        if (querySnapshot.empty) {
          setErrorMessage("No sponsorship requests to display");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all sponsors present in current snapshot of the db
            setSponsorshipApplicatonData([
              ...sponsorshipApplicatonData,
              {
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                emailAddress: doc.data().emailAddress,
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
              },
            ]);
          });
        }
      });
  };

  // accept sponsorship request
  const acceptSponsorshipRequest = (i, howTo) => {
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

    // get all data from reuqest
    db.collection("sponsorshipApplicants")
      .get()
      .then((querySnapshot) => {
        // Registered sponsors' db is empty
        if (querySnapshot.empty) {
          setErrorMessage("No sponsorship requests to display");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all sponsors present in current snapshot of the db
            if (doc.data().id === i) {
              first = doc.data().firstName;
              last = doc.data().lastName;
              email = doc.data().emailAddress;
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
      });

    // delete the request from its database
    db.collection("sponsorshipApplicants")
      .doc(i)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });

    // create new document in registered sponsor profile
    db.collection("registeredSponsors").doc(identity).set({
      firstName: first,
      lastName: last,
      emailAddress: email,
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
  };

  ///////////////////  ID = I bas laaaaa do IRZUMMM //////////////////////////

  // This function allows admin to eit sponors' information including their status and how to assign
  const editSponsorProfile = (i, howTo, appStatus) => {
    let profileToEdit = db.collection("registeredSponsors").doc(i);
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
        id: i,
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  ///////////////////////////////////////////////////////////////////////////// needs to be tested
  // deletes sponsor data at the given email address
  const deleteSponsorProfile = (i) => {
    db.collection("registeredSponsors")
      .doc(i)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

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
                <AdminSponsorshipRequests setRouter={setRouter} />
              ),
              sponsorprofiles: (
                <AdminSponsorProfiles
                  handlelogout={handleAdminLogout}
                  sponsorData={sponsorData}
                  setRouter={setRouter}
                  deleteSponsorProfile={deleteSponsorProfile}
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

export default Admin;
