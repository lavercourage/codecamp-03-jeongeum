// 피보나치 수 (for)
function solution(n) {
  // 피보나치 수열들을 저장하는 패턴
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}

// 피보나치 수 (변수를 활용)
// 0, 1, 1, 2, 3, 4, 8, 13 ...

function solution(n) {
  let prev = 0; // F(n-2)
  let next = 1; // F(n-1)
  let sum = 1; // F(n-2) + F(n-1)

  for (let i = 2; i <= n; i++) {
    sum = prev + (next % 1234567);
    prev = next;
    next = sum;
  }
  return sum;
}

// 피보나치 수
// 0, 1, 1, 2, 3, 4, 8, 13 ...

function solution(n) {
  let prev = 0; // F(n-2)
  let next = 1; // F(n-1)
  let sum = 1; // F(n-2) + F(n-1)

  const arr = [];
  for (let i = 2; i <= n; i++) {
    sum = prev + (next % 1234567);
    prev = next;
    next = sum;
    arr.push(sum);
  }
  return arr[n - 2];
}
