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
    InputRightElement,
    InputGroup,
  } from "@chakra-ui/react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useContext, useRef, useState } from "react";
  import { toast, Toaster } from "react-hot-toast";
  import { Link as Li, Navigate } from "react-router-dom";
import { Context, server } from "../main";
  
  export default function Login() {
    const form = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    /* ================ Login user  ===============*/
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        email: form.current.email.value,
        password: form.current.password.value,
      };


      try {
        const response = await fetch(`${server}/admin/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        });
        const Data = await response.json();
        if (Data.success) {
          toast.success("user Login");
          // save the auth token and redirect to login page
          const { success } = Data;
          setIsAuthenticated(success)
        } else {
          console.log(Data);
          toast.error(Data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (isAuthenticated) {
      return <Navigate to={`/`} />;
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"gray.50"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={"white"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit} ref={form}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" id="email" />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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
                        <Li to="/signUp">
                          <Link color={"blue.400"}>SignUp</Link>
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
  