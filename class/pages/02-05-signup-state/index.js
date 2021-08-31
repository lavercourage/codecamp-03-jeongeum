import styled from "@emotion/styled"
const Div = styled.div`
    font-size: 13px;
    color: red;
`

import { useState } from "react"

export default function SignupStatePage(){


    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")


    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    // div의 onChange의 중괄호에 소괄호 넣으면 event가 뜨는데 위에 기입
    // 소괄호의 이벤트는 중괄호 안의 내용을 담당
    // event.target.value의 값은 div onChange={onChangeEmail} 중괄호 안의 내용
    
    function onChangePassword1(event){
        setPassword1(event.target.value)
    }

    function onChangePassword2(event){
        setPassword2(event.target.value) 
    }

    function onClickSignup(){
        // console.log('email: ', email)
        // console.log('password1:', password1)
        // console.log('password2:', password2)
        // 콘솔은 잘 적용 됐는지 확인하기 위함

        if(!email.includes("@")){
        // 조건문을 적을 때 반대를 표현하고 싶다면 !사용
            setEmailError("@가 없습니다!")
            // alert("@가 없습니다!")
        }

        if(password1 !== password2){
            // alert("비밀번호1과 비밀번호2가 다릅니다!")
        }
    }


    return(
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/><br/>
            <Div>{emailError}</Div> {/* emotion으로 색과 사이즈 변경하기 나머지도 포함 */}
            비밀번호: <input type="password" onChange={onChangePassword1}/><br/>
            비밀번호확인: <input type="password" onChange={onChangePassword2}/><br/>
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>
    )

}