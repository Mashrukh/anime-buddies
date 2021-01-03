import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../lib/auth";

function MyApp ({ Component, pageProps }) {
  return (
    <ProvideAuth>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
    </ProvideAuth>
  );
}
  
export default MyApp;
