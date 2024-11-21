import React from "react";
import "./Sidebar.css";
import { FaHome, FaGlobeAsia, FaBriefcase, FaSuitcase, FaUserFriends  } from "react-icons/fa";
import { HiOutlineGlobe } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-item active">
          <img className="image"  src="/home.png" alt="" />
          <span>Home</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-item">
        <img className="image"  src="/public.png" alt="" />
          <span>Public</span>
        </div>
        <div className="sidebar-item">
          <span className="sub">Question</span>
        </div>
        <div className="sidebar-item">
          <span className="sub">Tags</span>
        </div>
        <div className="sidebar-item">
          <span className="sub">Users</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-item">
        <img className="image"  src="/collectives.png" alt="" />
          <span>Collectives</span>
        </div>
        <div className="sidebar-item"> 
          <span className="sub">Explore Jobs</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-item"> 
        <img className="image"  src="/Find-jobs.png" alt="" />
          <span>Find Jobs</span>
        </div>
        <div className="sidebar-item"> 
          <span className="sub">Jobs</span>
        </div>
        <div className="sidebar-item"> 
          <span className="sub">Companies</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-item">
        <img className="image"  src="/Teams.png" alt="" />
          <span>Teams</span>
        </div>
        <div className="sidebar-item">
          <span className="sub">+ Create a team</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
