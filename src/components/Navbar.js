import React from "react";
import "./Navbar.css";
import CallIcon from "@mui/icons-material/Call";
import logo from "../images/download.png";
import call from "../images/call.png";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="yellow">
          <div className="logo">
            <img className="" src={logo} alt="not found" />
          </div>
          <div className="tabs">
            <div className="tab">Home</div>
            <div className="tab">About</div>
            <div className="tab">LifeStyle</div>
            <div className="tab">Services</div>
            <div className="tab">Timeline</div>
            <div className="tab">Awards</div>
            <div className="tab">Media</div>
            <div className="tab">Contact</div>
          </div>
        </div>
        <div className="white">
          <div className="call">
            <img src={call} className="callicon" />
          </div>
          <div className="info">
            <div className="first"> Available @ </div>
            <div className="second">123-456-67890</div>
          </div>
        </div>
      </div>

      <div className="mob__nav">
        <MobileNav/>
        </div>
    </>
  );
};

export default Navbar;
