import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';
 
const AdminEditContactUs = (props) => {
  const {
    handlelogout,
    setRouter,
    contactUs,
    editContactUs,
    StyledPopup = Styled(Popup)`
    // use your custom style for ".popup-overlay"
    &-overlay {
      background: rgba(0, 0, 0, 0.5);
    }
    // use your custom style for ".popup-content"
    &-content {
      align-items: center;
      justify-content: center;
      margin: auto;
      background: white;
      width: 40%;
      padding: 5px;
      border-radius: 10px;
      font-size: 18px;
      padding: 2%;
    }
    
    &-content .button_green
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #33773d;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: max-content;
     
      padding: 10px 10px;
    }
  
    &-content .button_gray
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #d3d3d3;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    &-content .button_blue
    {
      border: none;
      outline: none;
      width: 50%;
      padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #529cea;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: max-content;
     
      padding: 10px 10px;
    }
  
    &-content .button_red
    {
  
      border: none;
      outline: none;
      //padding: 10px 0px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
      background: #ff0033;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center
      min-width: max-content;
     
      padding: 10px 10px;
  
    }
    `,
  } = props;

  console.log(contactUs)

  const [phoneNumber, setPhoneNumber] = useState(contactUs.phoneNumber);
  const [address, setAddress] = useState(contactUs.address);
  const [facebook, setFacebook] = useState(contactUs.facebook);
  const [twitter, setTwitter] = useState(contactUs.twitter);
  const [youtube, setYoutube] = useState(contactUs.youtube);
  const [email, setEmail] = useState(contactUs.email);
  const [instagram, setInstagram] = useState(contactUs.instagram);



  return (
    <body>
            <section className="navbar">
      
      <section>
      </section>

{/* CREATE ONCHANGEEEEEE */}
      <section className="contactUs">
        <div className="contactUsContainer">
        <Form>
              <div class = "col">
              <Form.Label className= "label-left">Phone Number</Form.Label>
              <Form.Control
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Email Address</Form.Label>
              <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              </div>

              <div class = "col">
              <Form.Label className= "label-left">Address</Form.Label>
              <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Facebook</Form.Label>
              <Form.Control
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              ></Form.Control>
              </div>
              
              <div class = "col">
              <Form.Label className= "label-left">Instagram</Form.Label>
              <Form.Control
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Twitter</Form.Label>
              <Form.Control
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              ></Form.Control>
              </div>

              <div class = "col">
              <Form.Label className= "label-left">YouTube</Form.Label>
              <Form.Control
              type="text"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              ></Form.Control>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div
                    onClick={() => {setRouter("home");editContactUs({
                      'twitter': twitter,
                      'facebook': facebook,
                      'youtube': youtube,
                      'phoneNumber': phoneNumber,
                      'address': address,
                      'email': email,
                      'instagram':instagram,
                      'id': contactUs.id
                    })}}
                    class="Button"
                    className="button_green"
                  >
                    Save Changes
                  </div>
                </div>
                <div class="col-md-6">
                <StyledPopup trigger={<div class = "Button" className= "button_redd">
                     Discard Changes</div>} position="center" modal nested>
                    <div>
                     You are about to discard the changes made. Do you want to continue?
                     </div>
                     <div class = "row">
                      <div class = "col-md-6">
                      
                     <button
                    
                         className="button_gray"
                       >
                         Cancel
                       </button> 

                       </div>
                       <div class = "col-md-6">
                       <button
                        onClick={() => setRouter("home")}
                         
                         className="button_red"
                       >
                        Discard Changes
                       </button>

                       </div>
                       </div>
                       </StyledPopup>
                </div>
              </div>
              </Form>
          </div>
        </section>


        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handlelogout}><span>Logout</span></p>
         
          
          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => setRouter("home")}><span>HOME PAGE</span></p>
          <h2 className="titletext">CONTACT US</h2>
        </nav>
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

export default AdminEditContactUs;







// import React from "react";
// import SearchField from "react-search-field";

// const AdminEditContactUs = (props) => {
//   const {
//     handleLogout,
//     setRouter,
//     contactPhoneNumber,
//     setContactPhoneNumber,
//     contactEmail,
//     setContactEmail,
//     contactAddress,
//     setContactAddress,
//     contactFacebook,
//     setContactFacebook,
//     contactInstagram,
//     setContactInstagram,
//     contactTwitter,
//     setContactTwitter,
//     contactYoutube,
//     setContactYoutube,
//   } = props;

//   return (
//     <body>
//       <section>
//         <nav>
//           <h2>Hunehar Management System</h2>
//           <SearchField />
//           <button onClick={handleLogout}>Logout</button>
//         </nav>
//         <section>
//           <h2>EDIT CONTACT US</h2>
//           <button onClick={() => setRouter("home")}> HOME PAGE </button>
//         </section>
//         <section className="adminEditContactUs">
//           <div className="adminEditContactUsContainer">
//             <div>
//               <label>Phone Number </label>
//               <input
//                 type="text"
//                 autoFocus
//                 required
//                 value={contactPhoneNumber}
//                 onChange={(e) => setContactPhoneNumber(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label>Email Address</label>
//               <input
//                 type="text"
//                 required
//                 value={contactEmail}
//                 onChange={(e) => setContactEmail(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label>Address</label>
//               <input
//                 type="text"
//                 required
//                 value={contactAddress}
//                 onChange={(e) => setContactAddress(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label>Facebook</label>
//               <input
//                 type="text"
//                 required
//                 value={contactFacebook}
//                 onChange={(e) => setContactFacebook(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label>Instagram</label>
//               <input
//                 type="text"
//                 required
//                 value={contactInstagram}
//                 onChange={(e) => setContactInstagram(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label>Twitter</label>
//               <input
//                 type="text"
//                 required
//                 value={contactTwitter}
//                 onChange={(e) => setContactTwitter(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label>YouTube</label>
//               <input
//                 type="text"
//                 required
//                 value={contactYoutube}
//                 onChange={(e) => setContactYoutube(e.target.value)}
//               ></input>
//             </div>
//             <div className="btnContainer">
//               <button
//                 // Make new onlick Function onClick={() => setRouter("registered")}
//                 className="button_red"
//               >
//                 ❌ Discard Changes
//               </button>
//               <button
//                 // Make new onclick function onClick={() => {
//                 //   setRouter("registered");
//                 //   editSponsorProfile();
//                 // }}
//                 className="buttongreen"
//               >
//                 ✅ Save Changes
//               </button>
//             </div>
//           </div>
//         </section>
//         <button onClick={() => setRouter("admincontactus")}>Contact Us</button>
//         <button onClick={() => setRouter("adminfaqs")}>FAQs</button>
//       </section>
//     </body>
//   );
// };

// export default AdminEditContactUs;
