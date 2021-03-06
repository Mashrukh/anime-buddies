import Head from "next/head";
import Link from "next/link";
import { ApolloProvider } from "@apollo/client";
import { Button, Stack } from "@chakra-ui/react";
import { useAuth } from "../lib/auth";
import { withApollo } from "../graphql/apollo";
import { GET_USERS_QUERY } from "../graphql/queries";
import Header from "../components/Header";

export default function Home() {
  const auth = useAuth();
  //const client = createApolloClient("ID Token");
  const client = withApollo().createApolloClient("ID Token");
  client
    .query({ query: GET_USERS_QUERY })
    .then((result) => console.log(result));

  return (
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>AnimeBuddies</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header auth={auth}></Header>

        <div>{auth?.user}</div>

        <div class="bg-no-repeat bg-center">
          <div class="flex-col justify-center items-center flex h-screen">
            <h1 class="text-4xl font-bold">Welcome to AnimeBuddies</h1>
            <p class="p-5 text-3xl text-gray-500">
              Find your favourite animes, and see what your friends are watching
            </p>
            <Link href="/signup" passHref>
              <Stack>
                <Button variant="solid" colorScheme="teal">
                  Lets get started!
                </Button>
              </Stack>
            </Link>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}
