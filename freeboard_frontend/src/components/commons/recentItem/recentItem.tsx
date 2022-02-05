import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 180px;
  height: 500px;
  border: 1px solid #bdbdbd;
  background-color: olivedrab;
`;
const RecentTitle = styled.span``;
const TodayItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px solid #888888;
`;
const TodayThumbImg = styled.img`
  width: 160px;
  height: 160px;
`;
const TodayTitle = styled.span`
  font-size: 16px;
`;
const TodayClickDate = styled.div`
  width: 120px;
`;
const DeleteInput = styled.input``;

export default function RecentViewItemBoard() {
  const router = useRouter();
  const onClickMoveProduct = (e: any) => {
    router.push(`/market/${e.currentTarget.id}`);
  };
  const onChangeDeleteInput = (e: any) => {
    e.target.value;
  };

  const offset = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - offset);
  const createdAt = today.toISOString();
  return (
    <Wrapper>
      <RecentTitle>최근본상품</RecentTitle>
      <>
        {/* map으로 돌리기? */}
        <TodayItemWrapper onClick={onClickMoveProduct}>
          <TodayThumbImg>
            {/* 상품 이미지있다면 1번째 이미지 / 없다면 기존이미지 설정해서 보여주기 */}
          </TodayThumbImg>
          <TodayTitle>{/* 상품 이름 */}</TodayTitle>
          <TodayClickDate>{createdAt}</TodayClickDate>
          <DeleteInput
            type="text"
            placeholder="지우는 인풋입니다"
            onChange={onChangeDeleteInput}
          ></DeleteInput>
        </TodayItemWrapper>
      </>
    </Wrapper>
  );
}
