import {
  Wrapper,
  InnerWrapper,
  Logo,
  HeaderButton,
  LoggeedIn,
  HeaderInfo,
} from "./layoutHeader.styles";
import { Modal } from "antd";
import IamPortBoard from "../../iamport/iamport";

export default function LayoutHeaderUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo id="/" onClick={props.onClickHeader}>
          Botanistsroom
        </Logo>
        <div>
          {!props.data?.fetchUserLoggedIn.name && (
            <>
              <HeaderButton id="/logIn" onClick={props.onClickHeader}>
                로그인
              </HeaderButton>
              <HeaderButton id="/signIn" onClick={props.onClickHeader}>
                회원가입
              </HeaderButton>
            </>
          )}
          {props.data?.fetchUserLoggedIn.name && (
            <LoggeedIn>
              <HeaderInfo
                id="/mypage"
                // onClick={props.onClickHeader}
              >
                {props.data?.fetchUserLoggedIn.name} 님
              </HeaderInfo>
              <HeaderInfo>
                잔액: {props.data?.fetchUserLoggedIn?.userPoint?.amount}원
              </HeaderInfo>
              <HeaderButton onClick={props.onClickMoneyAdd}>
                충전하기
              </HeaderButton>
              <HeaderButton onClick={props.onClickLogOut}>
                로그아웃
              </HeaderButton>
              {props.isModalVisible && (
                <Modal
                  visible={props.isModalVisible}
                  // onOk={props.handleOk}
                  onCancel={props.handleCancel}
                  mask={false}
                  maskClosable={false}
                  footer={null}
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
