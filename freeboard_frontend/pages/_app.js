// import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// import Layout from "../src/components/commons/layout/";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
