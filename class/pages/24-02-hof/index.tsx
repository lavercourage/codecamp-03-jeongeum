export default function HofPage() {
  //   function onClickFunction(event) {
  //     alert(`${event.target.id}번째 입니다.`);
  //   }

  const onClickFunction2 = (index) => (event) => {
    alert(`${index}번째 입니다`);
  };
  // return에 jsx가 있으면 HOC
  // return에 jsx가 없으면 HOF
  // event는 따로 안쓴다면 생략가능

  return (
    <>
      <div>연습페이지입니다.</div>
      {["cs", "yh", "hh"].map((el, index) => (
        <div onClick={onClickFunction2(index)}>{el}입니다.</div>
      ))}
    </>
  );
}

// html에서 id는 정말 고유한 하나의 값만 들어감
// id가 많이 들어가면 예상치 못한 에러가 나옴
// id를 index값으로 주게 되면 x 효율성이 떨어짐
