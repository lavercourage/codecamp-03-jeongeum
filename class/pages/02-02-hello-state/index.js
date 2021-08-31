import {useState} from 'react'

export default function HelloStatePage(){

    // const [ State이름, state 저장도구 ] = useState("초기값")
    const [ aaa, setAaa ] = useState("안녕하세요")

    function zzz(){
        setAaa("반갑습니다")
    }

    return (
        <button onClick={zzz}>{aaa}</button>
    )

}