import * as React from "react";
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";

const Center = ({ children }: { children: React.ReactNode }) => (<div style={
  {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
  }
}>
  {children}
</div>)

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = React.useState('');
  return (
    <ChakraProvider>
      <Center>
        <Component {...pageProps} user={user} setUser={setUser} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp
