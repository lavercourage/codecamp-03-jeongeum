import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

import Layout from "../src/components/commons/layout";
import "antd/dist/antd.css";

import { createContext, useEffect, useState } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
// import Head from "next/head";

import { getAccessToken } from "../src/commons/libraries/getAccessToken";

export type IGlobalContext = {
  accessToken?: any;
  setAccessToken?: any;
  userInfo: any;
  setUserInfo: any;
} | null;

export const GlobalContext = createContext<IGlobalContext>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // localStorage.clear();
    // >> 토큰 만료 해결 방법
    // >> chrome개발자 도구 >> Application >> Local Storage >> accessToken 삭제
    // // const accessToken = localStorage.getItem("accessToken") || "";
    // localStorage.getItem("accessToken") 있으면 저장
    // 없으면 ("")
    // // setAccessToken(accessToken);

    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    // uri: "https://backend03.codebootcamp.co.kr/graphql01", // https://botanistsroom.shop 배포할때 사용
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            // ㄴ실행하려다가 토큰만료로 실패한 쿼리
            headers: {
              ...operation.getContext().headers, // 기존의 헤더 정보를 가져옴
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation); // 다시 해줄 작업 (아까 그 쿼라 다시 날리기)
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a0c35afa408f9ae186dace66aa85d84c"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          {/* ApolloProvider에서 client가 없으면 useQuery, useMutation 등 apllo에 대한 모든것 사용 불가 */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
