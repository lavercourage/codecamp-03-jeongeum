import Head from "next/head";
import styled from "@emotion/styled";
import { useState } from "react";

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
  font-size: 20px;
  font-weight: bold;
  padding-top: 40px;
`;

const PayWord = styled.div`
  font-size: 16px;
  padding-top: 24px;
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
  border-bottom: 1px solid #ffd600;
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
  margin-top: 32px;
  border-radius: 10px;
  border: none;
  background-color: #ffd600;
`;

export default function IamPortBoard() {
  const [moneyAmount, setMoneyAmount] = useState("");
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000;

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",    // 상품 id, 중복되게 하면 안됨
        name: "노르웨이 회전 의자", // 포인트는 {~~}입니다로 적어두기
        amount: 64900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // mutation()=>createPointTransactionOfLoading / 로그인한 상태에서 가능해야 함
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  const onChangeMoneyAmount = () => {};

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Wrapper>
        <PigImg src="/image/iamport/moneypig.svg" />
        <Notice>
          현재 보유 금액은{" "}
          {
            // props로 불러오기
          }
          원 입니다!
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
