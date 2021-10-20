import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 되었습니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   const randomValue = useMemo(() => function(){}, []);
  //   const randomValue = useMemo(() => { return Math.random() }, []);    // 이 바로 밑과 같은 코드
  const randomValue = useMemo(() => Math.random(), []);
  console.log("랜덤벨류: ", randomValue);

  const onClickLet = useCallback(() => {
    console.log("Let: ", countLet + 1);
    countLet += 1;
    // countLet = countLet + 1;     countLet += 1;     둘 다 같은 의미
  }, []);

  const onClickState = useCallback(() => {
    console.log("State: ", countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickLet}>카운트(let) +1</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickState}>카운트(state) +1</button>

      <MemoizationPresenterPage
        // countLet={countLet}
        countState={countState}
      />
    </>
  );
}
