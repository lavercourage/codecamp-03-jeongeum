export default function TypescriptPage() {
  // 문자타입 - 타입추론
  let aaa: string = "안녕하세요";
  aaa = 3;

  //처음 값을 입력하면 타입을 입력하지 않아도 자동으로 하위 타입은 첫 타입에 설정한걸로 설정된다.

  // 문자타입
  let bbb: string;
  bbb = "안녕하세요";
  bbb = 3;

  // 숫자타입
  let ccc: number = 5;
  ccc = 333;
  ccc = "333";

  // 배열타입
  let ddd: number[] = [1, 2, 3, 4, 5];
  let eee: string[] = ["가", "나", "다", "라", "마"];
  let fff: (number | string)[] = ["가", 1, "나", 2, 3];
  //타입스크립트에서는 "또는"이 ||이 아닌 | 이거 하나

  let ggg: number[] | string[] = [1, 2, 3, 4, 5];
  //숫자로만 이루어진 배열이거나 | 문자로만 이루어진 배열이거나

  // 객체타입
  interface IProfile {
    school: string;
    age: number;
  }

  let profile: IProfile = {
    school: "람쥐쓰초등학교",
    age: 13,
  };

  profile.age = "aa";
  profile.age = "33";
  profile.age = 33;

  return <div>타입스크립트 페이지입니다</div>;
}
