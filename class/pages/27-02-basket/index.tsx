import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // 내용이 있다면 기존의 내용 가져오기 || 없으면 빈배열 가져오기

    // 체크!!! (이미 담았는지 체크!)
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) {
        isExists = true;
      }
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다!");
      return;
    }
    // if (isExists === true) {
    //     alert("이미 장바구니에 담으셨습니다!");
    //     return;
    //   }
    // (isExists === true)와 (isExists)는 같은 의미

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);
    // 어플리케이션의 로컬스토리지에서 값을 볼 때 __typename을 안보고 싶을 때, 쓰는 방법
    // 얕은 복사를 하고, 그곳에서 __typename을 지우고 push

    // baskets.push(el);
    // __typename의 내용이 포함된 어플리케이션 로컬스토리지 값

    // console.log("담기: ", el);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    // localStorage.setItem("baskets", el);
    // 이렇게 쓴다면 [object Object] 라고 나옴

    // localStorage.setItem("baskets", JSON.stringify(el));
    // JSON.stringify 해야지 문자열로 들어감
    // 그러나 이렇게 하면 새로운 클릭을 했을때 새로 생성이 아닌, 덮어쓰기함

    // 버튼을 누를때마다
  };

  function onClickLogIn() {
    alert("로그인에 성공하셨습니다.");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다! 장바구니 페이지로 이동할까요?"
      );
      if (result) {
        router.push("/27-03-basket-logged-in");
      }
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "20px", fontWeight: "bold" }}>
            {index}
          </span>
          <span style={{ marginRight: "20px" }}>{el.title}</span>
          <span style={{ marginRight: "20px", color: "#bdbdbd" }}>
            {el.writer}
          </span>
          <button onClick={onClickBasket(el)} style={{ border: "none" }}>
            장바구니 담기
          </button>
        </div>
      ))}
      <button onClick={onClickLogIn}>로그인하기</button>
    </>
  );
}
