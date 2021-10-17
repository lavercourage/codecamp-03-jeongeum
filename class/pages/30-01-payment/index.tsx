import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  function onClickPayment() {
    var IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 상품아이디 , 상품 아이디는 중복되게 둘 수 없음
        name: "연어스테이크",
        amount: 100,
        buyer_email: "smqkemfht@naver.com",
        buyer_name: "정정",
        buyer_tel: "010-5856-9833",
        buyer_addr: "성남시",
        buyer_postcode: "12312",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // mutation() => createPointTransactionOfLoading
          // 결제 성공 시 로직,
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input type="text" /> <br />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
