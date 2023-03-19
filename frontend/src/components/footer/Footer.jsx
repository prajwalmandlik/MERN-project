import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
// import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Logo from "../../assets/logo.png";

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image w={"11rem"} h={"auto"} objectFit="cover" src={Logo} alt="Logo" />
            </Box>
            <Text fontSize={"sm"}>© 2023 Aditya. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <Button
                label={"Twitter"}
                href={"#"}
                borderRadius={"50%"}
                p={"5px 10px"}
              >
                <FaTwitter />
              </Button>
              <Button
                label={"YouTube"}
                href={"#"}
                borderRadius={"50%"}
                p={"5px 10px"}
              >
                <FaYoutube />
              </Button>
              <Button
                label={"Instagram"}
                href={"#"}
                borderRadius={"50%"}
                p={"5px 10px"}
              >
                <FaInstagram />
              </Button>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Company</ListHeader> */}
            <Heading as="h4" size="md">
              Company
            </Heading>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Support</ListHeader> */}
            <Heading as="h4" size="md">
              Support
            </Heading>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Stay up to date</ListHeader> */}
            <Heading as="h4" size="md">
              Stay up to date
            </Heading>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blue.100", "whiteAlpha.900")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("steelblue", "steelblue.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "steelblue.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
