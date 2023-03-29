import {
  Avatar,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const {login , userData } = useSelector((state) => state.user);
  const { name, email,createdAt } = userData;

  if (!login) {
    return <Navigate to={`/`} />;
  };

  return (
    <>
      <SimpleGrid paddingTop={"60px"} w={"100vw"} h={"65vh"} column={1} placeItems={"center"} >
        <Container>
          <Center>
            <VStack>
              <Avatar name={name} size="2xl" />
              <Heading>{name}</Heading>
              <Text>{email}</Text>
              <Text>{createdAt.split("T")[0]}</Text>
            </VStack>
          </Center>
        </Container>
      </SimpleGrid>
    </>
  );
};

export default Profile;
