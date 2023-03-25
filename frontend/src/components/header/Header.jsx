import React, { useState } from "react";
import "./header.scss";
import Img from "../../assets/logo.png";
import {
  Avatar,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const { login} = useSelector((state) => state.user);
  const { userData } = useSelector((state) => state.user)
  const { name } = userData;

  const userName = name.split(" ");
  const dispatch = useDispatch();


  /* ================ Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-cantainer");

    // when the scroll is higher than 200 viewport height,add the scroll-header class to a tag with the header calss
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  
  
  const logOut = () =>{
    dispatch({
      type: "updateLogin",
      payload: false,
    });

    dispatch({
      type: "updateUserData",
      payload: {name:"" ,email:""},
    });
  }
  return (
    <div className="header-cantainer">
      <header
        id="header"
        className={mobileView ? "header active-nav" : "header"}
      >
        <div className="header-logo flex">
          <Link to={`/`}>
            <img src={Img} alt="" />
            {/* <span>ADHIKAR</span> */}
          </Link>
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
            {login ? (
              <User name={userName[0]} nameLogo={name} logOut={logOut} />
            ) : (
              <>
                <Link to={`/login`}>
                  <Button variant="solid" colorScheme="blue">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

const User = ({ name, nameLogo,logOut}) => (
  <>
    <Menu>
      <MenuButton>
        <HStack>
          <Avatar size="sm" name={nameLogo} />
          <Text>{name.toUpperCase()}</Text>
        </HStack>
      </MenuButton>
      <MenuList m={"0 2rem"} minW={"3rem"}>
        <MenuItem>Profile</MenuItem>
        <MenuItem
          onClick={logOut}
        >
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  </>
);

export default Header;
