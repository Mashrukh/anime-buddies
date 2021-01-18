import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../lib/auth";
import Auth from "../components/Auth";
import { useRouter } from "next/router";

const SignUp = () => {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  const signUp = ({ email, pass }) => {
    auth
      .signup(email, pass)
      .then(() => {
        toast({
          title: "Success! 👌",
          description: "Your account has been created.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/profile");
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
        <title>Sign Up</title>
      </Head>
      <Auth type="Sign Up" onSubmit={signUp} />
    </div>
  );
}

export default SignUp;
