import {
  Wrapper,
  TitleContent,
  BodyContent,
  BackgroundImgButton,
} from "./landingBoard.styles";

export default function LandingBoard(props: any) {
  return (
    <Wrapper>
      <TitleContent>어서오세요! 식물학자의 방입니다!</TitleContent>
      <BodyContent>내가 키우고 있는 식물의 정보를 공유해보세요!</BodyContent>
      <BodyContent>
        필요한 물품을 구매하거나 사용하지 않는 물품을 판매하세요!
      </BodyContent>
      <BackgroundImgButton onClick={props.onClickBoard}>
        로그인하고 더 많은 서비스 이용하기 ->
      </BackgroundImgButton>
    </Wrapper>
  );
}
