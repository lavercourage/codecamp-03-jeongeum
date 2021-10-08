// 체육복 (for)

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  // 체육복을 잃어버린 학생 수를 뺀 값을 초기값으로 저장(체육복이 있는 학생 수)
  var answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const student = lost[i];

    if (reserve.includes(student - 1)) {
      // 잃어버린 학생의 앞 번호를 reserve 배열에서 찾는다.
      reserve.splice(reserve.indexOf(student - 1), 1);
      answer++;
    } else if (reserve.includes(student + 1)) {
      // 잃어버린 학생의 뒷 번호를 reserve 배열에서 찾는다.
      reserve.splice(reserve.indexOf(student + 1), 1);
      answer++;
    }
  }

  return answer;
}

// 체육복 (forEach)
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  // 체육복을 잃어버린 학생 수를 뺀 값을 초기값으로 저장(체육복이 있는 학생 수)
  var answer = n - lost.length;

  lost.forEach((student) => {
    // 바로 앞에 있는 학생의 인덱스 값을 가져온다.
    // 없다면 -1, 있다면 해당 학생의 인덱스 값 저장
    const prev = reserve.indexOf(student - 1);

    // 바로 뒤에 있는 학생의 인덱스 값을 가져온다.
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      reserve.splice(prev, 1);
      answer++;
    } else if (next !== -1) {
      reserve.splice(next, 1);
      answer++;
    }
  });

  return answer;
}
