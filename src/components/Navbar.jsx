/** @format */
import "./navbar.css";
import { Switch } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
// import Form from "./Form";

function Navbar({ setShowRegister, showRegister }) {
  return (
    <div className='navbar'>
      <div className='main_navbar'>
        <a href='.'>Home</a>
        <a href='.'>News</a>
        <a href='.'>Contact</a>
        <a onClick={() => setShowRegister(!showRegister)}>Add Restaurant</a>
      </div>
      <Switch defaultChecked />
    </div>
  );
}

export default Navbar;
