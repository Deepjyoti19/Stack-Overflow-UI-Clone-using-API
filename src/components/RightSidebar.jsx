import React from "react";
import { FaHome, FaGlobeAsia, FaBriefcase, FaSuitcase, FaUserFriends  } from "react-icons/fa";
import "./RightSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const RightSidebar = () => {
  return (
    <div className="right-sidebar ">
      <div className="blog-section main-head">
        <h2>The Overflow Blog</h2>
        
          <div>
            <div className="container">
              <div>
              <FontAwesomeIcon icon={faPen} style={{color: "#b4bccb",}} />
              </div>
               <div className="content">
               The unexpected benefits of mentoring others
               </div>
               
            </div>
            <div className="container">
              <div>
              <FontAwesomeIcon icon={faPen} style={{color: "#b4bccb",}} />
              </div>
            
              <div className="content">Podcast 354: Building for AR with Niantic Labs' augmented reality SDK</div>
            </div>
          </div>
        
      </div> 
      <div className="featured-section main-head">
        <h2>Featured & Meta</h2>
          <div className="container">
            <div>
            <FontAwesomeIcon icon={faStackOverflow} style={{color: "#b4bccb",}}  />
            </div>
            <div className="content">
             Beta release of Collectives™ on Stack Overflow
            </div>
          </div>
      </div>
      <div className="meta-posts">

       <div className="meta main-head">
       <h2>Hot Meta Posts</h2>
        <div className="container">
          <div className="number">
            <b>8</b>
          </div>
          <div className="content">
          &nbsp;&nbsp;Tags [driver] and [device-driver] appear &nbsp;to be redundant
          </div>
        </div>

        <div className="container">
          <div className="number">
            <b>27</b>
          </div>
          <div className="content">
          How to handle dupes where A is closed as dup of But I have an answer that...
          </div>
        </div>
        <div className="container">
          <div className="number">
            <b>27</b>
          </div>
          <div className="content">
          Ambigous tag [containers]
          </div>
        </div>

       </div>
      </div>
      <div className="featured-section main-head">
        <h2>Custom filter</h2>
          <div className="custom-filter">
            add custom filters
          </div>
      </div>
    </div>
  );
};

export default RightSidebar;
