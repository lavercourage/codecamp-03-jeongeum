import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 160px;
  height: 300px;
`;
const WrapperTitle = styled.span`
  font-size: 20px;
`;
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

export default function TodayView() {
  const router = useRouter();
  const onClickMoveProduct = (e: any) => {
    router.push(`/market/${e.currentTarget.id}`);
  };

  return (
    <>
      <Wrapper>
        <WrapperTitle>오늘 본 상품</WrapperTitle>
        <TodayItemWrapper onClick={onClickMoveProduct}>
          <TodayThumbImg>{/* 상품 이미지 */}</TodayThumbImg>
          <TodayTitle>{/* 상품 이름 */}</TodayTitle>
        </TodayItemWrapper>
      </Wrapper>
    </>
  );
}
