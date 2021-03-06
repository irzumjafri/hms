import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { Dropdown, Selection } from "react-dropdown-now";
const RegisterAsSponsor = (props) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    setEmail,
    handleLogout,
    setFirstName,
    setLastName,
    setDateOfBirth,
    cnic,
    setCnic,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    preferredMediumOfCommunication,
    setPreferredMediumOfCommunication,
    numberOfSponsoredChildren,
    setNumberOfSponsoredChildren,
    paymentMethod,
    setPaymentMethod,
    paymentSchedule,
    setPaymentSchedule,
    createSponsorshipRequest,
    setRouter,
    applicationStatus,
  } = props;

  return (
    <body>
      <section className="navbar">
        <section></section>
        <section className="editMyProfileSponsor">
          <div className="editMyProfileSponsorContainer">
            <Form>
              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Email *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Date of Birth (DD-MM-YYYY) *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">CNIC</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Phone Number *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">Address *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Preferred Medium of Communication *
                  </Form.Label>
                  <Dropdown
                    className="my-className"
                    options={[
                      { value: "Phone/Whatsapp", label: "Phone / Whatsapp" },
                      { value: "Email", label: "Email" },
                    ]}
                    required
                    value={preferredMediumOfCommunication}
                    onChange={(i) => setPreferredMediumOfCommunication(i.value)}
                  />
                  {/* <Form.Control
          type="text"
          required
          value={preferredMediumOfCommunication}
          onChange={(e) =>
            setPreferredMediumOfCommunication(e.target.value)
          } // make it into drop down menu
        >
          </Form.Control> */}
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">
                    Number of Sponsored Children *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={numberOfSponsoredChildren}
                    onChange={(e) =>
                      setNumberOfSponsoredChildren(e.target.value)
                    }
                  ></Form.Control>
                </div>
                <div class="col-md-6">
                  <Form.Label className="label-right">
                    Payment Method *
                  </Form.Label>

                  <Dropdown
                    className="my-className"
                    options={[
                      { value: "Cash", label: "Cash" },
                      { value: "Online Transfer", label: "Online Transfer" },
                      { value: "Cheque", label: "Cheque" },
                    ]}
                    required
                    value={paymentMethod}
                    onChange={(i) => setPaymentMethod(i.value)}
                  />
                  {/* <Form.Control
          type="text"
          required
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)} // make it into drop down menu
        >
          </Form.Control> */}
                </div>
              </Form.Row>

              <Form.Row>
                <div class="col-md-6">
                  <Form.Label className="label-left">
                    Payment Schedule *
                  </Form.Label>
                  {/* <Form.Control
          type="text"
          required
          value={paymentSchedule}
          onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
        >
        </Form.Control> */}
                  <Dropdown
                    className="my-className"
                    options={[
                      { value: "Quarterly", label: "Quarterly" },
                      { value: "Monthly", label: "Monthly" },
                      { value: "Annually", label: "Annualy" },
                    ]}
                    required
                    placeholder="Select"
                    value={paymentSchedule}
                    onSelect={(i) => setPaymentSchedule(i.value)}
                  />
                </div>

                <div class="col-md-6">
                  <Form.Label className="label-right"></Form.Label>
                  <Form.Control
                    className="blue"
                    type="text"
                    required
                    value={paymentSchedule}
                    onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
                  ></Form.Control>
                </div>
              </Form.Row>
              <div class="row">
                <div class="col-md-12">
                  {(firstName && lastName && email && dateOfBirth && cnic && phoneNumber && address && preferredMediumOfCommunication && numberOfSponsoredChildren && paymentMethod && paymentSchedule) ? (<div
                    onClick={() => {
                      createSponsorshipRequest();
                      applicationStatus
                        ? setRouter("registered")
                        : setRouter("unregistered");
                    }}
                    class="Button"
                    className="button_green"
                  >
                    REGISTER ME
                  </div>) : (<div
                    class="Button"
                    className="button_gray"
                  >
                    REGISTER ME
                  </div>)}
                </div>
              </div>
            </Form>
          </div>
        </section>
        <nav className="navbarContainer_gray">
          <img src={logo} className="Applogo" alt="logo" />
          <h2 className="titletext">Hunehar Management System</h2>
          <div className="smalltext">
            <Dropdown
              className="my-className"
              options={[
                { value: "changepw", label: "Edit Password" },
                { value: "editprofile", label: "Edit Profile" },
                { value: "deleteacc", label: "Delete Account" },
                { value: "logout", label: "Log Out" },
              ]}
              placeholder="My Account"
              value="My Account"
              onSelect={(i) => {
                if (i.value == "logout") {
                  handleLogout();
                } else if (i.value == "editprofile") {
                  setRouter("editmyprofile");
                } else if (i.value == "changepw") {
                  setRouter("editpassword");
                } else if (i.value == "deleteacc") {
                  setRouter("deleteaccount");
                }
              }} // always fires once a selection happens even if there is no change
            />
          </div>

          <nav className="navbarContainer">
            <p
              className="smalltext"
              onClick={() =>
                applicationStatus
                  ? setRouter("registered")
                  : setRouter("unregistered")
              }
            >
              <span>HOME PAGE</span>
            </p>
            <h2 className="titletext">REGISTER AS A SPONSOR</h2>
          </nav>
        </nav>
        <section className="bottombar">
          <navbar className="bottombarContainer">
            <p className="smalltext" onClick={() => setRouter("contactus")}>
              <span>Contact Us</span>
            </p>
            <p className="smalltext" onClick={() => setRouter("faqs")}>
              <span>FAQs</span>
            </p>
          </navbar>
        </section>
      </section>
    </body>
    // <body>
    //   <section className="navbar">

    //     <section className="register">
    //       <div className="registerContainer">
    //         {/* <h2 className="titletext">REGISTER AS A SPONSOR</h2> */}

    //         <label className="label-left" >First Name *</label>
    //         <label className="label-right">
    //           <p className="p_i">Last Name *</p></label>
    //         <input className="input-left"
    //           type="text"
    //           autoFocus
    //           required
    //           value={firstName}
    //           onChange={(e) => setFirstName(e.target.value)}
    //         ></input>

    //         <input
    //           className="input-right"
    //           type="text"
    //           required
    //           value={lastName}
    //           onChange={(e) => setLastName(e.target.value)}
    //         ></input>
    //         <label className="label-left">Email *</label>
    //         <label className="label-right">  <p className="p_ii">Date of Birth (DD-MM-YYYY) *</p></label>
    //         <input
    //           className="input-left"
    //           type="text"
    //           required
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         ></input>

    //         <input
    //           className="input-right"
    //           type="text"
    //           required
    //           value={dateOfBirth}
    //           onChange={(e) => setDateOfBirth(e.target.value)}
    //         ></input>
    //         <label className="label-left">CNIC </label>
    //         <label className="label-right"><p className="p_iii">Phone Number *</p></label>
    //         <input
    //           className="input-left"
    //           type="text"
    //           required
    //           value={cnic}
    //           onChange={(e) => setCnic(e.target.value)}
    //         ></input>

    //         <input
    //           className="input-right"
    //           type="text"
    //           required
    //           value={phoneNumber}
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //         ></input>
    //         <label className="label-left">Address *</label>
    //         <label className="label-right"><p className="p_iv">Preferred Medium of Communication * </p></label>
    //         <input className="input-left"
    //           type="text"
    //           required
    //           value={address}
    //           onChange={(e) => setAddress(e.target.value)}
    //         ></input>

    //         <input className="input-right"
    //           type="text"
    //           required
    //           value={preferredMediumOfCommunication}
    //           onChange={(e) =>
    //             setPreferredMediumOfCommunication(e.target.value)
    //           } // make it into drop down menu
    //         ></input>
    //         <label className="label-left">Number of Sponsored Children *</label>
    //         <label className="label-right"> <p className="p_v">Payment Method *</p></label>
    //         <input className="input-left"
    //           type="counter"
    //           required
    //           value={numberOfSponsoredChildren}
    //           onChange={(e) => setNumberOfSponsoredChildren(e.target.value)}
    //         ></input>

    //         <input className="input-right"
    //           type="text"
    //           required
    //           value={paymentMethod}
    //           onChange={(e) => setPaymentMethod(e.target.value)} // make it into drop down menu
    //         ></input>
    //         <label className="label-left"> Payment Schedule *</label>
    //         <label className="label-right">  <p className="p_iv"></p></label>
    //         <input className="input-left"
    //           type="text"
    //           required
    //           value={paymentSchedule}
    //           onChange={(e) => setPaymentSchedule(e.target.value)} // make it into drop down menu
    //         ></input>

    //         <div className="btnContainer">
    //           <button onClick={() => {createSponsorshipRequest();applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}} className="button_green">
    //             Register Me!
    //           </button>
    //         </div>
    //       </div>
    //     </section >
    //     <nav className="navbarContainer_gray">
    //       <img src={logo} className="Applogo" alt="logo" />
    //       < h2 className="titletext">Hunehar Management System</h2>
    //       <p className="smalltext" onClick={handleLogout}><span>Logout</span></p>
    //       <SearchField placeholder ="search..."
    //       classNames="search"/>
    //         <nav className="navbarContainer">
    //       <p className="smalltext" onClick={() => applicationStatus ? (setRouter("registered")) : (setRouter("unregistered"))}><span>HOME PAGE</span></p>
    //       <h2 className="titletext">REGISTER AS A SPONSOR</h2>
    //     </nav>

    //     </nav>
    //     <section className="bottombar">
    //       <navbar className="bottombarContainer">
    //         <p className="smalltext" onClick={() => setRouter("contactus")}><span>Contact Us</span></p>
    //         <p className="smalltext" onClick={() => setRouter("faqs")}><span>FAQs</span></p>
    //       </navbar>
    //     </section>
    //   </section>
    // </body>
  );
};

export default RegisterAsSponsor;
