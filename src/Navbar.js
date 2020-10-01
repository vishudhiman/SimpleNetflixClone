import React, { useEffect, useState } from "react";
import "./App.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // remove listener as soon as possible
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=1024"
        alt="NETFLIX"
      />
      {/* <img
        className="nav-avatar"
        src="https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        alt="NetFlix Logo"
      /> */}
    </div>
  );
}

export default Navbar;
