import React from "react";

function About() {
  return (
    <div className="about-section">
      <div className="about-text">
        <span>About Us</span>
        <div className="about-head">
          <h3>
            Started in 2015, we turn dreams into reality bringing aesthetic
            interior design with a functional focus within everyone's reach
            without budget restrictions
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur ipsam nesciunt reiciendis ab magni, iste assumenda
            necessitatibus voluptatum alias officia atque aperiam harum ullam a.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eius?
          </p>
        </div>
      </div>
      <div className="about-boxes">
        <div className="about-box">
          <h6>Pragmatic</h6>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nulla
            id nihil aliquid veritatis porro natus.
          </span>
        </div>
        <div className="about-box  circle">
          <h6>Adaptive</h6>
        </div>
        <div className="about-box  circle">
          <h6>Flexible</h6>
        </div>
      </div>
    </div>
  );
}

export default About;
