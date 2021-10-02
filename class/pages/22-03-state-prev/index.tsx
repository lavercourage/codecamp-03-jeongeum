import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}

// import { useState } from "react";

// export default function StatePrevPage() {
//   const [count, setCount] = useState(0);

//   function onClickButton() {
//     setCount((prev) => {
//       const aaa = 33;
//       let bbb = 22;
//       // 아무 로직 쓰기

//       return prev + 1;
//     });
//   }
//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={onClickButton}>+1</button>
//     </>
//   );
// }
