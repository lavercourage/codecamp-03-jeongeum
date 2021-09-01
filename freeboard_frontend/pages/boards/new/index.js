import { useState } from 'react'

import styled from '@emotion/styled'

const Wrapper = styled.div`
    width: 1200px;
    /* height: 1847px; */
    margin: 120px;
    padding: 80px 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0 4px 20px gray;
    /* background-color: beige; */
`
const Title = styled.div`
    width: 174px;
    height: 53px;
    font-size: 36px;
    padding: 8.5px 0 0 0;
    text-align: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    color: #000000;
`
const Section1 = styled.div`
    width: 996px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
`
const SecLeft = styled.div`
    /* width: 486px;
    display: flex;
    flex-direction: column; */
`
const SecLTop = styled.div`
    display: flex;    
`
const Label = styled.div`
    height: 24px;
    margin-right: 4px;
    padding: 4px 0 0 0;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
`
const Label2 = styled.div`
    width: 8px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #FFD600;
`
const Writer = styled.input`
    width: 486px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
const SecRight = styled.div`

`
const Password = styled.input`
    width: 486px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
const Section2 = styled.div`
    margin-top: 40px;
`
const Topic = styled.input`
    width: 996px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
const Section3 = styled.div`
    margin-top: 40px;
`
const Substance = styled.textarea`
    width: 996px;
    height: 480px;
    resize: none;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding: 14px 0 0 16px;
    border: 1px solid #bdbdbd;
    /* color: red; */
`
const Section4 = styled.div`
    margin-top: 16px;
`
const Address = styled.div`
`
const Address1 = styled.div`
    display: flex;
    align-items: flex-end;
`
const Postnum = styled.input`
    width: 77px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
const Button = styled.button`
    width: 124px;
    height: 52px;
    margin-left: 16px;
    font-size: 16px;
    color: white;
    background-color: black; 
`
const Address2 = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    font-size: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
const Section5 = styled.div`
    margin-top: 40px;
`
const Address3 = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    font-size: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
const Section6 = styled.div`
    width: 996px;
    margin-top: 40px;
    /* display: flex;
    flex-direction: column; */
`
const Upload = styled.div`
    display: flex;
`
const Plusimg = styled.div`
    width: 78px;
    height: 78px;
    margin-top: 16px;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BDBDBD;
`
const Plus = styled.div`
    width: 14px;
    height: 14px;
    background-color: #4f4f4f;
`
const Upload2 = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-top: 5px;
`
const Section7 = styled.div`
    width: 996px;
    margin-top: 40px;
`
const Select = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
`
const RadioBt = styled.input`
    width: 20px;
    height: 20px;
    margin: 0px;
    color: #FFD600;
    cursor: pointer;
`
const RadioName = styled.label`
    margin-left: 10px;
    margin-right: 22px;
    font-size: 16px;
`
const Section8 = styled.div`
    margin-top: 82px;
`
const Cancle = styled.button`
    width: 179px;
	height: 52px;
	background-color: #bdbdbd;
	border: none;
	font-size: 16px;
	font-weight: 500;
    padding: 0;
	cursor: pointer;
	:hover {
		background-color: #8B0000;
        color: white;
    }
`
const Submit = styled.button`
    width: 179px;
	height: 52px;
	background-color: #FFD600;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 24px;
    padding: 0;
	cursor: pointer;
`
const Error = styled.div`
    margin-top: 12px;
    font-size: 16px;
    color: #8B0000;
`


export default function BoardsNewPage(){

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [substance, setSubstance] = useState("")

    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [substanceError, setSubstanceError] = useState("")


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

    function onClickSubmit(){
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
    }

    function onClickCancle () {
        alert("게시물 수정을 취소합니다!")
    }

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
                        type="text"
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
                        <Postnum name="postnum" type="text" placeholder="07250"/>
                        <Button>우편번호 검색</Button>
                    </Address1>
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
                        <Plus></Plus>
                        <Upload2>Upload</Upload2>
                    </Plusimg>
                    <Plusimg>
                        <Plus></Plus>
                        <Upload2>Upload</Upload2>
                    </Plusimg>
                    <Plusimg>
                        <Plus></Plus>
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
                <Cancle onClick={onClickCancle}>취소하기</Cancle>
                <Submit onClick={onClickSubmit}>수정하기</Submit>
            </Section8>
        </Wrapper>
    )

}