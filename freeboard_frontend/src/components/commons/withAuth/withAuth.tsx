import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    // const accessItem = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인한 사람만 입장 가능!");
      router.push("/logIn");
    }
  }, []);

  return <Component {...props} />;
};
