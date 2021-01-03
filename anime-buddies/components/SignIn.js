import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../lib/auth";
import Auth from "../components/Auth";
import { useRouter } from "next/router";


const SignIn = () => {
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();
  
    const signIn = ({ email, pass }) => {
      auth
        .signin(email, pass)
        .then(() => {
          router.push("/animes");
        })
        .catch((error) => {
          toast({
            title: "An error occurred.",
            description: error.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    };
  
    return (
      <div>
        <Head>
          <title>Sign In</title>
        </Head>
        <Auth type="Sign In" onSubmit={signIn} />
      </div>
    );
}

export default SignIn;