import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import schema from "./schema";

const Home = () => {
  const [schemes, setSchemes] = useState([]);

  const {setSchemeData} = useContext(Context)

  setSchemeData(schema);

const deleteScheme = (id) => {
  try {
    axios
      .delete(`${server}/scheme/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        toast.success("scheme deleted")
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
}

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
  }, [deleteScheme]);

  return (
    <div className="bgColor">
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        gap={5}
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
                      <Button leftIcon={<EditIcon />} variant="solid" colorScheme="blue" >
                        Update
                      </Button>
                    </Link>
                    <Button leftIcon={<DeleteIcon />} variant="outline" colorScheme="blue" onClick={() => {deleteScheme(e._id)}} >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
      <Toaster />
    </div>
  );
};

export default Home;
