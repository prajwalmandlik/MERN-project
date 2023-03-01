import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./sort.scss";

const Sort = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HStack
        m={["1rem","1rem", "1rem","1rem 10rem"]}
        bgColor="lightblue"
        p={"2rem"}
        borderRadius={"10px"}
        align={"start"}
        wrap="wrap"
        gap={"1rem"}
      >
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

        <Button>India</Button>
        <Button>Study Abroad</Button>
        <Button
          leftIcon={<i class="bx bx-filter"></i>}
          colorScheme="blue"
          onClick={onOpen}
        >
          Fliter
        </Button>
        <Button>Apply</Button>
      </HStack>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"md"} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Fliter</DrawerHeader>
          <DrawerCloseButton />
          <Tabs orientation="vertical" variant={"unstyle"}>
            <TabList minWidth="150px">
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
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
      </Drawer>
    </>
  );
};

export default Sort;
