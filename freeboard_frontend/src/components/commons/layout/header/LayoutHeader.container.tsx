import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./layoutHeder.presenter";
import { FETCH_USER_LOGGED_IN } from "../../../unit/userInputdata/login/loginBoard.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { setAccessToken }: any = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function onClickHeader(event: any) {
    router.push(event.target.id);
  }

  function onClickLogOut() {
    localStorage.removeItem("refreshToken");
    setAccessToken("");
    router.push("/");
  }

  // function removeToken() {
  //   localStorage.removeItem("refreshToken");
  //   setAccessToken("");
  //   router.push("/");
  // }

  const onClickMoneyAdd = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //   return (
  //     <>
  //       <Button type="primary" onClick={showModal}>
  //         Open Modal
  //       </Button>
  //
  //     </>
  //   );
  // };

  // ReactDOM.render(<App />, mountNode);

  return (
    <LayoutHeaderUI
      onClickHeader={onClickHeader}
      onClickLogOut={onClickLogOut}
      // removeToken={removeToken}    // 토큰지우기 버튼
      data={data}
      onClickMoneyAdd={onClickMoneyAdd}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}
