import React, { useState } from "react";
import "./header.scss";
import Img from "../../assets/logo.png";

const Header = () => {

  const [mobileView , setMobileView] = useState(false);

  return (
    <>
      <header id="header" className={mobileView ? "header active-nav" : "header"}>
        <div className="header-logo flex">
          <img src={Img} alt="" />
          <span>Flare Global</span>
        </div>

        <div className="search flex ">
          <input type="search" className="search-bar"  placeholder="Search"/>
          <i class="bx bx-search" onClick={()=>{setMobileView(oldstate => !oldstate)}}></i>
        </div>

        <nav className="navbar flex">
          <div className="login-btn">
            <a href="#!" className="button">
              Sing in
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
