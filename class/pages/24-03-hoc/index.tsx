// import { useRouter } from "next/router";
// import { useContext, useEffect } from "react";
// import { GlobalContext } from "../_app";

import { withAuth } from "../../src/componentsanynameok/commons/hocs/withAuth";

// // oooooooooooooooooooooooooooooooo
// const withAuth = (Component) => (props) => {
//   const { accessToken } = useContext(GlobalContext);
//   const router = useRouter();

//   useEffect(() => {
//     if (!accessToken) {
//       alert("로그인한사람만입장가능");
//       router.push("/23-01-login");
//     }
//   }, []);
//   return <Component {...props} />;
// };
// // oooooooooooooooooooooooooooooooo
const HocPage = () => {
  //   const { accessToken } = useContext(GlobalContext);
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (!accessToken) {
  //       alert("로그인한사람만입장가능");
  //       router.push("/23-01-login");
  //     }
  //   }, []);

  //   // 엑세스 토큰이 있는가?
  //   // 엑세스 토큰이 없다면 로그인 페이지로 이동하기

  return <div>HOC 연습 페이지</div>;
};

export default withAuth(HocPage);

// 24-03은 마이페이지라고 생각하면 됨
// 마이페이지는 로그인된 엑세스 토큰이 있어야 입장가능한데
// 엑세스토큰이 없다면(로그인이 안된상태) 로그인이 이뤄줘야하므로
