import React, { useState } from "react";
import "./header.scss";
import Img from "../../assets/logo.png";
import { Button } from "@chakra-ui/react";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <div className="header-cantainer">
      <header
        id="header"
        className={mobileView ? "header active-nav" : "header"}
      >
        <div className="header-logo flex">
          <img src={Img} alt="" />
          <span>ADHIKAR</span>
        </div>

        <div className="search flex ">
          <input type="search" className="search-bar" placeholder="Search" />
          <i
            class="bx bx-search"
            onClick={() => {
              setMobileView((oldstate) => !oldstate);
            }}
          ></i>
        </div>

        <nav className="navbar flex">
          <div className="login-btn">
            <Button variant="solid" colorScheme="blue">
              Sing In
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
