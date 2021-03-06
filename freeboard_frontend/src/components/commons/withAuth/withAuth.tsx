import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

// eslint-disable-next-line
export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);
  // 사용을 안하면 주석처리 해놓기! 오류가 발생할수도!

  useEffect(() => {
    // console.log(accessToken);
    const accessTokenHave = localStorage.getItem("refreshToken") || "";
    if (!accessTokenHave) {
      alert("로그인한 사람만 입장 가능!");
      router.push("/logIn");
    }
  }, []);

  return <Component {...props} />;
};
