import React from "react";
import SearchField from "react-search-field";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import logo from "./HMSlogo.png"
const UnregisteredSponsorHome = (props) => {
  const{
    handleLogout,
    setRouter
  } = props;

  return (
    <body>
     <section className="navbar">
        
        <nav className="navbarContainer">
          <h2 className="titletext">Homepage</h2>
        </nav>
        <section className = "unregistered">
        <div className = "unregisteredContainer_left">
          <h1 className="label-left" >Menu</h1>
          <button className = "button_green" onClick={() => setRouter("registering")}>Register as a Sponsor</button>

        </div>
        <div className = "unregisteredContainer_right">
          <h1 className= "label-right">Calendar</h1>
        
          <Calendar className= "calender" />
        
          <h2 className="label-right" ><p className = "p_i">Today's Event(s):</p></h2>
          <p className="label-right" ><p className = "p_ii">No Events</p></p>
          <button className ="button_blue">Add Event</button>
          <button className = "button_red">Remove Event</button>       
        </div>

        </section>

       
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
            <p className="smalltext" onClick={() => setRouter("faqs")}><span>FAQs</span></p>
          </navbar>
        </section>
      </section>
    </body>
  );
};

export default UnregisteredSponsorHome;
