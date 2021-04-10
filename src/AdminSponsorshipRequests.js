import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import AdminEditSponsorProfile from "./AdminEditSponsorProfile";
import {Button, Form} from 'react-bootstrap';
const SponsorshipRequests = (props) => {
  const {
    handlelogout,
    sponsorshipApplicationData,
    setRouter,
    rejectSponsorshipRequest,
    acceptSponsorshipRequest,
  } = props;

  console.log(sponsorshipApplicationData)

  return (
    <body>
       <section className="navbar">
     
     <section className="editMyProfileSponsor">
       <div className="editMyProfileSponsorContainer">

          {sponsorshipApplicationData.map((con, i) => {
            return (
              

              <Form>
              <Form.Row >
              <div class = "col-md-6">
            <Form.Label className= "label-left">First Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={sponsorshipApplicationData[i].firstName}
            ></Form.Control>
            </div >
            <div class = "col-md-6">
            <Form.Label className= "label-right">Last Name</Form.Label>
            <Form.Control
              type="text"
              required
              value={sponsorshipApplicationData[i].lastName}
            ></Form.Control>
              </div>
              </Form.Row>

              <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">Email</Form.Label>
            <Form.Control
              type="text"
              required
              value={sponsorshipApplicationData[i].email}
              
            >
            </Form.Control>
            </div>
            <div  class = "col-md-6">
            <Form.Label className= "label-right">Date of Birth (DD-MM-YYYY)</Form.Label>
            <Form.Control
              type="text"
              required
              value={sponsorshipApplicationData[i].dateOfBirth}
            >
              </Form.Control>
            </div >
            </Form.Row>

            <Form.Row>
              <div class = "col-md-6">
            <Form.Label className= "label-left">CNIC</Form.Label>
            <Form.Control
             type="text"
             required
             value={sponsorshipApplicationData[i].cnic}
            >
            </Form.Control>
            </div>
            <div class = "col-md-6">
            <Form.Label className= "label-right">Phone Number</Form.Label>
            <Form.Control
             type="text"
             required
             value={sponsorshipApplicationData[i].phoneNumber}
            >
              </Form.Control>
            </div >
            </Form.Row >

            <Form.Row> 
              <div class = "col-md-6">
            <Form.Label className= "label-left">Address</Form.Label>
            <Form.Control
              type="text"
              required
              value={sponsorshipApplicationData[i].address}
            >
            </Form.Control>
            </div>

            <div class = "col-md-6">
            <Form.Label className= "label-left">Preferred Medium of Communication</Form.Label>
            <Form.Control
                type="text"
                required
                value={sponsorshipApplicationData[i]
                  .preferredMediumOfCommunication}

                
            >
            </Form.Control>
            </div>



            </Form.Row>

            <Form.Row> 
              <div class = "col-md-6">
            <Form.Label className= "label-left">Number of Sponsored Children</Form.Label>
            <Form.Control
              type="text"
              required
              value={sponsorshipApplicationData[i].numberOfSponsoredChildren}
            >
            </Form.Control>
            </div>

            <div class = "col-md-6">
            <Form.Label className= "label-left">Payment Method</Form.Label>
            <Form.Control
              type="text"
              required
              value= {sponsorshipApplicationData[i].paymentMethod}
            >
            </Form.Control>
            </div>


            </Form.Row>

            
            <div class = "row">
              <div class = "col-md-6" >
                <div onClick={() =>{
                        setRouter('home');
                        acceptSponsorshipRequest(
                          sponsorshipApplicationData[i].id,"manual"
                        )
                      
          }}
              class = "Button" className="button_green">Approve</div>
              </div>
              <div class = "col-md-6" >
                <div onClick={() => {
                        setRouter("home");
                        rejectSponsorshipRequest(sponsorshipApplicationData[i].id);
                      }} class = "Button" className="button_redd">Reject</div>
              </div>
            </div>

            </Form>
                 
             
            );
          })}
           </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          < h2 className="titletext">Hunehar Management System</h2>
          <p className="smalltext" onClick={handlelogout}><span>Logout</span></p>
          <SearchField placeholder ="search..."
          classNames="search"/> 
          
          <nav className="navbarContainer">
          <p className="smalltext" onClick={() => setRouter("home")}><span>HOME PAGE</span></p>
          <h2 className="titletext">SPONSORSHIP REQUESTS</h2>
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

export default SponsorshipRequests;
