// 행렬의 덧셈 (for)
function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      // 배열의 각각의 위치에 있는 정수들을 더한 결과 값을 저장
      const abc = arr1[i][j] + arr2[i][j];
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      answer[i][j] = abc;
    }
  }
  return answer;
}

// 행렬의 덧셈 (map)
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, j) => {
      return num2 + arr2[i][j];
    });
  });
  return answer;
}
