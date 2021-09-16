// 자연수 뒤집어 배열로 만들기
function solution(n) {
  const result = [];

  n = String(n); // 숫자 타입을 문자열 타입으로 변환

  for (let i = 0; i < n.length; i++) {
    result.push(Number(n[i]));
  }
  result.reverse();
  return result;
  // console.log(result);
}

function solution(n) {
  const result = [];

  n = String(n); // 숫자 타입을 문자열 타입으로 변환

  for (let i = n.length - 1; i >= 0; i--) {
    result.push(Number(n[i]));
  }
  result.reverse();
}

function solution(n) {
  // toString === String
  const result = n
    .toString()
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    });
  return result;
}

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) answer.push(arr[i]);
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  if (answer.length === 0) answer.push(-1);
  return answer;
}

//1번
function solution(n) {
  const result = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    result.push(Number(n[i]));
  }
  result.reverse();
  return result;
}

//2번
function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
