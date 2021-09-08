import BoardWrite from "../../src/componentsanynameok/unit/board/write/BoardWrite.container"

// import {useMutation, gql} from '@apollo/client'
// import { useState } from 'react'


// const CREATE_BOARD = gql`
//     mutation createBoard ($writer: String, $title: String, $contents: String){
//         createBoard(writer: $writer, title: $title, contents:$contents){
//             number
//             message
//         }
//     }
// `


export default function BoardNewPage(){

    return (
        <BoardWrite isEdit={false}/>
    )
    // const [ createBoard ] = useMutation(CREATE_BOARD)
    // const [ myWriter, setMyWriter] = useState("")
    // const [ myTitle, setMyTitle] = useState("")
    // const [ myContents, setMyContents] = useState("")


    // function onChangeMyWriter(event) {
    //     setMyWriter(event.target.value)
    // }
    // function onChangeMyTitle(event) {
    //     setMyTitle(event.target.value)
    // }
    // function onChangeMyContents(event) {
    //     setMyContents(event.target.value)
    // }

    // async function aaa(){
    //     const result = await createBoard({
    //         variables: { writer: myWriter, title: myTitle, contents: myContents }
    //     })
    //     console.log(result)
    //     console.log(result.data.createBoard.number)
    // }

    // return(
    //     <>
    //         작성자: <input type="text" onChange={onChangeMyWriter} /><br/>
    //         제목: <input type="text" onChange={onChangeMyTitle}/><br/>
    //         내용: <input type="text" onChange={onChangeMyContents}/><br/>
    //         <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    //     </>
    // )
}




// 1. 목적: 등록하기 후 버튼을 누르면 상세보기로 넘어가는 기능 구현
// 1-1. 상세보기에서 수정하기 버튼 누르면 수정하기 페이지로 넘어감
// 1-2. 이유 : 상세보기할때 주소창에 글 번호나 id를 넣을 수 있음

// 2. 04-04 인덱스 파일 복붙 후 기능 이름만 수정 GraphqlMutationBoard3Page -> BoardNewPage
// 2-1. 05-06 [number] 하위의 인덱스 파일 복붙 후 기능이름만 수정 (3.내용은 보드디테일)

// 8. 04-04 가져왔는데 기존에 만들어뒀던 src/componentsanynameok/unit/board/write/BoardWrite.container 여기서 긁어옴!
// 8-1. 레이아웃이 같은(?) 에딧페이지에도 동일하게 적기 (9.내용은 에딧페이지 인덱스)

// 10. 이즈에딧값은 false로 주기 왜냐면 true는 수정하기 페이지로 이동하고 false는 등록하기 페이지이니깐!! (11. 에딧페이지인덱스)