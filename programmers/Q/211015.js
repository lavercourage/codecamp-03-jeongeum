// 크레인 인형뽑기 게임 (다시 영상보기)
function solution(board, moves) {
  let answer = 0;
  const bucket = [];
  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.lenght; i++) {
    // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];

      // 인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
        board[l][moves[l] - 1] = 0;

        // 버켓에 넣으려고 하는 인형과 버켓의 맨 위의 인형이 동일한지 비교
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.slice(bucket - length - 1, 1);
          // bucket.pop(); // 배열의 맨 뒤에 있는 데이터 삭제
          break;
        }

        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

// 크레인 인형뽑기 게임 (다시 영상보기)
function solution(board, moves) {
  var answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    // 반복문을 실행하지 않게 하는 변수 ( = false 일때만 forEach가 작동)
    let check = false;

    board.forEach((location) => {
      const doll = location[move - 1];

      if (check === false) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (bucket[bucket.length - 1] === doll) {
            bucket.splice(bucket.lengh - 1, 1);
            answer += 2;
          } else {
            bucket.push(doll);
          }

          check = true;
        }
      }
    });
  });

  return answer;
}
