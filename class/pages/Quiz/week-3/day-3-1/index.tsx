import LayoutHeader from "../../../../src/componentsanynameok/commons/layout/header/LayoutHeader.container";
import LayoutBanner from "../../../../src/componentsanynameok/commons/layout/banner/LayoutBanner.container";
import styled from "@emotion/styled";

const Wrapper = styled.div``;
export default function QuizLayout() {
  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBanner />
    </Wrapper>
  );
}
