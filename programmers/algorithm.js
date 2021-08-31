// 1.변수와 상수
// 1)선언과 할당
let name = "정음"
console.log(name)

// 2)재할당
let name = "영희"
name = "철수"
console.log(name)


// 2.배열
// 3)배열의 선언과 할당
fruits = ["사과", "바나나", "파인애플"]

// 4)배열의 기능
let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []
newFruits.push(fruits[fruits.length - 1])

// 5)배열의 기능
let students = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = students.slice(0,3)

// 6)배열의 기능
let fruits = ["사과", "바나나"]
fruits[0] = "맛있는" + fruits[0]
fruits[1] = "맛있는" + fruits[1]

// 7)문자열 배열
const number = "01012345678"
let arr = []
arr.push(number.slice(0,3))
arr.push(number.slice(3,7))
arr.push(number.slice(7,11))
let arr = [number.slice(0,3), number.slice(3,7), number.slice(7,11)]


// 3.객체
// 8)객체의 선언과 할당
let student = {};
student.name = "철수"

// 9)객체의 키&값 추가
const student = {
	name: "철수",
	age: 8
};
const school = {
	name: "다람쥐초등학교",
	teacher: "다람이"
};
student.school = school;

// 10)객체의 키&값 삭제
let student = {
    name : "철수",
    age : 8,
    drink : "사이다"
}
delete student.drink

// 11)객체와 배열의 값
const classmate = [
    {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    },
    {
        name: "영희",
        age: 8,
        school: "토끼초등학교"
    },
    {
        name: "짱구",
        age: 8,
        school: "다람쥐초등학교"
    }
]
classmate[1].school = "다람쥐초등학교"