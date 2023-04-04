import React from "react";
import {
  Button,
  // Checkbox,
  // Divider,
  // Drawer,
  // DrawerCloseButton,
  // DrawerContent,
  // DrawerHeader,
  // DrawerOverlay,
  HStack,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuList,
  // Tab,
  // TabList,
  // TabPanel,
  // TabPanels,
  // Tabs,
  // useDisclosure,
  // VStack,
} from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import "./sort.scss";
import { useDispatch } from "react-redux";

const Sort = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const filters = [
    "All",
    "Female",
    "Farmer",
    "Education",
    "Senior Citizen",
    "Kids",
    "Employee",
  ];

  const dispatch = useDispatch();

  return (
    <>
      <HStack
        maxW={["auto", "auto", "auto", "1080px"]}
        m={"0 auto"}
        bgColor="lightblue"
        p={"1rem 2rem .4rem 2rem"}
        borderRadius={"10px"}
      >
        {/* <HStack gap={"1rem"}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              minWidth="240px"
            >
              All
            </MenuButton>
            <MenuList>
              <MenuItem>Upper class 8</MenuItem>
              <MenuItem>class 9</MenuItem>
              <MenuItem>class 8</MenuItem>
              <MenuItem>class 12</MenuItem>
              <MenuItem>Post Gradution</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <HStack gap={"1rem"} >
          <Button p={"0 2rem"} bgColor={"white"}>All</Button>
          <Button p={"0 2rem"} bgColor={"white"}>Women's</Button>
          <Button p={"0 2rem"} bgColor={"white"}>Education</Button>
          <Button p={"0 2rem"} bgColor={"white"}>Farmer</Button>
          <Button p={"0 2rem"} bgColor={"white"}>Health</Button>
          <Button p={"0 2rem"} bgColor={"white"}>Family</Button>
        </HStack>
        <HStack gap={"1rem"}>
          <Button
            leftIcon={<i class="bx bx-filter"></i>}
            colorScheme="blue"
            onClick={onOpen}
          >
            Fliters
          </Button>
          <Button>Apply</Button>
        </HStack> */}
        <HStack
          align={"center"}
          wrap="nowrap"
          gap={"1rem"}
          overflowX={"scroll"}
          className={"sort"}
        >
          {filters.map((element) => {
            return (
              <>
                <Button
                  minW={"7rem"}
                  p={"1rem 2rem"}
                  bgColor={"white"}
                  onClick={() => {
                    dispatch({
                      type: "applyFilter",
                      payload: element.toLocaleLowerCase(),
                    });

                    if(element === "All"){
                      dispatch({
                        type: "searchItem",
                        payload: "",
                      });
                    }
                  }}
                >
                  {element}
                </Button>
              </>
            );
          })}
        </HStack>
      </HStack>
      {/* <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Fliter</DrawerHeader>
          <DrawerCloseButton />
          <Tabs orientation="vertical" variant={"unstyle"}>
            <TabList minWidth="150px">
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>One</Tab>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Two</Tab>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Three</Tab>
            </TabList>
            <Divider orientation="vertical" />
            <TabPanels>
              <TabPanel>
                <VStack align={"start"}>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack align={"start"}>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack align={"start"}>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                  <Checkbox>Checkbox</Checkbox>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerContent>
      </Drawer> */}
    </>
  );
};

export default Sort;
