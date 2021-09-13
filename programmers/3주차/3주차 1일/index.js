// 문자열 p와 y의 개수

// for문 사용
function solution(s) {
  // p와 y의 개수를 저장하는 객체
  const check = { p: 0, y: 0 };

  // 모든 글자를 소문자로 변환
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "y") {
      check[s[i]] += 1;
    }
  }
  return check.p === check.y;
}

//
function solution(s) {
  // p와 y의 개수를 정하는
}

// 이상한 문자 만들기

function solution(s) {
  let answer = " ";
  // 단어별로 인덱스 값을 판단하는 변수
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (s[i] === " ") {
      // 빈 공백일 경우
      idx = 0;
      answer += " ";
    } else {
      answer =
        answer +
        (idx % 2 === 0
          ? s[i].toUpperCase() //대문자로 변환
          : s[i].toLowerCase());
      idx += 1; //소문자로 변환
    }
  }
  return answer;
}

function solution(s) {
  const answer = s.split(" ").map((str) => {
    return str.split(" ").map(letter, i) => {
        return i%2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    };
  });
  // console.log(answer)
}
