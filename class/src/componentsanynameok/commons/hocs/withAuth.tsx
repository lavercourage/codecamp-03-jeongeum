import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인한 사람만 입장 가능!");
      router.push("/23-01-login");
    }
  }, []);

  return <Component {...props} />;
};
