// 2016년 (for)
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = "";
  // 총 일수를 저장하는 변수
  let days = 0;

  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1;
  answer = week[days % 7];
  return answer;
}

// 2016년 (map,reduce)
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // 이전 월수일 경우
          month[mn]
        : // 해당 월수일 경우 (=a 와 동일한 월수)
          b - 1)
    );
  }, 0);
  return week[days % 7];
}

// 2016년 (new Date 객체이용)
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}
