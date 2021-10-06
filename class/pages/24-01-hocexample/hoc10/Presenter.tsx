import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

function withAuth(Component) {
  return function 이름은상관없음(props) {
    const router = useRouter();
    const { accessToken } = useContext(GlobalContext);

    useEffect(() => {
      if (!accessToken) router.push("/login");
    }, []);

    return <Component {...props} />;
  };
}

const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) router.push("/login");
  }, []);

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);
