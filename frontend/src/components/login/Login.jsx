import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link as Li, useNavigate } from "react-router-dom";
import { server } from "../..";

export default function Login() {
  const form = useRef();
  const navigate = useNavigate();
const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: form.current.email.value,
      password: form.current.password.value,
    };
    console.log(data);
    try {
      const response = await fetch(`${server}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.success) {
        await toast.success("Account created");
        // save the auth token and redirect to login page
        dispatch({
          type: "updateLogin",
          payload: true,
        });
        localStorage.setItem("token", json.authtoken);
        
        navigate("/");
      } else {

        console.log(json);
        toast.error(json.error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit} ref={form}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" id="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" id="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                  p={"1rem 0"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Li to="/ForgotPassword">
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Li>
                </Stack>
                <Stack spacing={10} pt={2}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type={"submit"}
                  >
                    Sign in
                  </Button>
                  <Stack pt={3}>
                    <Text align={"center"}>
                      Dont have account?{" "}
                      <Li to="/singUp">
                        <Link color={"blue.400"}>SingUp</Link>
                      </Li>
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </form>
            <Toaster position="top-center" reverseOrder={false} />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
