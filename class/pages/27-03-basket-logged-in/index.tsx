import { useEffect, useState } from "react";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(items);
  }, []);

  return (
    <>
      {/* 로그인 된 유저만 올 수 있는 페이지 */}
      <div>비회원으로 담은 장바구니</div>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "20px", fontWeight: "bold" }}>
            {index}
          </span>
          <span style={{ marginRight: "20px" }}>{el.writer}</span>
          <span style={{ marginRight: "20px", color: "#bdbdbd" }}>
            {el.title}
          </span>
        </div>
      ))}
    </>
  );
}
