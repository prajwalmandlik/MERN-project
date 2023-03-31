import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { server } from "../main";
import schema from "./schema";

const Home = () => {
  const [schemes, setSchemes] = useState([]);

  const dispatch = useDispatch();

  const setSchemeData = (data) => {
    dispatch({
      type: "updateScheme",
      payload: data,
    });
  };

  setSchemeData(schema);

  useEffect(() => {
    axios
      .get(`${server}/scheme/getAll`, {
        withCredentials: true,
      })
      .then((res) => {
        const userData = res.data.schemes;
        // console.log(userData)
        setSchemes(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        spacing="10"
        m={[0, 0, 0, "auto"]}
        maxW={["auto", "auto", "auto", "1080px"]}
        p={"2rem 0"}
        placeItems={"center"}
      >
        <GridItem colSpan={[1, 1, 2]} paddingBottom={10}>
          <Link to={`/setScheme/${0}`}>
            <Button leftIcon={<AddIcon />} variant="solid" colorScheme="blue">
              New Scheme
            </Button>
          </Link>
        </GridItem>
        {schemes.map((e, index) => {
          return (
            <GridItem>
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
                    <Link to={`/setScheme/${e._id}`}>
                      <Button variant="solid" colorScheme="blue">
                        Update
                      </Button>
                    </Link>
                    <Button variant="outline" colorScheme="blue">
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
