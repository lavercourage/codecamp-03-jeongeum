import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react'
// useState가 container에서 사용하고 있기 때문에 여기로 옮김
import { useMutation } from '@apollo/client'
// gql은 빼고 이동, gql은 BoardWrite.queries.js에 옮김
import { CREATE_BOARD } from './BoardWrite.queries'
// gql이 여기로 이동!
// babo!! import BoardWriteUI from "./BoardWrite.presenter"


export default function BoardWrite(){

    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [ooo] = useState(false)
    // const [ooo, setOoo] = useState(true) set 써도 안써도 ㄱㅊ
    // useState()에서 그냥 글을 쓰는것과 ""를 이용해서 쓰는것의 차이는? boolean값으로 정하기 때문에 treu 또는 false 값을 꼭 적어줘야함!
    const [qqq, setQqq] = useState(false)

    // myWriter, myTitle, myContents 모두 내용이 저장되어있다면,
    // 즉, (myWriter !== "" && myTitle !== "" && myContetns !== "") 라면,
    // setQqq를 사용해서, false => true, 이모션의 버튼색을 노란색으로 변경하기


    function onChangeMyWriter(event){
        setMyWriter(event.target.value)

        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setQqq(true)
        }
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)

        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setQqq(true)
        }
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)

        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setQqq(true)
        }
    }

    // 123순서이던 213이던 312이던 암튼간에 순서 상관없이 빈칸이 채워지면 버튼의 색이 변하도록 설정하기위해서는
    // ?? 해당값에 event.target.value 넣기
    // event.target.value가 빈칸이 아니며, 나머지1도 빈칸이 아니며, 나머지2도 빈칸이 아니어야 작동 x 3 (myWriter, myTitle, myContents)



    async function aaa(){
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents }
        })
        console.log(result)
        console.log(result.data.createBoard.number)
    }


    return (
        <BoardWriteUI
            onChangeMyWriter = {onChangeMyWriter}
            onChangeMyTitle = {onChangeMyTitle}
            onChangeMyContents = {onChangeMyContents}
            aaa = {aaa}
            ooo = {ooo}
            qqq = {qqq}
    />
    )
    // 한줄일때는 괄호()생략가능
    // 두줄이상일때는 괄호() 필수
}