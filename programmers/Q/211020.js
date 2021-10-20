// [1차] 다트 게임 정답 코드 비교해보기 (오류난 코드)
const score = ["S", "D", "T"]; // 보너스를 판단하기 위해서 배열에 저장
const option = ["*", "#"];

function solution(dartResult) {
  var answer = 0;

  let score = ""; // 점수를 뽑아서 저장
  for (let i = 0; i < dartResult.length; i++) {
    if (Number.isNaN(Number(dartResult[i])) === false) {
      // 숫자 타입으로 변환한 데이터가 NaN 값이 아닌 경우 ( = 숫자 데이터인 경우 )
      score += dartResult[i];
    } else {
      // 숫자 타입으로 변환한 데이터가 NaN 값인 경우 ( = 문자 데이터인 경우 )
      if (bonus.includes(dartResult[i])) {
        score = Number(score);
        if (dartResult[i] === "D") {
          score = Math.pow(score, 2); // 제곱
        } else if (dartResult[i] === "T") {
          score = Math.pow(score, 3); // 3제곱
        }
        //보너스인 경우 : 앞에서 찾은 점수를 배열에 저장
        answer.push(Number(score));
        score = "";
      } else if (option.includes(dartResult[i])) {
        if (dartResult[i] === "#") {
          // 아차상인 경우 해당 점수 -1
          answer[answer.length - 1] *= -1;
        } else if (dartResult[i] === "*") {
          // 스타상인 경우 해당 점수 x2
          answer[answer.length - 1] *= 2;
          if (answer.length > 1) {
            // 앞에 데이터가 있으므로, 앞의 데이터까지 x2
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  return answer.reduce((el, cu) => el + cu);
}
