import React from "react";
import "./Last.css";
import last1 from "../images/last1.png";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Last = () => {
  return (
    <>
      <div className="last">
        <div className="last1">
          <img src={last1} alt="" />
          <p>
            Discuss with the tutee the amount of time necessary to complete each
            part of their task.
          </p>
        </div>
        <div className="last2">
          <ul>
            <h3>UseFull Links</h3>
            
            <li>Free Consultation</li>
            <li>Visit Us</li>
            <li>Chat with us</li>
          </ul>
        </div>
        <div className="last3">
          <h4>Contact</h4>
          <div className="call1">
            <CallIcon /> <p>444.332.1167</p>
          </div>
          <div className="add1">
            
            <LocationOnIcon /> <p>7461 old Harvard Rd. Middleburg, FL 32068</p>
          </div>
        </div>
        <div className="last4">
          <h3>Follow us</h3>
          <ShareIcon />
          <TwitterIcon />
          <GoogleIcon />
          <YouTubeIcon />
        </div>
      </div>
    </>
  );
};

export default Last;
