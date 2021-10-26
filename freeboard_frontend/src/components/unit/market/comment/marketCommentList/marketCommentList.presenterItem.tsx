import {
  Wrapper,
  ProfileImg,
  Contents,
  Name,
  Comment,
  Date,
  Icons,
  Edit,
  Delete,
  Border,
} from "./marketCommentList.styles";

export default function MarketCommentBoardListUIItem() {
  return (
    <>
      <Wrapper>
        <ProfileImg />
        <Contents>
          <Name>이름</Name>
          <Comment>내용</Comment>
          <Date>날짜</Date>
        </Contents>
        <Icons>
          <Edit />
          <Delete />
        </Icons>
      </Wrapper>
      <Border />
    </>
  );
}
