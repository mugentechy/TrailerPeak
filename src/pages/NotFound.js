import React from "react";
import { Link } from "react-router-dom";
import "../assets/NotFound.css"; // Import CSS for styling


export default function NotFound() {
  return (
    <div className="not-found">
      <div className="diagonal-lines"></div> {/* Background effect */}
      <h2>Oops! Well, this is awkward...</h2>

    
      <img src="/images/deadpool.png" alt="Deadpool" className="not-found-img" />
        <p>It looks like you're lost buddy.. you should probably leave before Disney finds out I'm here</p>
      <Link to="/" className="home-button">
        Take Me Home (Country Roads 🎵)
      </Link>
    </div>
  );
}