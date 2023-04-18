import React, { useState } from "react";
// import "./header.scss";
import Logo from "../../assets/logo.png";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { server } from "../..";
import { toast } from "react-hot-toast";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const [mobileView, setMobileView] = useState(false);
  const { login } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      dispatch({
        type: "updateLogin",
        payload: false,
      });

      const data = { name: "adhikar", email: "adhikar@gmail.com" }

      dispatch({
        type: "updateUserData",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const searchItem = (e) => {
    e.preventDefault();

    dispatch({
      type: "searchItem",
      payload: value,
    });

    dispatch({
      type: "applyFilter",
      payload: "all",
    });

    navigate("/")
  };

  return (
    <div className="header-cantainer">
      <Box  px={[2, 2, 2, 10]}>
        <HStack h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to={`/`}>
              {" "}
              <Image src={Logo} w={"150px"} h={"auto"} />{" "}
            </NavLink>
          </Box>

          <Box>
            <HStack>
              <Box>
                <form onSubmit={searchItem}>
                  <HStack gap={[0,0,0,"1rem"]}>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() => {
                            setValue("");
                          }}
                          _focus={{ bg: "inherit" }}
                          _active={{ bg: "inherit" }}
                          _hover={{ bg: "inherit" }}
                          hidden={(value === '') ? true : false}
                        >
                          <CloseIcon fontSize={".8rem"} />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Button
                      type={"submit"}
                      bg={"inherit"}
                      _focus={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                      _hover={{ bg: "inherit" }}
                      px={[0,0,"1rem"]}
                    >
                      <SearchIcon />
                    </Button>
                  </HStack>
                </form>
              </Box>
              <Box>
                {login ? (
                  <User name={name} logOut={logOut} />
                ) : (
                  <>
                    <Link to={`/login`}>
                      <Button variant="solid" colorScheme="blue">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

const User = ({ name, logOut }) => (
  <>
    <Menu>
      <MenuButton>
        <HStack>
          <Avatar size="sm" name={name} />
          <Text>{name.toUpperCase()}</Text>
        </HStack>
      </MenuButton>
      <MenuList m={"0 2rem"} minW={"3rem"}>
        <Link to={`/profile`}>
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={logOut}>Log out</MenuItem>
      </MenuList>
    </Menu>
  </>
);

export default Header;
