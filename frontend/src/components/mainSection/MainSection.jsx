import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { data } from "./Data";

const MainSection = () => {
  return (
    <>
      {data.map((e, index) => {
        return (
          <Card
            maxW={"1080px"}
            m={"1rem auto"}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={e.img}
              alt="Caffe Latte"
            />

            <HStack alignItems={"flex-start"}>
              <CardBody>
                <Heading size="md">{e.name}</Heading>

                <Text py="2">{e.desc}</Text>
              </CardBody>
              <VStack p={"5rem"} gap={"2rem"}>
                <Link to={`/details/${e.id}`}>
                  <Button variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </Link>
                <a href={e.link} target={"blank"}>
                  <Button variant="solid" colorScheme="blue" m={"0 1rem"}>
                    Apply now
                  </Button>
                </a>
              </VStack>
            </HStack>
          </Card>
        );
      })}
    </>
  );
};

export default MainSection;
