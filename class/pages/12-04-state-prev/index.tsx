import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    // prev()이전 next()이후
  }

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}
