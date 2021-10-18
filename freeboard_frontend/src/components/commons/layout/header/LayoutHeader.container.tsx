import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeder.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../unit/userInputdata/Login/LoginBoard.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { setAccessToken } = useContext(GlobalContext);

  function onClickHeader(event: any) {
    router.push(event.target.id);
  }

  function onClickLogOut() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    router.push("/");
  }

  function removeToken() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    router.push("/");
  }

  return (
    <LayoutHeaderUI
      onClickHeader={onClickHeader}
      onClickLogOut={onClickLogOut}
      // 토큰지우기 버튼
      removeToken={removeToken}
      // 토큰지우기 버튼
      data={data}
    />
  );
}
