import FunctionalComponentUI from "./FunctionalComonent.presenter";

export default function FunctionalComponent() {
  // return <FunctionalComponentUI count={123} school="다람쥐초등학교" />; // 현재 우리가 하던 방식
  return <>{FunctionalComponentUI({ count: 123, school: "다람쥐초등학교" })}</>;
}
