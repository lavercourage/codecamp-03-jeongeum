// 시저 암호 (for)
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백일 경우, 바로 공백을 추가한다.
      answer += " ";
    } else {
      // 소문자와 대문자를 구분해서 알파벳 문자열을 text 상수에 저장
      const text = lower.includes(s[i]) === true ? lower : upper;
      let index = text.indexOf(s[i]) + n;

      if (text[index] == undefined) {
        index = index - 26; // 알파벳의 길이만큼 뺀다.
      }
      answer += text[index];
    }
  }
  return answer;
}

// 시저 암호(메서드)

// 시저 암호(charCodeAt) - 수정 필요
function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else {
      let charcode = s.charCodeAt(i) + n;

      if (charcode > 122 || (charcode - 90 && charcode - n < 97)) {
        // 소문자 z(112) 이상을 넘어가거나
        // 대문자 Z (90) 를 넘어가면서
        // 기존의 charCcode의 값이 소문자일 경우
        charcode = charcode - 26;
      }
      result += String.fromCharCode(charcode);
    }
  }
  return result;
}
