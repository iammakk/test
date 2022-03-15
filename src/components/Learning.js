import React from 'react'
import "./Learning.css"
import Homeheader from "../images/homeheader.png";
import learning1 from "../images/learning1.png";
import learning2 from "../images/learning2.png";
const Learning = () => {
  return (
    <>
    <div className="learning">
        <div className="learning_first">
            <div className="image_heading">
            <img src={Homeheader} alt="" />
            <h1>Learning is Fun with JD</h1>
                </div>
           

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos aliquam, dignissimos placeat perferendis minima voluptate minus quaerat repellat eligendi laudantium error, provident, ea deleniti sunt maiores odio! Illum ex vero minus. Consequuntur quia id similique rerum ipsa adipisci ad, deleniti vel! Eos nobis, voluptates error dolorum natus praesentium atque.</p>

            
            </div>
            <div className="learning_second">
                <div className="learning1">
                    <img src={learning1} alt="" />
                    <h1>Certifications</h1>
                    <h5>Get Globally Recognized Certifications
</h5>
<div className="underline"></div>
<div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa placeat deleniti quia delectus eum! Obcaecati quaerat et necessitatibus sint voluptates! Nesciunt quisquam autem quidem labore et ipsa excepturi tempora sit asperiores ad quae nam modi porro assumenda quis, alias, impedit eaque. Voluptas necessitatibus consequuntur vitae dolores assumenda perspiciatis sint debitis atque aliquam corporis! Commodi sed esse suscipit necessitatibus, molestiae officiis error expedita saepe. Distinctio?</div>
                    <button>Know More</button>
                    </div>
                <div className="learning2">
                <img src={learning2} alt="" />
                    <h1>Technical Training</h1>
                    <h5>Get Globally Recognized Certifications
</h5>
<div className="underline"></div>
<div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa placeat deleniti quia delectus eum! Obcaecati quaerat et necessitatibus sint voluptates! Nesciunt quisquam autem quidem labore et ipsa excepturi tempora sit asperiores ad quae nam modi porro assumenda quis, alias, impedit eaque. Voluptas necessitatibus consequuntur vitae dolores assumenda perspiciatis sint debitis atque aliquam corporis! Commodi sed esse suscipit necessitatibus, molestiae officiis error expedita saepe. Distinctio?</div>
                    <button>Know More</button>
                    </div>
                
                </div>
        </div>
    
    </>
  )
}

export default Learning