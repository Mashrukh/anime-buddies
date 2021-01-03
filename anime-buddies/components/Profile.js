import Head from "next/head";
import Link from "next/link";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useAuth } from "../lib/auth";
import Header from "./Header";

const Profile = () => {
  const auth = useAuth();

  //   useEffect(() => {
  //     return () => {
  //       if (!auth.email) {
  //         toast({
  //           title: "Please sign in!",
  //           description: "You need to sign in first.",
  //           status: "warning",
  //           duration: 3000,
  //           isClosable: true,
  //         });
  //         router.push("/signin");
  //       }
  //     };
  //   }, [auth.email]);

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      
      <Header auth={auth}></Header>

      <Flex width="full" align="center" justifyContent="center" h="80vh">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Profile Setup</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl width="300px">
                <FormLabel>First name</FormLabel>
                <Input type="firstname" placeholder="First name" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Last name</FormLabel>
                <Input type="lastname" placeholder="Last name" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Username</FormLabel>
                <Input type="username" placeholder="Username" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder={auth.email}
                  isDisabled={true}
                />
              </FormControl>
              <Button type="submit" variant="outline" width="full" mt={4}>
                Save
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Profile;
