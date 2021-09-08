export default function MapFruits(){

    const fruits = [
        { number: 1, title: "레드향" },
        { number: 2, title: "샤인머스켓" },
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" },
        ]

        const aaa = fruits.map((el) => (<div>{el.number} {el.title}</div>))


    return(
        <div>
            {fruits.map((el) => (
                <div>
                    <span>{el.number}</span>
                    <h1>{el.title}</h1>
                </div>
            ))}
        </div>
    )
}










// const classmates = [
//     { name: "철수", age: 10, school: "토끼초등학교" },
//     { name: "영희", age: 13, school: "다람쥐초등학교" },
//     { name: "훈이", age: 11, school: "토끼초등학교" },
// ]


// classmates.filter((el) => (el.school === "토끼초등학교"))
// {name: "철수", age: 10, school: "토끼초등학교"}
// {name: "훈이", age: 11, school: "토끼초등학교"}


// classmates.filter((el) => (el.age === 11))
// {name: "훈이", age: 11, school: "토끼초등학교"}


// classmates.filter((el) => (el.name === "영희"))
// {name: "영희", age: 13, school: "다람쥐초등학교"}