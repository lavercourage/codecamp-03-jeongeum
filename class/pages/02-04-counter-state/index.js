import { useState } from "react"

export default function CounterStatePage(){

    // const [ State이름, state 저장도구 ] = useState("초기값")
    const [ count, setCount ] = useState(0)

    function aaa(){
        setCount(count + 1)
    }

    return (
        <>
            <div>{count}</div>
            <div>{count}</div>
            <div>{count}</div>
            <div>{count}</div>
            {/* 만약 let으로 한다면 일일히 바꿔줘야한다 */}
            <button onClick={aaa}>카운트증가</button>
        </>
    )



}