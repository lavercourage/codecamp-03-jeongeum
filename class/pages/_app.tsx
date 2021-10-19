// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import Layout from "../src/componentsanynameok/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import Head from "next/head";
import { GraphQLError } from "graphql";
import Operation from "antd/lib/transfer/operation";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCDNoIic1AQr_BTyPNta9RDcZbp0X2Wzfs",
  authDomain: "gimbab-25642.firebaseapp.com",
  projectId: "gimbab-25642",
  storageBucket: "gimbab-25642.appspot.com",
  messagingSenderId: "478238487517",
  appId: "1:478238487517:web:37bc2dc9284b4b553dfc34",
  measurementId: "G-FCQ2V93XQD",
});

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value22 = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // 순서 넣는게 중요함
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a0c35afa408f9ae186dace66aa85d84c"
        ></script>
        ;
      </Head> */}
      <GlobalContext.Provider value={value22}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
