import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { server } from "../..";
import { useSelector } from "react-redux";
// import { data } from "./Data";

const MainSection = () => {
  const [schemes, setSchemes] = useState([]);
  const { filter ,search } = useSelector((state) => state.filter);
  const { login } = useSelector((state) => state.user);

const url = [`getAll`, `search/${search}`,`filter/${filter}`]

  useEffect(() => {

    if(filter === "all" && search === ''){
      console.log(0)
    }else if(filter === "all"){
      console.log(1)
    }else{
      console.log(2)
    }

    if (filter === "all" && search === '') {
      axios
        .get(`${server}/scheme/${url[0]}`, {
          withCredentials: true,
        })
        .then((res) => {
          const userData = res.data.schemes;
          setSchemes(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      try {
        axios
          .get(`${server}/scheme/${(filter === "all") ? url[1] : url[2] }`, {
            withCredentials: true,
          })
          .then((res) => {
            const scheme = res.data.scheme;
            setSchemes(scheme);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [filter, login,search ]);

  return (
    <>
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        spacing="10"
        m={[0, 0, 0, "auto"]}
        maxW={["auto", "auto", "auto", "1080px"]}
        p={"2rem 0"}
        placeItems={"center"}
      >
        {schemes.length === 0 ? "Scheme is not present" : null }
        {schemes.map((e) => {
          return (
            <Card maxW={["md", "lg", "md", "lg", "lg"]}>
              <CardBody>
                <Image
                  src={e.flare}
                  alt={e.name}
                  borderRadius="lg"
                  w={"auto"}
                  h={["auto", "156px"]}
                  m={["auto"]}
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
                  <HashLink to={`/details/${e._id}#schemeDetails`}>
                    <Button variant="solid" colorScheme="blue">
                      More Info
                    </Button>
                  </HashLink>
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
      </SimpleGrid>
    </>
  );
};

export default MainSection;
