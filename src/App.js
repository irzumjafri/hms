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
  const [router, setRouter] = useState("unregistered"); //change it to null value when updating from database
  const [applicationStatus, setApplicationStatus] = useState("");
  const [howToAssignChildren, setHowToAssignChildren] = useState("");

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

  // function that retreives all of data about a sponsor to set the states

  const registerRouter = () => {
    setRouter("registering");
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
      try {
        fire.auth().createUserWithEmailAndPassword(email, password);
        // user account data being set in database in this function call
        createUserAccount();
      } catch (error) {
        setErrorMessage(error.message);
      }
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
        <>
          {
            {
              registered: <RegisteredSponsorHome handleLogout={handleLogout} />,
              unregistered: (
                <UnregisteredSponsorHome
                  registerRouter={registerRouter}
                  handleLogout={handleLogout}
                />
              ),
              registering: (
                <RegisterAsSponsor
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
                />
              ),
            }[router]
          }
        </>
      ) : (
        <>
          {" "}
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
          )}{" "}
        </>
      )}
    </div>
  );
};

export default App;
