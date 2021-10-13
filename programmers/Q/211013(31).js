// 실패율

// 검토필요 오류발생!! 으앙

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  // console.log(stages)

  const clearArr = [];
  for (let i = 1; i <= N; i++) {
    clearArr.push({
      stage: i, // 현재 스테이지의 번호
      clear: 0, // 클리어하지 못한 유저의 수
      fail: 0, // 총 실패율을 저장
    });
  }

  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1]) {
      clearArr[stages[i] - 1].clear += 1;

      // 현재 스테이지와 다음 스테이지의 번호가 동일하지 않을 때
      if (stages[i] !== stages[i + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].fail = fail;
      }
    }
  }
  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  // return answer;
}

// 실패율 (메서드)
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = new Array(N).fill(1).map((el, i) => {
    const stage = el + i; //현재의 스테이지 값 저장
    const result = { stage: stage, clear: 0, fail: 0 };
    for (let l = 0; l < stages.length; l++) {
      if (stages[l] === stage) {
        result.clear += 1;
        if (stages[l + 1] !== stages) {
          result.fail = result.clear / stages.length;
          stages.splice(0, result.clear);
          break;
        }
      }
    }
    return result;
  });
}
