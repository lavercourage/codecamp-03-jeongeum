// import BoardWrite from "../../src/componentsanynameok/unit/board/write/BoardWrite.container"

// export default function BoardNewPage(){
//     return <BoardWrite isEdit={false}/>
// }





import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'


const CREATE_BOARD = gql`
    mutation createBoard ($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents:$contents){
            number
            message
        }
    }

`


export default function BoardNewPage(){
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [ myWriter, setMyWriter] = useState("")
    const [ myTitle, setMyTitle] = useState("")
    const [ myContents, setMyContents] = useState("")


    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
    }
    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
    }
    function onChangeMyContents(event) {
        setMyContents(event.target.value)
    }

    async function aaa(){
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents }
        })
        // variables : 변수
        // 준비과정2
        // await 했기때문에 기다림이 있음
        // 요청을하고 응답을 받음 7번의 number와 message
        console.log(result)
        // 전체적인 값을 불러옴
        console.log(result.data.createBoard.number)
        // GraphQl 특징상 원하는 정보만을 불러올 수 있는데, 새로만든 보드의 번호를 불러온 명령어
    }

    return(
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br/>
            제목: <input type="text" onChange={onChangeMyTitle}/><br/>
            내용: <input type="text" onChange={onChangeMyContents}/><br/>
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}