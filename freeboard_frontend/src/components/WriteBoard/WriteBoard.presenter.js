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
  Submit,
  Error,
} from "./WriteBoard.styles";

export default function BoardWriteUI(props) {
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
            name="writer"
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
          />
          <Error>{props.writerError}</Error>
        </SecLeft>
        <SecRight>
          <Label>비밀번호</Label>
          <Password
            name="password"
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
          name="topic"
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeLabel}
        />
        <Error>{props.titleError}</Error>
      </Section2>
      <Section3>
        <Label>내용</Label>
        <Substance
          name="substance"
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeSubstance}
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
          <Address2 name="address2" type="text" placeholder="" />
        </Address>
      </Section4>
      <Section5>
        <Label>유튜브</Label>
        <Address3
          name="address3"
          type="text"
          placeholder="링크를 복사해주세요."
        />
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
        <Submit onClick={props.onClickSubmit} qqq={props.qqq}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </Submit>
      </Section8>
    </Wrapper>
  );
}
