// // 1. 1-1)
// export default function HeLetPage(){

//     function def(){
//         document.getElementById("abc").innerText = "반갑습니다."
//     }

//     return (
//         <button id="abc" onClick={def}>안녕하세요.</button>
//     )

// }

// // 1. 1-2)
// import { useState } from "react"
// export default function HeStPage(){
    
//     const [ zzz, setClk ] = useState("안녕하세요.")

//     function qqq(){
//         setClk("반갑습니다.")
//     }

//     return (
//         <button onClick={qqq}>{zzz}</button>
//     )

// }




// // 2. 2-1)
// export default function CountLPg(){

//     function xxx(){
//         let count = Number(document.getElementById("num").innerText) + 1
//         document.getElementById("num").innerText = count
//     }

//     return(
//         <>
//             <div id="num">0</div>
//             <button onClick={xxx}>카운트증가</button>
//         </>
//     )
// }

// // 2. 2-2)
// import { useState } from "react"
// export default function CountStPg(){

//     const [ vvv, setCnt ] = useState(0)

//     function ccc(){
//         setCnt(vvv + 1)

//     }
//     return(
//         <>
//             <div>{vvv}</div>
//             <button onClick={ccc}>카운트증가</button>
//         </>

//     )
// }




// // 3. 3-1)
// export default function GetRandomNumber(){

//     function getRandom(){
//         let randomNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//         document.getElementById("rdnum").innerText = randomNum
//     }

//     return(
//         <>
//             <div id="rdnum">000000</div>
//             <button onClick={getRandom}>인증번호전송</button>
//         </>
//     )
// }

// // 3. 3-2)
// import { useState } from "react"

// export default function GetRanNumSta(){

//     const [ rannum, getRanmum ] = useState("000000")

//     function nnn(){
//         getRanmum(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
//     }

//     return(
//         <>
//             <div>{rannum}</div>
//             <button onClick={nnn}>인증번호전송</button>
//         </>
//     )
// }




// 4. 4-1)
export default function SignupPage(){

    
}