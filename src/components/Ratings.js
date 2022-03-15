import React from 'react'
import "./Ratings.css"
import stars from "../images/stars.png";
import blank from "../images/blank.png";
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Ratings = () => {
  return (
    <>
    <div className="ratings">
        <div className="headingfirst">
    <h3>Our tutors who Earned <span> 5 star Rating</span></h3>
    <h4>7 years of Teaching Experience</h4>
    <img src={stars} alt="" />
    </div>
    <div className="teachers_names">
        <div className="teacherall">
        <div className="teacher">
            <img src={blank} alt="" />
            <h2>Mathew Perry</h2>
            <p>Private online Principles of Finance tutor</p>
            </div>
            <div className="rating_icon">
                
            <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                </div>
                </div>
                <div className="teacherall">
        <div className="teacher">
            <img src={blank} alt="" />
            <h2>Valaria Smith</h2>
            <p>Doctorate in Business Administration</p>
            </div>
            <div className="rating_icon">
                
            <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                </div>
                </div>
                <div className="teacherall">
        <div className="teacher">
            <img src={blank} alt="" />
            <h2>Jordan Faster
</h2>
            <p>MBA, Bachelors in Finance</p>
            </div>
            <div className="rating_icon">
                
            <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                </div>
                </div>
                <div className="teacherall">
        <div className="teacher">
            <img src={blank} alt="" />
            <h2>Sienna Miller</h2>
            <p>M.Ed(TESL) (UM)/ B.Ed, (TESL) (UKM)</p>
            </div>
            <div className="rating_icon">
                
            <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                </div>
                </div>
                <div className="teacherall">
        <div className="teacher">
            <img src={blank} alt="" />
            <h2>Jacom Mc Hall
</h2>
            <p>Bsc.(Hons.) with Petroleum Chemistry</p>
            </div>
            <div className="rating_icon">
                
            <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                </div>
                </div>
                <div className="teacherall">
        <div className="teacher">
            <img src={blank} alt="" />
            <h2>Jenny Jackson</h2>
            <p>Masters in Education Management</p>
            </div>
            <div className="rating_icon">
                
            <ShareIcon/>
                  <TwitterIcon/>
                  <GoogleIcon/>
                  <YouTubeIcon/>
                </div>
                </div>
        </div>
    
  
    </div>
    </>
  )
}

export default Ratings