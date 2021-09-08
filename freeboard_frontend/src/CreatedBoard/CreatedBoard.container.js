import BoardWriteUI from "./CreatedBoard.presenter"
import { useState } from 'react'
import { useMutation } from "@apollo/client"
import { CREATE_BOARD } from "./CreatedBoard.queries"
import router, {useRouter} from 'next/router'
// import { Writer } from "./CreatedBoard.styles"

export default function BoardWrite(){

    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [substance, setSubstance] = useState("")

    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [substanceError, setSubstanceError] = useState("")
    // 왜 불이 안들어오지?

    const [qqq, setQqq] = useState(false)
    // setQqq는 필요없음 지워도 괜찮

    const [makeBoard] = useMutation(CREATE_BOARD)

    function onChangeWriter(event){
        setWriter(event.target.value)
        if (event.target.value !== ""){
            setWriterError("")
        }
        
        if (event.target.value !== "" && password !== "" && title !== "" && substance !== ""){
            setQqq(true)
        }
    }
    function onChangePassword(event){
        setPassword(event.target.value)
        if (event.target.value !== ""){
            setPasswordError("")
        }
        
        if (writer !== "" && event.target.value !== "" && title !== "" && substance !== ""){
            setQqq(true)
        }

    }

    function onChangeLabel(event){
        setTitle(event.target.value)
        if (event.target.value){
            setTitleError("")
        }

        if (writer !== "" && password !== "" && event.target.value !== "" && substance !== ""){
            setQqq(true)
        }

    }


    function onChangeSubstance(event){
        setSubstance(event.target.value)
        if (event.target.value){
            setSubstanceError("")
        }

        if (writer !== "" && password !== "" && title !== "" && event.target.value !== ""){
            setQqq(true)
        }

    }

    async function onClickSubmit(){
        if(writer === ""){
            setWriterError("작성자를 입력해주세요!")
        }
        if(password === ""){
            setPasswordError("비밀번호를 입력해주세요!")
        }
        if(title === ""){
            setTitleError("제목을 입력해주세요!")
        }
        if (substance === ""){
            setSubstanceError("내용을 입력해주세요!")
        }
        if(writer !== "" && password !== "" && title !== "" && substance !== ""){
            alert("게시물을 등록합니다!")
        }

        try { const result = await makeBoard({
			variables: {
                createBoardInput:{
                    writer: writer,
					password: password,
					title: title,
					contents: substance
                }
			}
        })
        console.log(result)
        console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)

        } catch(error){
            console.log(error)
        }
    }

    return (<BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeLabel={onChangeLabel}
        onChangeSubstance={onChangeSubstance}
        onClickSubmit={onClickSubmit}

        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        substanceError={substanceError}
        // 키 = {값 함수}
        // presenter로 빠진 기능명 = {const [key,~~}
        // 앞 명칭과 뒤 명칭 알아놓기
        // 에러에 해당하는 부분
        // 불이 안들어옴!

        qqq={qqq}
        />
        )
}