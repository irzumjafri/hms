import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import Hero from "./Hero";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

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
    if (!firstname){
      setErrorMessage("First name not entered.")
      return 0;
    }
    else if (!lastname){
      setErrorMessage("Last name not entered.")
      return 0;
    }
    else if (!dateofbirth){
      setErrorMessage("Date of birth not entered.")
      return 0;
    }
    else if (!confirmpassword || confirmpassword != password){
      setErrorMessage("Passwords don't match.")
      return 0;
    }
    else{
      return 1;
    }
  };

  const handleSignUp = () => {
    clearErrors();
    if (signupErrorCheck()) {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          setErrorMessage(err.message);
        });
      // FIRESTORE: ADD ADDITIONAL DATA TO USER PROFILE
    }
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
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
        <Hero handleLogout={handleLogout} />
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
              confirmpassword={confirmpassword}
              setConfirmPassword={setConfirmPassword}
              dateofbirth={dateofbirth}
              setDateOfBirth={setDateOfBirth}
              firstname={firstname}
              setFirstName={setFirstName}
              lastname={lastname}
              setLastName={setLastName}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          )}{" "}
        </>
      )}
    </div>
  );
};

export default App;
