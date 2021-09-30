// 완주하지 못한 선수 (for)
function solution(participant, completion) {
  let answer = "";

  // 문자열을 오름차순으로 정렬
  // 문자열같은 경우
  // participant.sort(); 이렇게만 적어도 됨!
  // 숫자같은 경우에는 상세하게 적어주기 1, 10, 2, 3, 13...
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      // 함수 안에서 for문을 사용했을 때 return을 하면
      //break와 동시에 값을 반환한다.
      return answer;
    }
  }
  return answer;
}

// 완주하지 못한 선수 (메서드/forEach)
function solution(participant, completion) {
  let answer = "";

  //문자열을 오름차순으로 정렬
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  // 최초로 false값을 할당하고,
  // 합격자가 아닌 참가자를 찾았을 때 true 값으로 변환
  let stop = false;

  participant.forEach((name, i) => {
    // stop이 false일 때만 아래의 조건문을 실행
    if (name !== completion[i] && stop === false) {
      answer = name;
      stop = true;
    }
  });

  return answer;
}

// 완주하지 못한 선수(fillter)
function solution(participant, completion) {
  //문자열을 오름차순으로 정렬
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
