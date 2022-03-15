import React from 'react'
import "./Tutor.css"
import whitetutor from "../images/whitetutor.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
const Tutor = () => {
  return (
    <>
    <div className='tutor' >
        <div className="img_tutor">
            <img className='tutorimg' src={whitetutor} alt="" />
            <h1>Find a Tutor</h1>
            <p>What do You want to learn..</p>
            </div>
            <div className="cards">
                <div className="card4">
                    <div className='circles' >
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        </div>
<div className="card_logo"><img src={card1} alt="" />

<h3>Geometry</h3>
<div className="line"></div>
<h4>14 Tutors</h4>
</div>

                    </div>
                    <div className="card4">
                    <div className='circles' >
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        </div>
<div className="card_logo"><img src={card2} alt="" />

<h3>Geometry</h3>
<div className="line"></div>
<h4>14 Tutors</h4>
</div>

                    </div>
                    <div className="card4">
                    <div className='circles' >
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        </div>
<div className="card_logo"><img src={card3} alt="" />

<h3>Geometry</h3>
<div className="line"></div>
<h4>14 Tutors</h4>
</div>


                    </div>
                    <div className="card4">
                    <div className='circles' >
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        <div className="small_circles"></div>
                        </div>
<div className="card_logo"><img src={card4} alt="" />

<h3>Geometry</h3>
<div className="line"></div>

<h4>14 Tutors</h4>
</div>

                    </div>
                </div>
          
        </div>    
    </>
  )
}

export default Tutor