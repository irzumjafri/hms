import React from "react";
import SearchField from "react-search-field";
import logo from "./HMSlogo.png";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Styled from 'styled-components';
import { Dropdown, Selection } from "react-dropdown-now";



const Todo = ({})=>{
    const [reason, setReason] = useState("");
    return(

<Form>
  <Form.Label>
    Would you like to share why do you want to
    withdraw sponsorship for this child?
  </Form.Label>
  <Form.Control
    type="text"
    value ={reason}
    onChange={(e) => setReason(e.target.value)}
   
  ></Form.Control>
</Form>);


}

export default Todo;