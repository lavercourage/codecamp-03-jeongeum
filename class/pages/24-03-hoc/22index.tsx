// import { useContext, useEffect } from "react";
// import { GlobalContext } from "../_app";
// import { useRouter } from "next/router";

// export default function HocPage() {
// const router = useRouter();
// const { accessToken } = useContext(GlobalContext);

// useEffect(() => {
//   if (!accessToken) {
//     alert("로그인한 사람만 입장 가능!");
//     router.push("/23-01-login");
//   }
// }, []);

// // accessToken이 있는가?
// // accessToken이 없다면, login 페이지로 보내기!

// return <div>HOC 연습 페이지 입니다!</div>;
// }

import { withAuth } from "../../src/componentsanynameok/commons/hocs/withAuth";

const HocPage = () => {
  return <div>HOC 연습 페이지 입니다!</div>;
};

export default withAuth(HocPage);
