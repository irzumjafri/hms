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
import AdminEditSponsorProfile from "./AdminEditSponsorProfile";
import AdminAddSponsorProfile from "./AdminAddSponsorProfile";
import AdminAddChildrenProfiles from "./AdminAddChildrenProfiles";
import AdminEditChildrenProfiles from "./AdminEditChildrenProfiles";
//-----------------------------------------------------------------------------------IMPORTS----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------DATABSE INIT--------------------------------------------------------------------------------------
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true, isPersistenceEnabled: false });

//-----------------------------------------------------------------------------------DATABASE INIT-------------------------------------------------------------------------------------

const Admin = () => {
  //------------------------------------------------------------------------------------STATES-----------------------------------------------------------------------------------------
  const [loggedIn, setLoggedIn] = useState(false);
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
  const [password, setPassword] = useState("");
  const [sponsorshipApplicationData, setSponsorshipApplicationData] = useState(
    []
  );
  const [sponsorData, setSponsorData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [router, setRouter] = useState("home");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [contactUs, setContactUs] = useState();
  const [childData, setChildData] = useState([]);
  const [editingProfile, setEditingProfile] = useState();
  const [editingChildProfile, setEditingChildProfile] = useState();

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
              fetchChildrenProfiles();
              fetchContactUs();
              fetchFAQs();
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
    db.collection("adminProfiles")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
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
            fetchAdminProfile(); // update the changes in states as well

            // update email in adminLogin as well
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      });
  };

  // This function gets all the current data of sposorship applications on db and sets them here to be displayed
  const fetchSponsorshipApplications = () => {
    let tempApplications = [];
    db.collection("sponsorshipApplicants")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No sponsorship requests to display");
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

    db.collection("sponsorshipApplicants")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No sponsorship requests to display");
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
            assignChildrenToSponsor(email, noc); // store email in children profile which are to be assigned
          });
      })

      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // this function takes CNIC of number and assigns noc which are unsassigned to assigned and adds cnic of sponsor there
  // for identification
  const assignChildrenToSponsor = (mail, noc) => {
    db.collection("childrenProfiles")
      .where("status", "==", "unassigned")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        if (querySnapshot.empty) {
          console.log("No unassigned child in the database");
          return;
        } else {
          // set all the fields
          let childIDs = [];
          let count = 0;
          querySnapshot.forEach((doc) => {
            count = count + 1;
            childIDs.push(doc.data().id);
          });

          if (count < noc) {
            console.log(
              `Not enough unassigned children in the database. Number of unassigned children is: ${count}`
            );
            return;
          } else {
            // get IDs of profiles of children that will be assigned to this sponsor
            // update each ID of that child with sponsors CNIC and update its status as well
            childIDs.map((idOfChild, i) => {
              if (i < noc) {
                let profileToEdit = db
                  .collection("childrenProfiles")
                  .doc(idOfChild);

                return profileToEdit
                  .update({
                    sponsorEmail: mail,
                    status: "assigned",
                  })
                  .then(() => {
                    console.log("Document successfully updated!");
                    fetchChildrenProfiles(); // update the changes in states as well
                  })
                  .catch((error) => {
                    console.error("Error updating document: ", error);
                  });
              }
            });
          }
        }
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
  const fetchSponsorData = () => {
    let tempData = [];
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

  // On sponsor profile page, this function allows admin to add a sponsor profile (Registered one)
  const addSponsorProfile = (spon) => {
    console.log(spon);
    console.log("called");
    db.collection("registeredSponsors")
      .add({
        firstName: spon.firstName,
        lastName: spon.lastName,
        email: spon.email,
        dateOfBirth: spon.dateOfBirth,
        cnic: spon.cnic,
        phoneNumber: spon.phoneNumber,
        address: spon.address,
        preferredMediumOfCommunication: spon.preferredMediumOfCommunication,
        numberOfSponsoredChildren: spon.numberOfSponsoredChildren,
        paymentMethod: spon.paymentMethod,
        paymentSchedule: spon.paymentSchedule,
        timeStamp: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
        applicationStatus: "Accepted",
        howToAssignChildren: "auto", // hardcoding right now to "auto"
      })
      .then((value) => {
        // set this id as its own attribte
        let profileToEdit = db.collection("registeredSponsors").doc(value.id);
        return profileToEdit
          .update({
            id: value.id,
          })
          .then(() => {
            console.log("Document successfully updated!");
            fetchSponsorshipApplications();
            fetchSponsorData();
          });
      });
  };

  const calladmineditprofile = (spon) => {
    console.log(spon);
    setEditingProfile({
      firstName: spon.firstName,
      lastName: spon.lastName,
      email: spon.email,
      dateOfBirth: spon.dateOfBirth,
      cnic: spon.cnic,
      phoneNumber: spon.phoneNumber,
      address: spon.address,
      preferredMediumOfCommunication: spon.preferredMediumOfCommunication,
      numberOfSponsoredChildren: spon.numberOfSponsoredChildren,
      paymentMethod: spon.paymentMethod,
      paymentSchedule: spon.paymentSchedule,
      applicationStatus: spon.applicationStatus,
      howToAssignChildren: spon.howToAssignChildren,
      id: spon.id,
    });

    setRouter("admineditsponsorprofile");
  };

  const callchildeditprofile = (child) => {
    console.log(child);
    setEditingChildProfile({
      name: child.name,
      dateOfBirth: child.dateOfBirth,
      gender: child.gender,
      currentAddress: child.currentAddress,
      grade: child.gender,
      contactInformation: child.contactInformation,
      guardian1Name: child.guardian1Name,
      guardian1Relation: child.guardian1Relation,
      guardian1Occupation: child.guardian1Occupation,
      guardian1Cnic: child.guardian1Cnic,
      guardian2Name: child.guardian2Name,
      guardian2Relation: child.guardian2Relation,
      familyBackground: child.familyBackground,
      id: child.id,
      status: child.status,
    });

    setRouter("editchildrenprofile");
  };

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
        applicationStatus: i.applicationStatus,
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
              // update children profiles with nic and unassigned status for assigend children of this sponsor
              unassignChildren(mail);
              fetchSponsorData();
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        }
      });
  };

  // This function allows is called to unassign the children assigend to a given sponsor email
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
                fetchChildrenProfiles(); // update the changes in states as well
              })
              .catch((error) => {
                console.error("Error updating document: ", error);
              });
          });
        }
      });
  };

  // Given the ID of profile, the admin user can delete that child
  const deleteChildrenProfile = (i) => {
    db.collection("childrenProfiles")
      .doc(i.toString().replace(/\s/g, ""))
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        // call fucntion to update states of children profiles acc to the updated db
        fetchChildrenProfiles();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // This function allows admin users to add a child profile
  const addChildProfile = (child) => {
    db.collection("childrenProfiles")
      .add({
        name: child.name,
        dateOfBirth: child.dateOfBirth,
        gender: child.gender,
        currentAddress: child.currentAddress,
        grade: child.gender,
        contactInformation: child.contactInformation,
        guardian1Name: child.guardian1Name,
        guardian1Relation: child.guardian1Relation,
        guardian1Occupation: child.guardian1Occupation,
        guardian1Cnic: child.guardian1Cnic,
        guardian2Name: child.guardian2Name,
        guardian2Relation: child.guardian2Relation,
        familyBackground: child.familyBackground,
        status: child.status,
      })
      .then((value) => {
        // set this id as its own attribte
        let profileToEdit = db.collection("childrenProfiles").doc(value.id);
        return profileToEdit
          .update({
            id: value.id,
          })
          .then(() => {
            console.log("Document successfully updated!");
            fetchChildrenProfiles();
          });
      });
  };

  const editChildProfile = (child) => {
    let profileToEdit = db.collection("childrenProfiles").doc(child.id);
    return profileToEdit
      .update({
        name: child.name,
        dateOfBirth: child.dateOfBirth,
        gender: child.gender,
        currentAddress: child.currentAddress,
        grade: child.grade,
        contactInformation: child.contactInformation,
        guardian1Name: child.guardian1Name,
        guardian1Relation: child.guardian1Relation,
        guardian1Occupation: child.guardian1Occupation,
        guardian1Cnic: child.guardian1Cnic,
        guardian2Name: child.guardian2Name,
        guardian2Relation: child.guardian2Relation,
        familyBackground: child.familyBackground,
        id: child.id,
        status: child.status,
      })
      .then(() => {
        console.log("Document successfully updated!");
        fetchChildrenProfiles();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
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

  // This function fetches all the children profiles stored in the current snapshot of database and lets admin users see them
  const fetchChildrenProfiles = () => {
    let tempData = [];
    db.collection("childrenProfiles")
      .get()
      .then((querySnapshot) => {
        // Children Profiles' db is empty
        if (querySnapshot.empty) {
          setErrorMessage("No registered sponsors exist in the database yet");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            // update state to store data of all children profiles present in current snapshot of the db
            tempData.push({
              name: doc.data().name,
              dateOfBirth: doc.data().dateOfBirth,
              gender: doc.data().gender,
              gender: doc.data().gender,
              currentAddress: doc.data().currentAddress,
              grade: doc.data().grade,
              status: doc.data().status,
              contactInformation: doc.data().contactInformation,
              guardian1Name: doc.data().guardian1Name,
              guardian1Relation: doc.data().guardian1Relation,
              guardian1Occupation: doc.data().guardian1Occupation,
              guardian1Cnic: doc.data().guardian1Cnic,
              guardian2Name: doc.data().guardian2Name,
              guardian2Relation: doc.data().guardian2Relation,
              familyBackground: doc.data().familyBackground,
              id: doc.data().id,
              sponsorEmail: doc.data().sponsorEmail,
            });
          });
        }
        setChildData(tempData);
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
        // console.log(tempDataA);
        // console.log(tempDataQ);
        setQuestions(tempDataQ);
        setAnswers(tempDataA);
      });
  };

  const fetchAcademicRecords = () => {
    //MAKE REACT STATE CALL AT LOGIN AND FETCH ALL MEETING REQUESTS JUST LIKE IN SPONSOR MAKE A LISTTT
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
            tempData.push({
              address: doc.data().address,
              email: doc.data().email,
              facebook: doc.data().facebook,
              instagram: doc.data().instagram,
              phoneNumber: doc.data().phoneNumber,
              twitter: doc.data().twitter,
              youtube: doc.data().youtube,
            });
          });
        }
        // console.log("Hereeee", tempData);
        setContactUs(tempData);
      });
  };

  const editContactUs = (newContact) => {
    let profileToEdit = db.collection("contactUs").doc("contactDoc");
    return profileToEdit
      .update({
        address: newContact.address,
        email: newContact.email,
        facebook: newContact.facebook,
        instagram: newContact.instagram,
        phoneNumber: newContact.phoneNumber,
        twitter: newContact.twitter,
        youtube: newContact.youtube,
      })
      .then(() => {
        console.log("Document successfully updated!");
        fetchContactUs();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
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
              adminaddsponsorprofile: (
                <AdminAddSponsorProfile
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                  addSponsorProfile={addSponsorProfile}
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
                  calladmineditprofile={calladmineditprofile}
                />
              ),
              admineditsponsorprofile: (
                <AdminEditSponsorProfile
                  sponsorProfile={editingProfile}
                  setRouter={setRouter}
                  editSponsorProfile={editSponsorProfile}
                  handlelogout={handleAdminLogout}
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
                  addChildProfile={addChildProfile}
                  deleteChildrenProfile={deleteChildrenProfile}
                  callchildeditprofile={callchildeditprofile}
                />
              ),
              addchildrenprofile: (
                <AdminAddChildrenProfiles
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                  addChildProfile={addChildProfile}
                />
              ),
              editchildrenprofile: (
                <AdminEditChildrenProfiles
                  handlelogout={handleAdminLogout}
                  childData={editingChildProfile}
                  setRouter={setRouter}
                  editChildProfile={editChildProfile}
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
                  setQuestions={setQuestions}
                  setAnswers={setAnswers}
                />
              ),
              editcontactinformation: (
                <AdminEditContactUs
                  handlelogout={handleAdminLogout}
                  setRouter={setRouter}
                  contactUs={contactUs}
                  editContactUs={editContactUs}
                />
              ),
              admincontactus: (
                <AdminContactUs
                  contactUs={contactUs}
                  setRouter={setRouter}
                  handlelogout={handleAdminLogout}
                />
              ),
              adminfaqs: (
                <AdminFAQs
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
