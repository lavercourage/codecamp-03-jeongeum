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
import styled from "@emotion/styled"
const Error = styled.div`
    color: red;
`


import { useState } from "react"

export default function SignInPage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
        if (event.target.value.includes("@")){
            setEmailError("")
        }
    }

    function onChangePassword1(event){
        setPassword1(event.target.value)
        if (event.target.value === password2){
            setPasswordError("")
        }
    }

    function onChangePassword2(event){
        setPassword2(event.target.value)
        if (event.target.value === password1){
            setPasswordError("")
        }
    }

    function onClickRegister(){
        if(!email.includes(".com")){
            setEmailError("올바른 이메일 형식을 입력해주세요!(.com)")
        }
        if(!email.includes("@")){
            setEmailError("@가 없습니다!")
        }
        if(password1.length < 4){
            setPasswordError("4글자 이상으로 입력해주세요!")
        }
        if(password1 !== password2){
            setPasswordError("비밀번호가 다릅니다!")
        }

        if(email.includes(".com") && email.includes("@") && password1.length > 3 && password1 === password2){
            alert("회원가입을 축하합니다!")
        }
    }

    return(
        <>
            이메일: <input type="text" onChange={onChangeEmail} /><br/>
            <Error>{emailError}</Error>
            비밀번호: <input type="text" onChange={onChangePassword1}/><br/>
            비밀번호확인: <input type="text" onChange={onChangePassword2}/><br/>
            <Error>{passwordError}</Error>
            <button onClick={onClickRegister}>가입하기</button>
        </>

    )

}
