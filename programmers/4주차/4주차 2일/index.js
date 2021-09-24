// 내적 (for문)
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 내적(map, reduce)
function solution(a, b) {
  const answer = a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);

  return answer;
}

// 제일 작은 수 제거하기 (for문)
function solution(arr) {
  // 제일 작은 수를 저장해주는 변수
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  arr.splice(arr.indexOf(min), 1);
  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}

// 제일 작은 수 제거하기(메서드)
function solution(arr) {
  // 스프레드 연산자를 이용한 제일 작은 수 찾기
  const min = Math.min(...arr);

  // const min = Math.min.apply(null, arr);

  const result = arr.filter((num) => {
    return num > min;
  });
  return result.length === 0 ? [-1] : result;
}
