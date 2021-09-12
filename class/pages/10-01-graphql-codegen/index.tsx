import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'


const CREATE_BOARD = gql`
    # 여기는 자바스크립트 주석
    mutation createBoard ($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents:$contents){
            number
            message
        }
    }

`
    // 언제든 백엔드로 요청할 준비완료
    // 아폴로 설명서에 있음

export default function DynamicBoardWrite(){
    const router = useRouter()



    const [ createBoard ] = useMutation<Pick <IMutation, "createBoard">, IMutationCreateBoardArgs >(CREATE_BOARD)
    // <Pick <IMutation, "createBoard"> =>응답 , IMutationCreateBoardArgs =>요청 >
    const [ myWriter, setMyWriter] = useState<string>("")
    const [ myTitle, setMyTitle] = useState<string>("")
    const [ myContents, setMyContents] = useState<string>("")


    const gbfb: String = "asdf" //상수에 타입 지정하기
    // setMyWriter(123123) //문자랑 숫자 모두 넣고 싶을때



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
        try {
            const result = await createBoard({
                variables: { writer:myWriter, title:myTitle, contents:myContents }
            })
            // result.data.createBoard.number

            
            // variables : 변수
            // 준비과정2
            // await 했기때문에 기다림이 있음
            // 요청을하고 응답을 받음 7번의 number와 message
            console.log(result)
            // 전체적인 값을 불러옴
            console.log(result.data.createBoard.number)
            // GraphQl 특징상 원하는 정보만을 불러올 수 있는데, 새로만든 보드의 번호를 불러온 명령어
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) // 옛날방식
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) //최신방식 (템플릿 리터럴)

        } catch(error){
            console.log(error)
        }
        
        // 항상 요청을 받는게 성공하지 않음
        // try 명령 부르는 걸 시도
        // 오류때문에 실행하지 못하면 해당 에러가 콘솔 로그로 안내해줌 console.log(error)
        //서버에서 정보를 불러오는 과정에서 오류가 생김 ex- 네트워크 연결 불안정, 일시적 끊김으로 인해 정보를 못받으면 

        
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