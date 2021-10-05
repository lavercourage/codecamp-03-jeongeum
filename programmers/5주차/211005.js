// 폰켓몬 (for)
function solution(nums) {
  // 폰켓몬들을 담는 배열, 현재는 비어있다!! 주의!!
  const pocket = [];
  for (let i = 0; i < nums.length; i++) {
    if (
      pocket.includes(nums[i]) === false &&
      // pocket 배열의 중복값을 제거
      pocket.length < nums.length / 2
      // pocket에 넣을 수 있는 최대 폰켓몬 값까지만 배열에 추가
    ) {
      pocket.push(nums[i]);
    }
  }
  return pocket.length;
}

// 폰켓몬 (메서드)
function solution(nums) {
  // 폰켓몬들을 담는 배열
  const pocket = [];

  nums.forEach((monster) => {
    if (pocket.includes(monster) === false && pocket.length < nums.length / 2) {
      pocket.push(monster);
    }
  });
  return pocket.length;
}
