import React from "react";
import { Link } from "react-router-dom";

const LatestData = [
  {
    image: "images/Latest1.jpg",
    name: "How to Clean the House",
    description: "How to clean your house so it is...",
  },
  {
    image: "images/Latest2.webp",
    name: "New home design tips",
    description: "Tips for choosing the right home design",
  },
  {
    image: "images/Latest3.jpg",
    name: "Tips for choosing house colors",
    description: "Identify your home style and neighbourhood",
  },
];

function Latest() {
  const latData = LatestData;

  return (
    <div className="latest-section">
      <h3>Latest Article</h3>
      <div className="latest">
        {latData.map((latest) => (
          <LatestProp latestObj={latest} key={latest.name} />
        ))}
      </div>
      <div className="section-img">
        <div>
          <img src="images/Latest4.jpg" alt="" />
        </div>
        <div className="latest-grid">
          <h6>Build Now</h6>
          <p>We design spaces that are both beautiful and functional</p>
          <div>
            <p>Immerse yourself in the world of 3D design with oestedino</p>
            <Link to="/">Lets Talk &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestProp({ latestObj }) {
  return (
    <div className="latest-box">
      <div className="latest-img">
        <img src={latestObj.image} alt={latestObj.name} />
      </div>
      <div className="latest-text">
        <div>
          <p>{latestObj.name}</p>
          <span className="sub-text">{latestObj.description}</span>
        </div>
        <Link to="/" className="sub-link"> &rarr;</Link>
      </div>
    </div>
  );
}

export default Latest;
