import Head from "next/head";
import styled from "@emotion/styled";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

declare const window: typeof globalThis & { IMP: any };

const Wrapper = styled.div`
  width: 480px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: gray; */
`;

const PigImg = styled.img`
  width: 80px;
`;

const Notice = styled.div`
  font-family: "SBAggroM";
  font-size: 20px;
  padding-top: 40px;
`;

const PayWord = styled.div`
  font-size: 16px;
  padding-top: 16px;
`;

const InputWrapper = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const MoneyAmount = styled.input`
  width: 160px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid #97bc62;
  text-align: center;
  :focus {
    outline: none;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const PayReauest = styled.button`
  width: 200px;
  height: 48px;
  font-family: "SBAggroL";
  font-size: 16px;
  margin-top: 32px;
  padding-top: 2px;
  border-radius: 10px;
  border: none;
  background-color: #97bc62;
  cursor: pointer;
`;

const CREATE_POINT_TRANSACTION_Of_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      balance
    }
  }
`;

export default function IamPortBoard(props: any) {
  console.log("결제페이지 정보받아오기: ", props);
  const [moneyAmount, setMoneyAmount] = useState("");
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_Of_LOADING
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000;
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",    // 상품 id, 중복되게 하면 안됨
        name: "중고마켓 포인트 충전",
        amount: moneyAmount,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
      },
      function (rsp: any) {
        // console.log("rsp: ", rsp);    // 콘솔 로그로 rsp에 담긴 내용을 확인해야하는데 콘솔이 안찍힘..;;
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          // alert("결제에 성공했습니다!");
          Modal.confirm({ content: "결제에 성공했습니다!" });
        } else {
          // alert("결제에 실패했습니다!");
          Modal.confirm({ content: "결제에 실패했습니다!" });
        }
      }
    );
  };

  const onChangeMoneyAmount = (event: any) => {
    setMoneyAmount(event.target.value);
  };

  return (
    <>
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          defer
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Wrapper>
        <PigImg src="/image/iamport/moneypig2.svg" />
        <Notice>
          현재 보유 금액은 {props.data?.fetchUserLoggedIn?.userPoint?.amount}원
          입니다!
        </Notice>
        <PayWord>충전하실 금액을 입력해주세요!</PayWord>
        <InputWrapper>
          <MoneyAmount type="number" onChange={onChangeMoneyAmount} />원
        </InputWrapper>
        <PayReauest onClick={onClickPayment}>결제하기</PayReauest>
      </Wrapper>
    </>
  );
}

// 유저인포? 불러와야한다는데 다른 코드 보고 비교해서 왜 필요한지 알아두기
