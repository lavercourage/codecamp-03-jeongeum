import {
  Wrapper,
  InnerWrapper,
  Logo,
  LogIn,
  SignIn,
  LoggeedIn,
  UserInfo,
  LogOut,
  MoneyAdd,
} from "./layoutHeader.styles";
import { Modal } from "antd";
import IamPortBoard from "../../iamport/iamport";

export default function LayoutHeaderUI(props: any) {
  console.log("유저정보: ", props);
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo id="/" onClick={props.onClickHeader} />
        <div>
          {!props.data?.fetchUserLoggedIn.name && (
            <>
              <LogIn id="/logIn" onClick={props.onClickHeader}>
                로그인
              </LogIn>
              <SignIn id="/signIn" onClick={props.onClickHeader}>
                회원가입
              </SignIn>
            </>
          )}
          {props.data?.fetchUserLoggedIn.name && (
            <LoggeedIn>
              <UserInfo id="/mypage" onClick={props.onClickHeader}>
                {props.data?.fetchUserLoggedIn.name} 님
              </UserInfo>
              <LogOut onClick={props.onClickLogOut}>로그아웃</LogOut>
              <SignIn>
                잔액: {props.data?.fetchUserLoggedIn?.userPoint?.amount}원
              </SignIn>
              <MoneyAdd onClick={props.onClickMoneyAdd}>충전하기</MoneyAdd>
              {props.isModalVisible && (
                <Modal
                  title="Basic Modal"
                  visible={props.isModalVisible}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <IamPortBoard data={props.data} />
                </Modal>
              )}
            </LoggeedIn>
          )}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
