import { useState } from 'react'
import router, {useRouter} from 'next/router'
import {
    Wrapper,
    Title,
    Section1,
    SecLeft,
    SecLTop,
    Label,
    Label2,
    Writer,
    SecRight,
    Password,
    Section2,
    Topic,
    Section3,
    Substance,
    Section4,
    Address,
    Address1,
    Postnum,
    Button,
    Address2,
    Section5,
    Address3,
    Section6,
    Upload,
    Plusimg,
    Plus,
    Upload2,
    Section7,
    Select,
    RadioBt,
    RadioName,
    Section8,
    Cancle,
    Submit,
    Error
} from '../../../styles/BoardsNew.styles'

import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation anynameokay($createBoardInput:CreateBoardInput!) {
        createBoard (
            createBoardInput: $createBoardInput
        ){
            _id
            writer
            title
            contents
        }
    }
`
// mutation에서 000 (~~) 시작하는데 저 000은 그냥 이름일뿐 다른 요소와 연결되는게 없음 짜증!
// 괄호 정리 잘하자! 하나가 더 생기고 위치가 틀어지는 바람에 오류 뜸! 오타, 괄호 주의!!!!!!!


export default function BoardsNewPage(){
    const router = useRouter()


    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [substance, setSubstance] = useState("")

    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [substanceError, setSubstanceError] = useState("")

    const [makeBoard] = useMutation(CREATE_BOARD)

    function onChangeWriter(event){
        setWriter(event.target.value)
        if (event.target.value !== ""){
            setWriterError("")
        }
    }
    function onChangePassword(event){
        setPassword(event.target.value)
        if (event.target.value !== ""){
            setPasswordError("")
        }
    }
    function onChangeLabel(event){
        setTitle(event.target.value)
        if (event.target.value){
            setTitleError("")
        }
    }
    function onChangeSubstance(event){
        setSubstance(event.target.value)
        if (event.target.value){
            setSubstanceError("")
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
        // 결과값이 만들어진 보드의 id값
        router.push(`/boards/${result.data.createBoard._id}`)
        // 라우터로 푸쉬해서 보여질 때 보드의 id값을 보여준다!
        // 라우터로 푸쉬해줌! 명령어 (콘솔따위가 아님)
        // 근데 푸쉬해서 보여줄 값이 해당 보드의 id값
        } catch(error){
            console.log(error)
        }
    }
// function onClickSubmit() {} 버튼을 발동하는 if조건문이 있다. 그리고 useMutation을 하기 위한 makeBoard 내용?이 있음 걍 같이 쓰면 됨..
// 그리고 글 등록할 때 Network에서 graphql이 2개 발생..? 왜? 

// 왼쪽 writer는 playground에서 확인하는 createBoard(createBoardInput:CreateBoardInput!):Board! 의 CreateBoardInput! 안에 들어있는 writer:String password:String title:String! 이런 내용의 형태? 항목임
// const = [state, setState] = useState("") state: 변수명 / useState: 변수를 바꿔주는 도구 / useState(""): 초기값
// 오른쪽의 writer는 const의 변수명


    // function onClickCancle () {
    //     alert("게시물 수정을 취소합니다!")
    // }



    return(
        <Wrapper>
            <Title>게시물 수정</Title>
            <Section1>
                <SecLeft>
                    <SecLTop>
                        <Label>작성자</Label>
                        <Label2>*</Label2>
                    </SecLTop>
                    <Writer 
                        name="writer"
                        type="text"
                        placeholder="이름을 적어주세요."
                        onChange = {onChangeWriter}
                        />
                    <Error>{writerError}</Error>
                </SecLeft>
                <SecRight>
                    <Label>비밀번호</Label>
                    <Password
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange = {onChangePassword}/>
                    <Error>{passwordError}</Error>
                </SecRight>
            </Section1>
            <Section2>
                <Label>제목</Label>
                <Topic name="topic" type="text" placeholder="제목을 작성해주세요." onChange={onChangeLabel}/>
                <Error>{titleError}</Error>
            </Section2>
            <Section3>
                <Label>내용</Label>
                <Substance name="substance" type="text" placeholder="내용을 작성해주세요." onChange={onChangeSubstance}/>
                <Error>{substanceError}</Error>
            </Section3>
            <Section4>
                <Label>주소</Label>
                <Address>
                    <Address1>
                        <Postnum name="postnum" type="text" placeholder="07250" />
                        {/* onChange={onChangePostNumber} */}
                        <Button >우편번호 검색</Button>
                        {/* onClick={onClickPostNumber}  */}
                    </Address1>
                    {/* <Coreect>{postNumberCorrect}</Coreect>
                    <Error>{postNumberError}</Error> */}
                    <Address2 name="address2" type="text" placeholder=""/>
                    <Address2 name="address2" type="text" placeholder=""/>
                </Address>
            </Section4>
            <Section5>
                <Label>유튜브</Label>
                <Address3 name="address3" type="text" placeholder="링크를 복사해주세요."/>
            </Section5>

            <Section6>
                <Label>사진 첨부</Label>
                <Upload>
                    <Plusimg>
                        <Plus src="/image/PlusVector.svg" />
                        <Upload2>Upload</Upload2>
                    </Plusimg>
                    <Plusimg>
                        <Plus src="/image/PlusVector.svg" />
                        <Upload2>Upload</Upload2>
                    </Plusimg>
                    <Plusimg>
                        <Plus src="/image/PlusVector.svg" />
                        <Upload2>Upload</Upload2>
                    </Plusimg>
                </Upload>
            </Section6>
            <Section7>
                <Label>메인 설정</Label>
                <Select>
                    <RadioBt type="radio" id="youtube" name="radiobt" />
                    <RadioName htmlFor="youtube">유튜브</RadioName>
                    <RadioBt type="radio" id="img" name="radiobt" />
                    <RadioName htmlFor="img">사진</RadioName>
                </Select>                            
            </Section7>
            <Section8>
                {/* <Cancle onClick={onClickCancle}>취소하기</Cancle> */}
                <Submit onClick={onClickSubmit}>등록하기</Submit>
            </Section8>
        </Wrapper>
    )

}