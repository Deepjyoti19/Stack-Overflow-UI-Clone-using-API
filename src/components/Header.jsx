import React from "react";
import "./Header.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <header className="header">
      
      <div className="header-left">
        <img
          src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" 
          alt="Stack Overflow Logo"
          className="logo"
        />
      </div>

      
<div className="header-center">
  <div className="search-bar">
    <input
      type="text"
      className="search-input"
      placeholder="Search Your Answers Here..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    
    <img src="/search.png" className="search-btn" alt="" onClick={handleSearch}/>
    
  </div>
  <p>Products</p>
</div>
      <div className="header-right">
        <img className="right-icon" src="/right-1.png" alt="" /> 
        <img className="right-icon"src="/right-2.png" alt="" />
        <img className="right-icon" src="/right-3.png" alt="" />
        <img
          src="/profile-picture.jpg" 
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </header>
  );
};

export default Header;
