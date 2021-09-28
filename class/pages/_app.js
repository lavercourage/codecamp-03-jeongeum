// import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Layout from "../src/componentsanynameok/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCDNoIic1AQr_BTyPNta9RDcZbp0X2Wzfs",
  authDomain: "gimbab-25642.firebaseapp.com",
  projectId: "gimbab-25642",
  storageBucket: "gimbab-25642.appspot.com",
  messagingSenderId: "478238487517",
  appId: "1:478238487517:web:37bc2dc9284b4b553dfc34",
  measurementId: "G-FCQ2V93XQD",
});

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
