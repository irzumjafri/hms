import React from "react";
import SearchField from "react-search-field";
import {Button, Form} from 'react-bootstrap';
import logo from "./HMSlogo.png";

const AdminEditContactUs = (props) => {
  const {
    handleLogout,
    setRouter,
    contactPhoneNumber,
    setContactPhoneNumber,
    contactEmail,
    setContactEmail,
    contactAddress,
    setContactAddress,
    contactFacebook,
    setContactFacebook,
    contactInstagram,
    setContactInstagram,
    contactTwitter,
    setContactTwitter,
    contactYoutube,
    setContactYoutube,
  } = props;

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
              value={contactPhoneNumber}
              onChange={(e) => setContactPhoneNumber(e.target.value)}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Email Address</Form.Label>
              <Form.Control
              type="text"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              ></Form.Control>
              </div>

              <div class = "col">
              <Form.Label className= "label-left">Address</Form.Label>
              <Form.Control
              type="text"
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Facebook</Form.Label>
              <Form.Control
              type="text"
              value={contactFacebook}
              onChange={(e) => setContactFacebook(e.target.value)}
              ></Form.Control>
              </div>
              
              <div class = "col">
              <Form.Label className= "label-left">Instagram</Form.Label>
              <Form.Control
              type="text"
              value={contactInstagram}
              onChange={(e) => setContactInstagram(e.target.value)}
              ></Form.Control>
              </div>
              <div class = "col">
              <Form.Label className= "label-left">Twitter</Form.Label>
              <Form.Control
              type="text"
              value={contactTwitter}
              onChange={(e) => setContactTwitter(e.target.value)}
              ></Form.Control>
              </div>

              <div class = "col">
              <Form.Label className= "label-left">YouTube</Form.Label>
              <Form.Control
              type="text"
              value={contactYoutube}
              onChange={(e) => setContactYoutube(e.target.value)}
              ></Form.Control>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div
                  // make onclick
                    class="Button"
                    className="button_green"
                  >
                    Save Changes
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    onClick={() => setRouter("registered")}
                    class="Button"
                    className="button_redd"
                  >
                    Discard Changes
                  </div>
                </div>
              </div>
              </Form>
          </div>
        </section>


        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
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
