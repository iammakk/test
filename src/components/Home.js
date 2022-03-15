import React from "react";
import "./Home.css";
import homeImage from "../images/black.png";
import Homeheader from "../images/homeheader.png";
import star from "../images/star.png";
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Home = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="upper">
          <div className="img">
            <img src={homeImage} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottomheader">
            <img className="imgg" src={Homeheader} alt="" />
            <div className="header__text">Meet Our Team</div>
            <p>Best in service</p>
          </div>
          <div className="bottombody">
            <div className="div1">
              <div className="div1_img">
                <img src={star} alt="" />
              </div>
              <h2>Steve Carrel</h2>
              <p>Founder & Director</p>
              <div className="icons">
                  <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                 
                  </div>
              <p>There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.</p>
            </div>


            <div className="div2">
            <div className="div2_img">
                <img src={star} alt="" />
              </div>
              <h2>Linda Karen</h2>
              <p>
Co-Founder</p>
              <div className="icons">
                  <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                  </div>
              <p>There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
