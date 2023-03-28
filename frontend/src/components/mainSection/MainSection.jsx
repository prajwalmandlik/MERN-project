import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { data } from "./Data";

const MainSection = () => {
  const [schemes, setSchemes] = useState([]);

  const { setFilter } = useSelector((state) => state.filter);

  useEffect(() => {
    if (setFilter === "all") {
      setSchemes(data);
    } else {
      const newSchemes = data.filter((scheme) => {
        return scheme.category.toLowerCase() === setFilter;
      });

      setSchemes(newSchemes);
    }
  },[setFilter]);

  return (
    <>
      <HStack
        m={["1rem", "2rem", "2rem", "auto"]}
        maxW={"1080px"}
        wrap={"wrap"}
        justifyContent={"space-evenly"}
        rowGap={"2rem"}
        p={"2rem 0"}
      >
        {schemes.map((e, index) => {
          return (
            <Card maxW="md">
              <CardBody>
                <Image
                  src={e.flare}
                  alt={e.name}
                  borderRadius="lg"
                  w={"auto"}
                  h={["auto","156px"]}
                  m={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" noOfLines={1}>
                    {e.title}
                  </Heading>
                  <Text noOfLines={3}>{e.description}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link to={`/details/${index}`}>
                    <Button variant="solid" colorScheme="blue">
                      More Info
                    </Button>
                  </Link>
                  <a href={e.link} target={"blank"}>
                    <Button variant="ghost" colorScheme="blue">
                      Apply Now
                    </Button>
                  </a>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </HStack>
    </>
  );
};

export default MainSection;
