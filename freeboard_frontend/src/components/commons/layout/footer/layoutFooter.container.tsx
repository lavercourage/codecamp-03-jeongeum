import { Wrapper, InnerWrapper, CopyWrite } from "./layoutFooter.styles";

const LayoutFooter = () => {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <CopyWrite>@ 2022 김정음</CopyWrite>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default LayoutFooter;
