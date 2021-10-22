// 키패드 누르기

const [leftNumbers, rightNumbers] = [
    [1,4,7],
    [3,6,9]
]
console.log(leftNumbers, rightNumbers)

function solution(numbers, hand) {
    var answer = '';
    
    // 현재 손가락의 위치를 저장
    const current = {
        "left" : 10,
        "right" : 12
    }
    
    for(let i =0; i < numbers.length; i++){
        if(leftNumbers.includes(numbers[i])){
            // 누를 번호가 왼쪽 키패드에 해당하는 경우 (= 왼쪽 손가락으로 누를 경우)
            answer += "L"
            current["left"] = numbers[i] // 왼쪽 손가락 위치 변환
        } else if(rightNumbers.includes(numbers[i]){
            // 누를 번호가 오른쪽 키패드에 해당하는 경우 (= 오른쪽 손가락으로 누를 경우)
            answer += "R"
            current["right"] = numbers[i] // 오른쪽쪽 손가락 위치 변환
        } else {
            // 가운데 번호를 누를 때
            for (let hand in cur
                rent){
                
            }}}}
    



    
    return answer;
}