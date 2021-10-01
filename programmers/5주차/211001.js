// 모의고사 (for)
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) {
        score[j]++;
      }
    }
  }
  const biggest = Math.max(...score);
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) result.push(i + 1);
  }
  return result;
}

// 모의고사 (메서드)
// const answerTable = [
//   // 1번 수포자가 찍는 방식
//   [1, 2, 3, 4, 5],
//   // 2번 수포자가 찍는 방식
//   [2, 1, 2, 3, 2, 4, 2, 5],
//   // 3번 수포자가 찍는 방식
//   [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
// ];

// function solution(answers) {
//   const scoreList = [
//     { student: 1, score: 0 },
//     { student: 2, score: 0 },
//     { student: 3, score: 0 },
//   ];
//   answers.forEach((el) => {
//     answerTabe.forEach((cu, j) => {
//       if (cu[i % cu.length] === el) {
//         scoreList[j].score += 1;
//       }
//     });
//   });
//   const biggest = Math.max(
//     ...scoreList.map((score) => {
//       return el.score;
//     })
//   );
//   const result = scoreList.filter((num) => {
//     return biggest === num.score;
//   });
//   return result.map((el) => el.student);
// }
