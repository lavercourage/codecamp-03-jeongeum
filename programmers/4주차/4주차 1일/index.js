// 하샤드 수 (for문)

function solution(x) {
  var answer = true;

  // 숫자를 문자열 형태로 변환
  x = x.toString();

  // 총 합을 담아주는 변수
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  return x % sum === 0 ? true : false;
}

// 하샤드 수 (메서드)

function solution(x) {
  let sum = 0;
  x.toString()
    .split("")
    .forEach((num) => {
      sum += Number(num);
    });
  return x % sum === 0 ? true : false;
}

// 하샤드 수 (reduce)
// function solution(x) {
//   [1, 2, 3, 4].reduce((el, cu) => {
//       console.log(el,cu)
//       return el + cu
//   })

function solution(x) {
  let sum = x
    .toString()
    .split("")
    .reduce((el, cu) => {
      return Number(el) + Number(cu);
    });
  return x % sum === 0 ? true : false;
}
