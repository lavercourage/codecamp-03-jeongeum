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
  InputImage,
  Input,
  Section7,
  Select,
  RadioBt,
  RadioName,
  Section8,
  Submit,
  SubmitCancle,
  Error,
} from "./WriteBoard.styles";

export default function BoardWriteUI(props) {
  // const fileRef = useRef<HTMLTextAreaElement>();
  // function onClickTextArea() {
  //   textRef.current.focus();
  // }
  return (
    <Wrapper>
      <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
      <Section1>
        <SecLeft>
          <SecLTop>
            <Label>작성자</Label>
            <Label2>*</Label2>
          </SecLTop>
          <Writer
            // name="writer"
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <Error>{props.writerError}</Error>
        </SecLeft>
        <SecRight>
          <Label>비밀번호</Label>
          <Password
            // name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <Error>{props.passwordError}</Error>
        </SecRight>
      </Section1>
      <Section2>
        <Label>제목</Label>
        <Topic
          // name="topic"
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeLabel}
          defaultValue={props.data?.fetchBoard.title}
        />
        <Error>{props.titleError}</Error>
      </Section2>
      <Section3>
        <Label>내용</Label>
        <Substance
          // name="substance"
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeSubstance}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <Error>{props.substanceError}</Error>
      </Section3>
      <Section4>
        <Label>주소</Label>
        <Address>
          <Address1>
            <Postnum name="postnum" type="text" placeholder="07250" />
            {/* onChange={onChangePostNumber} */}
            <Button>우편번호 검색</Button>
            {/* onClick={onClickPostNumber}  */}
          </Address1>
          {/* <Coreect>{postNumberCorrect}</Coreect>
                    <Error>{postNumberError}</Error> */}
          <Address2 name="address2" type="text" placeholder="" />
          <Address2 name="address3" type="text" placeholder="" />
        </Address>
      </Section4>
      <Section5>
        <Label>유튜브</Label>
        <Address3
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        />
      </Section5>
      <Section6>
        <Label>사진 첨부</Label>

        <Upload>
          <Plusimg onClick={props.onClickImageUpload1}>
            <Plus src="/image/PlusVector.svg" />
            <Upload2>Upload</Upload2>
            <Input
              ref={props.fileRef1}
              type="file"
              onChange={props.onChangeImageFile1}
            />
          </Plusimg>

          <Plusimg onClick={props.onClickImageUpload2}>
            <Plus src="/image/PlusVector.svg" />
            <Upload2>Upload</Upload2>
            <Input
              ref={props.fileRef2}
              type="file"
              onChange={props.onChangeImageFile2}
            />
          </Plusimg>
          {/* <InputImage
            src={`https://storage.googleapisl.com/${props?.imageUrl}`}
          /> */}

          <Plusimg onClick={props.onClickImageUpload3}>
            <Plus src="/image/PlusVector.svg" />
            <Upload2>Upload</Upload2>
            <Input
              ref={props.fileRef3}
              type="file"
              onChange={props.onChangeImageFile3}
            />
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
        {/* <Submit onClick={props.onClickSubmit} qqq={props.qqq}>
          {props.isEdit ? "수정하기" : "등록하기"}
          <Submit onClick={props.onClickSubmit} qqq={props.qqq}>
          {props.isEdit ? "수정하기" : "등록하기"}
        {props.isEdit && <Submit onClick={props.onClickSubmit} qqq={props.qqq}>}
          onClickEdit
        </Submit> */}
        {!props.isEdit && (
          <Submit onClick={props.onClickSubmit} qqq={props.qqq}>
            등록하기
          </Submit>
        )}
        {props.isEdit && (
          <SubmitCancle onClick={props.onClickCancel} qqq={props.qqq}>
            취소하기
          </SubmitCancle>
        )}
        {props.isEdit && (
          <Submit onClick={props.onClickEdit} qqq={props.qqq}>
            수정하기
          </Submit>
        )}
      </Section8>
    </Wrapper>
  );
}
