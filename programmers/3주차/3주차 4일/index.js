// 두 개 뽑아서 더하기
function solution(numbers) {
  for (i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      // 서로 다른 인덱스 값을 더해서 저장하는 상수
      const sum = numbers[i] + numbers[j];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

function solution(numbers) {
  let answer = [];

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });
  return answer.sort((a, b) => a - b);
}

// 배열을해서 내림차순 or 오름차순
// 앞숫자와 뒷숫자가 같으면 지우고, 다르면 더해서 푸쉬하기
